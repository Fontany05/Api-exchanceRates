import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Exchange {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    currency: string

    @Column("float")
    rate: number

    @Column()
    base: string
}