import express from "express";
import { userRouter } from "./routes";
const app = express();

// Middleware para permitir o parsing de JSON no corpo das requisições
app.use(express.json());

// Rotas de autenticação
app.use("/user", userRouter);

// Porta em que o servidor irá escutar
const PORT = process.env.PORT || 3000;

// Iniciar o servidor Express
app.listen(PORT, () => {
	console.log(`Servidor Express rodando na porta ${PORT}`);
});
