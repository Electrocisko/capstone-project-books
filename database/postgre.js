import pg from 'pg';
import config from '../config.js'

const db = new pg.Client({
    user: config.database.USER,
    host: config.database.HOST,
    database: config.database.DATABASE,
    password: config.database.PASSWORD,
    port: config.database.PORT_PG
  }); 

  export default db;