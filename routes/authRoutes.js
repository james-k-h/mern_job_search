import express from "express";
const router = express.Router();

import rateLimiter from "express-rate-limit";
import {
  register,
  login,
  updateUser,
  getCurrentUser,
  logout,
} from "../controllers/authController.js";
import authenticateUser from "../middleware/auth.js";

const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
  message: "Too many requests from this IP, please try again after 15 minutes",
});

// you can add api limiter to any route if you want
router.route("/register").post(apiLimiter, register);
router.route("/login").post(apiLimiter, login);
router.get('/logout', logout);
router.route("/updateUser").patch(authenticateUser, updateUser);
router.route("/getCurrentUser").get(authenticateUser, getCurrentUser);

export default router;
