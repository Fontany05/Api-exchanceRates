import { DataSource } from "typeorm";
import { Exchange } from "./entities/Exchange";


export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "database.sqlite",
    entities: [ Exchange ],
    synchronize: true,
})