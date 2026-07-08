import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { pool } from "./config/db.js"
import userRoutes from "./routes/userRoutes.js";
import { errorHandling } from "./middleware/errorHandler.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

//Middlewares
app.use(express.json());
app.use(cors());

//Routes
app.get('/api',userRoutes);

//Error handling middleware
app.use(errorHandling);

//Test PG connection
app.get("/", async function(req, res){

    const result = await pool.query("SELECT current_database()");
    res.send(`El nombre de la base de datos es: ${result.rows[0].current_database}`);

});

//Server listen

app.listen(port,function(){console.log(`Listening app in port ${port}`)});