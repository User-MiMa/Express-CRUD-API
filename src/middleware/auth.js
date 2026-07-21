import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { handleResponse } from "../controllers/userController.js";

export const encryptPassword = async function(password){
    const hash = await bcrypt.hash(password, 10);
    return hash;
};

export const comparePassword = async function (password, hash){
    const isCorrectPassword = await bcrypt.compare(password,hash);
    return isCorrectPassword;
};

export const generateToken = function(payload){
    return jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '1m'});
};

export const authenticateToken = function(req, res, next){
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if(!token){
        handleResponse(res, 401, "Access denied");
    }

    try{
        const verifyToken = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verifyToken;
        next();
    }catch(error){
        handleResponse(res, 401, "Invalid or expired token");
    }
};