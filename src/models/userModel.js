import { hash } from "bcrypt";
import { pool } from "../config/db.js";
import {encryptPassword} from "../middleware/auth.js";

export const getAllUsersService = async function(){
    const result = await pool.query('SELECT * FROM users');
    return result.rows;
};

export const getUserByIdService = async function(id){
    const result = await pool.query('SELECT * FROM users WHERE id = $1',[id]);
    return result.rows[0];
};

export const createUserService = async function(name, email){
    const result = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',[name, email]);
    return result.rows[0];
};

export const updateUserService = async function(id, name, email){
    const result = await pool.query('UPDATE users SET name=$1, email=$2 WHERE id=$3 RETURNING *',[name, email, id]);
    return result.rows[0];
};

export const deleteUserService = async function(id){
    const result = await pool.query('DELETE FROM users WHERE id=$1 RETURNING *',[id]);
    return result.rows[0];
};

export const createAdminService = async function (name, password){
    const passwordHash = await encryptPassword(password);
    const result = await pool.query('INSERT INTO admins (name, password) VALUES ($1, $2) RETURNING name', [name, passwordHash]);
    return result.rows[0];
};