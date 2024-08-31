import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Background from './ui/Background';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen flex flex-col md:flex-row">
      <Background />
      <div className='hidden p-4 lg:flex xl:flex 2xl:flex'>
        <Navbar />
      </div>
      <div className="flex w-full flex-col p-4 gap-4">
        <Header />
        <main className="p-6 rounded-2xl bg-opacity-85 h-full bg-neutral-100 dark:bg-neutral-700
         text-neutral-800 dark:text-neutral-100 dark:bg-opacity-85">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
