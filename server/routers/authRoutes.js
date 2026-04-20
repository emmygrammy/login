import express from 'express';
import { registerUser, loginUser,forgotPassword,resetPassword,logoutUser,deleteUser } from '../controllers/authController.js';
import {protect} from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/forgot-password', forgotPassword);
router.put('/reset-password/:token', resetPassword);
router.post('/logout',protect, logoutUser);
router.delete("/delete", protect, deleteUser);



export default router;