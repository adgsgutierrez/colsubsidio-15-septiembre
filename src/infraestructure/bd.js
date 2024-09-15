const { Sequelize } = require('sequelize');

class DbService {

    static instance;

    constructor(){}

    static get(){
        if(!DbService.instance){
            DbService.instance = new DbService();
        }
        return DbService.instance;
    }

    connect() {
        console.log("Conectado a la base de datos");
        return new Sequelize(
            process.env.DATABASE_NAME,
            process.env.DATABASE_USERNAME,
            process.env.DATABASE_PASSWORD,
            {
              host: process.env.DATABASE_HOST,
              port: process.env.DATABASE_PORT,
              dialect: "mysql",
              sync: { force: false },
              define: {
                freezeTableName: true,
                timestamps: false,
              },
              pool: {
                acquire: 30000,
                idle: 10000,
                max: 3,
                min: 0,
              },
              logging: false,
            }
        );
    }
}

module.exports = DbService.get();