import StreamClientProvider from '@/providers/stream-client-provider';
import { ReactNode } from 'react';

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <StreamClientProvider>
      <main>{children}</main>
    </StreamClientProvider>
  );
};

export default RootLayout;
