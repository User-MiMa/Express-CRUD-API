import express from 'express';
import { createUser, deleteUser, getAllUsers, getUserById, updateUser } from '../controllers/userController.js';
import { validateUser } from '../controllers/inputValidator.js';

export const router = express.Router();

router.get("/user",getAllUsers);
router.post("/user",validateUser,createUser);

router.get("/user/:id",getUserById);
router.put("/user/:id",validateUser,updateUser);

router.delete("/user/:id",deleteUser);

