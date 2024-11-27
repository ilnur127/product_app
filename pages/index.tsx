import HomeComponent from '@/components/screens/home';
import { IProductData } from '@/interfaces/product.interface';
import { ProductService } from '@/services/product.service';
import { GetServerSideProps, NextPage } from 'next';

const Home: NextPage<IProductData> = ({ products }) => {
  return <HomeComponent products={products} />;
};

export const getServerSideProps: GetServerSideProps<IProductData> = async () => {
  const products = await ProductService.getAll();

  return {
    props: { products },
  };
};

export default Home;
