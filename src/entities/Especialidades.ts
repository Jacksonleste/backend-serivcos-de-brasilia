import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Contatos } from "./Contatos";


@Entity()
export class Especialidades {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    nome!: string;

    @OneToMany(()=> Contatos, (contato)=> contato.especialidade)
    contatos!: Contatos[];
}