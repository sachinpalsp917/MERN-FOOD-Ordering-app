import express from "express";
import userController from "../controller/user.controller";
import { jwtCheck } from "../middleware/auth.middleware";

const router = express.Router();

router.post("/create-user", jwtCheck, userController.createCurrentUser);

export default router;
