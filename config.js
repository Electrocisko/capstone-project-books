import dotenv from 'dotenv';

dotenv.config();

export default {
    app: {
        PORT: process.env.PORT
    },
    database: {
        USER: process.env.USER,
        HOST: process.env.HOST,
        DATABASE: process.env.DATABASE,
        PASSWORD: process.env.PASSWORD,
        PORT_PG: process.env.PORT_PG
    }
}