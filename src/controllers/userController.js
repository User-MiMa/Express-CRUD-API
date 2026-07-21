import { generateToken } from "../middleware/auth.js";
import { authenticateAdminService, createAdminService, createUserService, deleteUserService, getAllUsersService, getUserByIdService, updateUserService } from "../models/userModel.js";

// Standardized response function
export const handleResponse = function (res, status, message, data = null){
    res.status(status).json({
        status,
        message,
        data,
    });
};

export const createUser = async function (req, res, next){
    const { name, email } = req.body;

    try{
        const newUser = await createUserService(name,email);
        handleResponse(res, 201, "User created successfully", newUser);
    }catch(error){
        next(error);
    }
};

export const getAllUsers = async function (req, res, next){
    try{
        const users = await getAllUsersService();
        handleResponse(res, 200, "Users fetched successfully", users);
    }catch(error){
        next(error);
    }
};

export const getUserById = async function (req, res, next){
    try{
        const user = await getUserByIdService(req.params.id);
        if(!user){ return handleResponse(res, 404, "User not found"); }
        handleResponse(res, 200, "User fetched successfully", user);
    }catch(error){
        next(error);
    }
};

export const updateUser = async function (req, res, next){
    const { name, email } = req.body;

    try{
        const updatedUser = await updateUserService(req.params.id,name, email);
        if(!updatedUser){ return handleResponse(res, 404, "User not found"); }
        handleResponse(res, 200, "User updated successfully", updatedUser);
    }catch(error){
        next(error);
    }
};

export const deleteUser = async function (req, res, next){
    try{
        const deletedUser = await deleteUserService(req.params.id);
        if(!deletedUser){ return handleResponse(res, 404, "User not found"); }
        handleResponse(res, 200, "User deleted successfully", deletedUser);
    }catch(error){
        next(error);
    }
};

export const createAdmin = async function (req, res, next){
    const {name, password} = req.body;

    try{
        const newAdmin = await createAdminService(name, password);
        handleResponse(res, 201, "Admin created successfully", newAdmin);
    }catch(error){
        next(error);
    }
};

export const loginAdmin = async function (req, res, next){
    const {name, password} = req.body;
    try{
        const logedAdmin = await authenticateAdminService(name, password);
        if(!logedAdmin){return handleResponse(res, 404, "Admin not found");}
        const token = generateToken({ name: logedAdmin });
        handleResponse(res, 200, "Welcome! See your admin token below: ", {token});
    }catch(error){
        next(error);
    }
};