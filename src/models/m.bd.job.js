const { DataTypes } = require('sequelize');
const database = require('./../infraestructure/bd')

const jobTable = database.connect().define('t_job_workers', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false
});
jobTable.sync(); // Add this line to create the table if it doesn't exist
module.exports = jobTable;
