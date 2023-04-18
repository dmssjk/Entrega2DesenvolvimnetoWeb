const Sequelize = require("sequelize");

const database = require("./db");

const produto = database.define("produto", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  DataCriacao: {
    type: Sequelize.DATE,
    allowNull: false,
  },
}); /* nome da tabela */

module.export = produto;
