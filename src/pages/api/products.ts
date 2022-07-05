import { NextApiRequest, NextApiResponse } from "next";
import { Like } from "typeorm";
import { getConncetion } from "../../datasource";
import { Product } from "../../entity/product";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Array<Product>>
) {
    const connection = await getConncetion();
    const data = await connection.getRepository(Product).find({
        where: {
            name: Like("%p1%")
        }
    })

    res.status(200).json(data)
}