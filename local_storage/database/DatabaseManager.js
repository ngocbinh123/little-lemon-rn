import * as SQLite from "expo-sqlite";
const DATABASE_NAME = "MenuDb";
class DatabaseManager {
  db = null;
  constructor() {
    this.initialize();
  }

  async initialize() {
    try {
      this.db = await SQLite.openDatabaseAsync(DATABASE_NAME);
      await this.createTable();
    } catch (error) {
      console.error("could not open openDatabase:", error);
      throw error;
    }
  }

  async createTable() {
    if (!this.db) {
      console.error("Database is not initialized");
      return;
    }

    try {
      await this.db.execAsync(`
          PRAGMA journal_mode = WAL;
          CREATE TABLE IF NOT EXISTS menu (
            name TEXT PRIMARY KEY,
            price REAL NOT NULL,
            description TEXT,
            image TEXT,
            category TEXT
          );
        `);
      console.log("Table created successfully");
    } catch (error) {
      console.error("Error creating table:", error);
    }
  }

  async insertMenuItem(item) {
    if (!this.db) {
      console.error("Database is not initialized");
      throw new Error("Database is not initialized");
    }

    return new Promise((resolve, reject) => {
      this.db.transaction((tx) => {
        tx.executeSql(
          `INSERT INTO menu (name, price, description, image, category) VALUES (?, ?, ?, ?, ?)`,
          [item.name, item.price, item.description, item.image, item.category],
          (_, result) => resolve(result),
          (_, error) => reject(error),
        );
      });
    });
  }

  async insertAllMenuItems(items) {
    if (!this.db) {
      console.error("[insertAllMenuItems] Database is not initialized");
      throw new Error("[insertAllMenuItems] Database is not initialized");
    }

    // insert all items  into db by execute runAsync
    for (const item of items) {
      const result = await this.db.runAsync(
        `INSERT INTO menu (name, price, description, image, category) VALUES (?, ?, ?, ?, ?)`,
        [item.name, item.price, item.description, item.image, item.category],
      );
      console.log(result);
    }
  }

  async getAllMenuItems() {
    if (!this.db) {
      console.error("[getAllMenuItems] Database is not initialized");
      throw new Error("[getAllMenuItems] Database is not initialized");
    }

    const query = "SELECT * FROM menu";
    const allRows = await this.db.getAllAsync(query);
    return allRows;
  }

  async getMenuItemsWithFilter(searchText, tags) {
    if (!this.db) {
      console.error("[getMenuItemsWithFilter] Database is not initialized");
      throw new Error("[getMenuItemsWithFilter] Database is not initialized");
    }

    try {
      // Base query
      let query = "SELECT * FROM menu";
      const params = [];

      // Build WHERE clause
      const whereClauses = [];

      // Search text filter
      if (searchText && searchText.length > 0) {
        whereClauses.push(`name COLLATE NOCASE LIKE ?`);
        params.push(`%${searchText}%`);
      }

      // Tags filter using IN clause
      if (tags && tags.length > 0) {
        const placeholders = tags.map(() => "?").join(", ");
        whereClauses.push(`category COLLATE NOCASE IN (${placeholders})`);
        params.push(...tags);
      }

      // If there are any conditions, append WHERE clause
      if (whereClauses.length > 0) {
        query += ` WHERE ${whereClauses.join(" AND ")}`;
      }

      console.log(
        "[getMenuItemsWithFilter] Executing query:",
        query,
        "with params:",
        params,
      );

      // Execute the query
      const result = await this.db.getAllAsync(query, params);
      return result;
    } catch (error) {
      console.error("[getMenuItemsWithFilter] Error executing query:", error);
      throw error;
    }
  }
}

const dbManager = new DatabaseManager();
export default dbManager;
