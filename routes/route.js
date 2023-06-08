import express from "express";
const router = express.Router();
import UserController from "../controllers/auth.js";

//signup route
router.post('/SignUp', UserController.userRegistration);
router.get('/SignUp', UserController.userRegistration);

export default router;