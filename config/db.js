import  Sequelize  from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const job_vista = new Sequelize(
    process.env.JOB_VISTA_DB_NAME,
    process.env.JOB_VISTA_DB_USER,
    process.env.JOB_VISTA_DB_PASSWORD,
  {
    host: process.env.JOB_VISTA_DB_HOST,
    dialect: process.env.DB_DIALECT,
    timezone: 'Asia/Kolkata',
    dialectOptions: { timezone: 'Asia/Kolkata', }, 
  }
);

const checkDatabaseConnection = async (sequelizeInstance, dbName) => {
  try {
    await sequelizeInstance.authenticate();
    console.log(`Connection to ${dbName} has been established successfully.`);
  } catch (error) {
    console.error(`Unable to connect to ${dbName}:`, error);
  }
};

// Check both database connections
checkDatabaseConnection(job_vista, 'supporting_registry_db');


export { job_vista };

