require ("dotenv").config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: 'mysql',
    logging: false
});

const connectDb = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established.');
    }
    catch (error) {
        console.error('Unable to connect to the database:' + error);
    }
};

connectDb();

const Dinosaurs = require('./dynausors')(sequelize);

sequelize.sync({ alter: true });

const db = {
    sequelize,
    Dinosaurs
};

module.exports = db