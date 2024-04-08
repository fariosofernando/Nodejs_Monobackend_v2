import express, { Router } from "express";
import { loginUser, registerUser, verifyToken } from "./controller";

const authRouter: Router = express.Router();

// Rota para registrar um novo usuário
authRouter.post("/register", registerUser);

// Rota para fazer login
authRouter.post("/login", loginUser);

// Rota para verificar se um usuário está autenticado
authRouter.get("/verify", verifyToken);

export { authRouter };
