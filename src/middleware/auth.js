import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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