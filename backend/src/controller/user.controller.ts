import { Request, Response } from "express";
import User from "../model/user.model";
import { send } from "process";

const createCurrentUser = async (req: Request, res: Response) => {
  try {
    const { auth0Id } = req.body;
    const existingUser = await User.findOne({ auth0Id });

    if (existingUser) {
      return res.status(200).json({ message: "User already exists" });
    }

    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser.toObject());
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error creating user" });
  }
};

const updateCurrentUser = async (req: Request, res: Response) => {
  try {
    const {
      username,
      Gender,
      Age,
      Aadhar_no,
      Mobile_no,
      City,
      State,
      PinCode,
    } = req.body;
    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    user.username = username;
    user.Gender = Gender;
    user.Age = Age;
    user.Aadhar_no = Aadhar_no;
    user.Mobile_no = Mobile_no;
    user.City = City;
    user.State = State;
    user.PinCode = PinCode;

    await user.save();
    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error Updating user" });
  }
};

export default { createCurrentUser, updateCurrentUser };
