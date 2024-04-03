import { ReactNode } from 'react';
import { Metadata } from 'next';

import Navbar from '@/components/application/navbar';
import Sidebar from '@/components/application/sidebar';

export const metadata: Metadata = {
  title: 'Yoom',
  description: 'Steaming application to handle your day to day meetings',
  icons: {
    icon: '/icons/logo.svg',
  },
};

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className='relative'>
      <Navbar />
      <div className='flex'>
        <Sidebar />
        <section className='flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14'>
          <div className='w-full'>{children}</div>
        </section>
      </div>
    </main>
  );
};

export default HomeLayout;
