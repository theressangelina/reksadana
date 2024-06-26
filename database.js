import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('database_name', 'username', 'password', {
    host: 'localhost',
    dialect: 'postgres' // Ubah ini menjadi 'postgres'
});

export default sequelize;
