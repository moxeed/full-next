import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Literal } from "./literal";
import { Product } from "./product";

@Entity()
export class Tag {
    @PrimaryGeneratedColumn()
    id!: number

    @ManyToOne(() => Literal, {
        cascade: true,
        eager: true
    })
    kind!: Literal

    @ManyToOne(() => Literal, {
        cascade: true,
        eager: true
    })
    value!: Literal

    @ManyToOne(() => Product, (product) => product.tags)
    product!: any
}