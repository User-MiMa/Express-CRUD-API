import { pool } from "../config/db.js";

export const createUserTable = async function (){
    const queryCreateTable = `CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
    )`;

    const queryPopulateTable = `INSERT INTO users (name, email)
                            SELECT * FROM (VALUES 
                                ('Bulash', 'bulash@example.com'),
                                ('Garbu', 'garbu@email.com'),
                                ('Kremx', 'kremx@other.com')
                            ) AS v(name, email)
                            WHERE NOT EXISTS (SELECT 1 FROM users LIMIT 1)`;

    try{
        await pool.query(queryCreateTable);
        await pool.query(queryPopulateTable);
        console.log('Table created successfully');
    }catch(error){
        console.log('Error creating user table', error);
    }
};