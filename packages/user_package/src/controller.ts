import { Request, Response } from "express";
import jwt from "jsonwebtoken";

// import { getUserById } from "database_package/src/controller";

export const getUser = (req: Request, res: Response): void => {
	// getUserById("123").then((result) => {
	// 	if (!result.isSuccess) {
	// 		return res
	// 			.status(404)
	// 			.json({ message: "Usuário não encontrado!", data: result.error });
	// 	}

	// 	return res.status(200).json({ result: result.value });
	// });

	res.status(200).json({ message: "Usuário encontrado com sucesso!" });
};

export const updateUser = (req: Request, res: Response): void => {
	const token = jwt.sign({ userId: 123 }, "secret", { expiresIn: "1h" });
	res
		.status(200)
		.json({ token: token, message: "Usuário atualizado com sucesso!" });
};
