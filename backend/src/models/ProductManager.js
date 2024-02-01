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
}

module.exports = ProductManager;
