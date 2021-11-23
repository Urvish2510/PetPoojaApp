require('dotenv').config();
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

// Database Connection
import ConnectDB from './database/connection';

// API
import Auth from './API/Auth';

const petpooja = express();
petpooja.use(cors());
petpooja.use(express.json());
petpooja.use(helmet());

// Application Routes
petpooja.use("/auth", Auth)

petpooja.listen(1122, () => { 
    ConnectDB()
        .then(() => {
            console.log("Server is running !!!");
        })
        .catch((error) => {
            console.log("Server is running but Database connection failed !!!");
            console.log(error);
        });
});