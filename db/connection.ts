import { Sequelize } from 'sequelize'

const db = new Sequelize('cursonodejsts', 'root', 'Admin123*', {
    host: 'localhost',
    dialect: 'mysql',
    //logging: false, //para ver querys en log

});

export default db;