import express, { Router } from "express";
import { getUser, updateUser } from "./controller";

const userRouter: Router = express.Router();

userRouter.post("/user", updateUser);

userRouter.post("/user", getUser);

export { userRouter };
