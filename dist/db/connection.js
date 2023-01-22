"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('cursonodejsts', 'root', 'Admin123*', {
    host: 'localhost',
    dialect: 'mysql',
    //logging: false, //para ver querys en log
});
exports.default = db;
//# sourceMappingURL=connection.js.map