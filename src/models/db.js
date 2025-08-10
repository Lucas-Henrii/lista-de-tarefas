const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("task", "root", "Friza@73354434", {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(function () {
    console.log("banco de dados conectado com sucesso");
  })
  .catch(function (erro) {
    console.log("Algo deu errado" + erro);
  });

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize,
};
