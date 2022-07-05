import 'reflect-metadata'
import { DataSource } from "typeorm";
import { Literal } from './entity/literal';
import { Product } from "./entity/product";
import { Tag } from './entity/tag';

const AppDataSource = new DataSource({
    type: "sqlite",
    database: "./db.sqlite",
    entities: [Product, Tag, Literal],
    synchronize: true
})

export const getConncetion = async (): Promise<DataSource> => {

    if (AppDataSource.isInitialized) {
        return AppDataSource;
    }

    return await AppDataSource.initialize();
}