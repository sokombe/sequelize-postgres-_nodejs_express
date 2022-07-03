const dbconfig = require("../config/dbConfig");

const { Sequelize, DataTypes } = require('sequelize')

// we initalise the sequelize ------------------------------------------------
const sequelize = new Sequelize(
    dbconfig.DB,
    dbconfig.USER,
    dbconfig.PASSWORD,
    {
        host: dbconfig.HOST,
        dialect: dbconfig.dialect,
        opereratorsAliases: false,

        pool:{
            max: dbconfig.pool.max,
            min: dbconfig.pool.min,
            acquire: dbconfig.pool.acquire,
            idle: dbconfig.pool.idle
        }

    }
)

// we authentificate --------------------------------------------------------------
sequelize.authenticate()
.then( ()=>{
    console.log("Connected")
} )
.catch(err=>{
    console.log("error: "+err)
})



// we create the main db ---------------------------------------------------------
const mydb={}
mydb.Sequelize=Sequelize
mydb.sequelize=sequelize

// we add our models in our db ----------------------------------------------------
mydb.project=require('./projectModel')(sequelize,DataTypes)
mydb.task=require('./taskModel')(sequelize,DataTypes)
// .....

mydb.sequelize.sync({force:false})
.then(()=>{
    console.log('yes re-sync  done')
})

// we create the db and return that ---------------------------------------------
 module.exports= mydb