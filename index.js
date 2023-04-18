async () => {
  const database = require("./db");
  const produto = require("./produto");

  await database.Sync();

  await database.create({
    Nome: "produto1",
  });
};
