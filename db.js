const Sequelize = require("sequelize");

const componenteSequelize = new Sequelize("dpProduto", "root", "Gaivota1798+", {
  dialect: "mysql",
  host: "localhost",
  port: 1344,
}); /* configurar de acordo com sua configurçõ local */

module.exports = componenteSequelize;
