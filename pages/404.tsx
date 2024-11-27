import MainLayout from '@/components/layout';
import Head from 'next/head';
import Image from 'next/image';

export default function NotFound() {
  return (
    <MainLayout>
      <Head>
        <title>Not Found</title>
      </Head>
      <section style={{ textAlign: 'center' }}>
        <Image src='/404.jpg' alt='404' width='600' height='450' />
      </section>
    </MainLayout>
  );
}
