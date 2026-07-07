import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

//Middlewares
app.use(express.json());
app.use(cors);

//Routes

//Error handling middleware

//Server listen

app.listen(port,function(){console.log(`Listening app in port ${port}`)});