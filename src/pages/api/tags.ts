import { NextApiRequest, NextApiResponse } from "next";
import { Like } from "typeorm";
import { getConncetion } from "../../datasource";
import { Tag } from "../../entity";
import { Product } from "../../entity/product";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Array<Tag>>
) {
    const connection = await getConncetion();
    const data = await connection.getRepository(Tag).find({
        where: {
            product: {
                name: Like
            }
        }
    })

    res.status(200).json(data)
}