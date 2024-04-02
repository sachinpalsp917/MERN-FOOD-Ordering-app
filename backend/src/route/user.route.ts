import express from "express";
import userController from "../controller/user.controller";

const router = express.Router();

router.post("/create-user", userController.createCurrentUser);

export default router;
