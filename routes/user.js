import express from "express";
import { User } from "../models/user.js";
import {
  getAllUsers,
  getUserDetails,
  register,
  special,
} from "../controllers/user.js";

const router = express.Router();

router.get("/all", getAllUsers);

router.post("/new", register);

router.get("/userid/special", special);

//Dynamic Routes should always be in the last
router.get("/userid/:id", getUserDetails);

export default router;
