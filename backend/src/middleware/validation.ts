import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";

const handleValidationErrors = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

export const validateMyUserRequest = [
  body("username")
    .isString()
    .notEmpty()
    .withMessage("Username must be a string"),
  body("Gender").isString().notEmpty().withMessage("Gender must be a string"),
  body("Age").isNumeric().notEmpty().withMessage("Age must be a number"),
  body("Aadhar_no")
    .isNumeric()
    .notEmpty()
    .withMessage("Aadhar_no must be a number"),
  body("Mobile_no")
    .isNumeric()
    .notEmpty()
    .withMessage("Mobile_no must be a number"),
  body("City").isString().notEmpty().withMessage("City must be a string"),
  body("State").isString().notEmpty().withMessage("State must be a string"),
  body("PinCode")
    .isNumeric()
    .notEmpty()
    .withMessage("PinCode must be a number"),
  handleValidationErrors,
];
