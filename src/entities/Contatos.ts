import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, Index } from "typeorm";
import { Especialidades } from "./Especialidades";

@Entity()
export class Contatos {
	@PrimaryGeneratedColumn()
	id!: number;

	@ManyToOne(() => Especialidades, (especialidades) => especialidades.id)
	especialidades!: Especialidades;

	@Column()
	nome!: string;

	@Column({ nullable: true })
	telefone!: string;

	@Column({ nullable: true })
	telefone2!: string;

	@Column({ name: "link_instagram", type: "varchar", length: 255, nullable: true })
	instagram!: string;

	@Column({ nullable: true })
	endereco!: string;

    @Column({type: 'text', nullable: true })
    observacoes!: string;
}
