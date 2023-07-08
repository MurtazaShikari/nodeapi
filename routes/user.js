import express from "express";
import { User } from "../models/user.js";
import {
  getAllUsers,
  getMyProfile,
  login,
  register,
} from "../controllers/user.js";

const router = express.Router();

router.get("/all", getAllUsers);

router.post("/new", register);
router.post("/login", login);

//Dynamic Routes should always be in the last
router.get("/me", getMyProfile);

export default router;
