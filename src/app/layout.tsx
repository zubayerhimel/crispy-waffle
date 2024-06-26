import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';

import { Toaster } from '@/components/ui/toaster';

import '@stream-io/video-react-sdk/dist/css/styles.css';
import 'react-datepicker/dist/react-datepicker.css';
import './globals.css';

const font = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Yoom',
  description: 'Steaming application to handle your day to day meetings',
  icons: {
    icon: '/icons/logo.svg',
  },
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <ClerkProvider
        appearance={{
          layout: {
            logoImageUrl: '/icons/yoom-logo.svg',
            socialButtonsVariant: 'iconButton',
          },
        }}>
        <body className={`${font.className} bg-dark-2`}>
          {children}
          <Toaster />
        </body>
      </ClerkProvider>
    </html>
  );
}
