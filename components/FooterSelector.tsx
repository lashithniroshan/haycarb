// components/FooterSelector.tsx
'use client';

import { usePathname } from 'next/navigation';
import { HomeFooter, DefaultFooter } from './Footer';

const FooterSelector = () => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return isHomePage ? <HomeFooter /> : <DefaultFooter />;
};

export default FooterSelector;