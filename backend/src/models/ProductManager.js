const AbstractManager = require("./AbstractManager");

// Methode CRUD

class ProductManager extends AbstractManager {
  constructor() {
    super({ table: "product" });
  }

  // The R of CRUD - Read operations

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
    return rows;
  }

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the item
    return rows[0];
  }
}

module.exports = ProductManager;
