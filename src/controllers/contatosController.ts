import { Request, Response } from "express";
import { Contatos } from "../entities/Contatos";
import { myDataSource } from "../../app-data-source";

export const getContatos = async (req: Request, res: Response) => {
	const contato = await myDataSource
		.getRepository(Contatos)
		.find({ relations: { especialidades: true } });
	res.send(contato);
};

export const postContato = (req: Request, res: Response, next: Function) => {};
