import express, { Request, Response, NextFunction } from "express";
import contatosRoutes from "./routes/contatosRoutes";

const app = express();

app.use(express.json());

app.use("/api", contatosRoutes);

app.use((req: Request, res: Response, next: NextFunction) => {
	res.status(404).json({ message: "Rota não encontrada" });
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	console.error(err.stack);
	res.status(500).json({ message: "Erro interno do servidor", error: err.message });
});

export default app;
