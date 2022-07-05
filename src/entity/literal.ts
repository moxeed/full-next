import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
export class Literal {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({ length: 128 })
    value!: string
}