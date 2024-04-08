import { Result } from "./util";

// Função para obter um usuário pelo ID
export const getUserById = async (userID: string): Promise<Result<any>> => {
	try {
		if (!userID) {
			return Result.failure("ID de usuário não fornecido", {
				message: "Usuário não encontrado",
			});
		}
		return Result.success({
			message: "Usuário encontrado com sucesso!",
		});
	} catch (error) {
		console.error(error);
		return Result.failure("ID de usuário não fornecido", {
			message: "Ocorreu um erro ao obter o usuário",
		});
	}
};

// Função para obter todos os usuários
export const getAllUsers = async (
	req: Request,
	res: Response
): Promise<Result<any>> => {
	try {
		return Result.success({
			users: [
				{ name: "John", age: 30 },
				{ name: "Jane", age: 25 },
			],
		});
	} catch (error) {
		console.error(error);
		return Result.failure("ID de usuário não fornecido", {
			message: "Ocorreu um erro ao obter o usuário",
		});
	}
};
