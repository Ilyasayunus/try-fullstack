import { Sequelize } from "sequelize";

const db = new Sequelize('crud_db', 'root', 'yunus765', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;
