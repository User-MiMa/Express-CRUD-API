import express from 'express';
import { loginAdmin, createAdmin, createUser, deleteUser, getAllUsers, getUserById, updateUser } from '../controllers/userController.js';
import { validateUser } from '../controllers/inputValidator.js';
import { authenticateToken } from '../middleware/auth.js';
import { admLimiter, authLimiter } from '../middleware/rateLimiter.js';

export const router = express.Router();

router.get("/user",getAllUsers);
router.post("/user",validateUser,authenticateToken,createUser);

router.get("/user/:id",getUserById);
router.put("/user/:id",validateUser,authenticateToken,updateUser);

router.delete("/user/:id",authenticateToken,deleteUser);

router.post("/admin",admLimiter,createAdmin);

router.post("/admin/login",authLimiter,loginAdmin);