import { ReactNode } from 'react';

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      Navbarsdf
      {children}
      Footer
    </main>
  );
};

export default RootLayout;
