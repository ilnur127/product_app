import { ChangeEvent, FC, useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

import MainLayout from '@/components/layout';
import { IProductData } from '@/interfaces/product.interface';
import ProductItem from '@/components/ui/productItem';

const Loader = dynamic(() => import('@/components/ui/loader'), { ssr: false });

const HomeComponent: FC<IProductData> = ({ products }) => {
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const changeSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    setIsLoading(true);
    setSearchValue(e.target.value);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <MainLayout>
      <section>
        <div className='text-black flex justify-center gap-2 mb-3 [&>*]:rounded-lg [&>*]:p-2'>
          <input placeholder='Поиск...' value={searchValue} onChange={changeSearchValue} />
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          <div className='grid gap-2.5 grid-cols-3'>
            {products.length ? (
              products
                .filter((product) => product.name.toLowerCase().includes(searchValue))
                .map((product) => (
                  <Link href={`/product/${product.id}`} key={product.id}>
                    <ProductItem product={product} />
                  </Link>
                ))
            ) : (
              <>Products not found!</>
            )}
          </div>
        )}
      </section>
    </MainLayout>
  );
};

export default HomeComponent;
