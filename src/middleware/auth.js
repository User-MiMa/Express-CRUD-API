import bcrypt from "bcrypt";

export const encryptPassword = async function(password){
    const hash = await bcrypt.hash(password, 10);
    return hash;
};