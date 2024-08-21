import { Request, Response } from "express";
import { Contatos } from "../entities/Contatos";
import { myDataSource } from "../../app-data-source";

export const getContatos = async (req: Request, res: Response) => {
	const contato = await myDataSource
		.getRepository(Contatos)
		.find({ relations: { especialidade: true } });
	res.send(contato);
};

export const postContato = async (req: Request, res: Response, next: Function) => {
	const contato: Contatos = req.body;
	if (!contato.nome || !contato.especialidade) {
		return res.status(400).send({
			error: `Estrutura do objeto inválida, ${
				!contato.nome && !contato.especialidade
					? "Contato e especialidade são obrigatórios."
					: contato.nome
					? "Especialidade não informada"
					: "Nome não informado"
			}`,
		});
	}

	const contatoSalvo = await myDataSource.getRepository(Contatos).save(contato);
	const contatoComEspecialidade = await myDataSource.getRepository(Contatos).findOne({
		where: { id: contatoSalvo.id },
		relations: { especialidade: true },
	});

	res.status(201).send(contatoComEspecialidade);
};
