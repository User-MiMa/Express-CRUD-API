import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {pool} from "./config/db.js"

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

//Middlewares
app.use(express.json());
app.use(cors());

//Routes

//Error handling middleware

//Test PG connection
app.get("/", async function(req, res){

    const result = await pool.query("SELECT current_database()");
    res.send(`El nombre de la base de datos es: ${result.rows[0].current_database}`);

});

//Server listen

app.listen(port,function(){console.log(`Listening app in port ${port}`)});