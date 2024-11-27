import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import ProductDetailComponent from '@/components/screens/productDetail';
import { IProductDataSingle } from '@/interfaces/product.interface';
import { ProductService } from '@/services/product.service';

const ProductDetail: NextPage<IProductDataSingle> = ({ product }) => {
  return <ProductDetailComponent product={product} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await ProductService.getAll();

  return {
    paths: products.map((product) => ({
      params: { id: product.id },
    })),
    fallback: 'blocking',
  };
};

// Использовано для кэширования каждого продукта по id
export const getStaticProps: GetStaticProps<IProductDataSingle> = async ({ params }) => {
  const product = await ProductService.getProductById(String(params?.id));

  return {
    props: { product },
    revalidate: 10,
  };
};

export default ProductDetail;
