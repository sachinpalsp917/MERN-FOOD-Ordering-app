import express from "express";
import userController from "../controller/user.controller";
import { jwtCheck, jwtParse } from "../middleware/auth.middleware";
import { validateMyUserRequest } from "../middleware/validation";

const router = express.Router();

router.get(
  "/get-user-details",
  jwtCheck,
  jwtParse,
  userController.getCurrentUser
);
router.post("/create-user", jwtCheck, userController.createCurrentUser);
router.put(
  "/update-user-details",
  jwtCheck,
  jwtParse,
  validateMyUserRequest,
  userController.updateCurrentUser
);

export default router;
