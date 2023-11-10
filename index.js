import express from 'express';
import config from './config.js'
import db from './database/postgre.js';


const PORT = config.app.PORT;

db.connect();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));


app.get('/', (req,res) => {

 return res.render('index.ejs')
})


app.listen(PORT, () => {
    console.log(`Server listening http://localhost:${PORT}`);
})