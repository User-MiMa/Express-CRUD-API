import { pool } from "../config/db.js";

export const createUserTable = async function (){
    const queryCreateTable = `CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
    )`;

    try{
        pool.query(queryCreateTable);
        console.log('Table created successfully');
    }catch(error){
        console.log('Error creating user table', error);
    }
};