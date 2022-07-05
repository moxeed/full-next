// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getConncetion } from '../../datasource'
import { Product } from '../../entity/product'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const connection = await getConncetion();

  await connection.getRepository(Product).save({
    name: "p1",
    price: 20000,
    description: "sdjsdjksijdkijskd",
    tags: [
      {
        kind: {
          id: 5
        },
        value: {
          id: 6,
        }
      }
    ]
  });

  res.status(200).json({ name: 'John Doe' })
}
