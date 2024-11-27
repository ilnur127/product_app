// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { products } from '@/constants/products';
import { IProduct } from '@/interfaces/product.interface';

export default function handler(req: NextApiRequest, res: NextApiResponse<IProduct[]>) {
  res.status(200).json(products);
}
