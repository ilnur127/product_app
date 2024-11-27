import { FC, PropsWithChildren } from 'react';
import { Titillium_Web } from 'next/font/google';
import dynamic from 'next/dynamic';

import Header from './header';

const DynamicFooter = dynamic(() => import('./footer'), { ssr: false });

const titillium = Titillium_Web({
  weight: ['300', '400', '600', '700'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--titillium',
});

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className={`${titillium.variable} grid h-lvh grid-rows-[60px_1fr_60px]`}>
      <Header />
      {children}
      <DynamicFooter />
    </main>
  );
};

export default MainLayout;
