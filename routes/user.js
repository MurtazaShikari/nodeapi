import express from "express";
import {
  getAllUsers,
  getMyProfile,
  login,
  logout,
  register,
} from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.get("/all", getAllUsers);

router.post("/new", register);
router.post("/login", login);
router.get("/logout", logout);

//Dynamic Routes should always be in the last
router.get("/me", isAuthenticated, getMyProfile);

export default router;
