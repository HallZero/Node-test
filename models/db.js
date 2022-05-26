const Sequelize = require('sequelize');

    //Conexão com o banco de dados MySQL
    const sequelize = new Sequelize('test', 'root', 'Aur&l1on', {
        host: "localhost",
        dialect: 'mysql'
    });

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}