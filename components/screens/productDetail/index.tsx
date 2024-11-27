import { FC } from 'react';

import MainLayout from '@/components/layout';
import ProductItem from '@/components/ui/productItem';
import { IProductDataSingle } from '@/interfaces/product.interface';

const ProductDetailComponent: FC<IProductDataSingle> = ({ product }) => {
  return (
    <MainLayout>
      <ProductItem product={product} isDetail />
    </MainLayout>
  );
};

export default ProductDetailComponent;
