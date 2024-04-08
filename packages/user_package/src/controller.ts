import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export const getUser = (req: Request, res: Response): void => {
	res.status(200).json({ message: "Usuário encontrado com sucesso!" });
};

export const updateUser = (req: Request, res: Response): void => {
	const token = jwt.sign({ userId: 123 }, "secret", { expiresIn: "1h" });
	res
		.status(200)
		.json({ token: token, message: "Usuário atualizado com sucesso!" });
};
