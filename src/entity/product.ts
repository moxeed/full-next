import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Tag } from "./tag";

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id!: number

    @Column({
        type: "int"
    })
    price!: number

    @Column({
        length: 128
    })
    name!: string

    @Column({
        length: 512
    })
    description!: string

    @OneToMany(() => Tag, (tag) => tag.product, {
        eager: true,
        cascade: true
    })
    tags!: Array<Tag>
}