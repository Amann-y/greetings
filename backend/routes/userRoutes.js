import express from "express";
import {
  getUserData,
  postUserData,
  deleteUserData,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/get", getUserData);
router.post("/post", postUserData);
router.delete("/delete/:id", deleteUserData);

export default router;
