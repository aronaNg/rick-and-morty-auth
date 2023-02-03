import mysql from 'mysql2';
import { Sequelize } from "sequelize";
 
const db = new Sequelize('teprow', 'arona', 'Aronangom2000@', {
    host: "localhost",
    dialect: "mysql"
});


 
export default db;