import StreamClientProvider from '@/providers/stream-client-provider';
import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Yoom',
  description: 'Steaming application to handle your day to day meetings',
  icons: {
    icon: '/icons/logo.svg',
  },
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <StreamClientProvider>
      <main>{children}</main>
    </StreamClientProvider>
  );
};

export default RootLayout;
