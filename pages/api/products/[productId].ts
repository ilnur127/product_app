// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { products } from '@/constants/products';
import { IProduct } from '@/interfaces/product.interface';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse<IProduct>) {
  const needProduct = products.find((product) => product.id == req.query.productId);
  res.status(200).json(needProduct || ({} as IProduct));
}
