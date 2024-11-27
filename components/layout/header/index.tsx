import Link from 'next/link';
import { FC } from 'react';
import { useRouter } from 'next/router';

import classes from './index.module.scss';

const Header: FC = () => {
  const { pathname } = useRouter();

  return (
    <header className={classes.header}>
      <Link href='/' className={pathname === '/' ? classes.active : ''}>
        Home
      </Link>
      <Link href='/about' className={pathname === '/about' ? classes.active : ''}>
        About page
      </Link>
    </header>
  );
};

export default Header;
