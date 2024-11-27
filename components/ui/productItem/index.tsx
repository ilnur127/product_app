import Image from 'next/image';
import { memo, type FC } from 'react';

import type { IProductDataSingle } from '@/interfaces/product.interface';

import classes from './index.module.scss';

const ProductItem: FC<IProductDataSingle> = ({ product, isDetail }) => {
  return (
    <div className={classes.item}>
      {isDetail && <Image src={product.image} alt={product.name} width={192} height={108} />}
      <div>
        <h2>{product.name}</h2>
        <p>{isDetail ? product.fullInfo : product.briefInfo}</p>
        <small>{product.price} р.</small>
      </div>
    </div>
  );
};

const ProductItemMemo = memo(ProductItem);

export default ProductItemMemo;
