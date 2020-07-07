import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './routes/routes';
import database from './models/database';

//Init
const app = express();

//Config
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors({origin: true}));

//Use routes
app.use(router);

//Launch
const port = 3001;

database.connectDb().then(async () => {
    console.log('Database server is connected...');
    app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    });
});