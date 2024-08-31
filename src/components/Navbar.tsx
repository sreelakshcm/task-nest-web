import React, { ReactElement } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '../constants/route';
import Close from '../assets/CloseIcon.svg';
import { motion } from 'framer-motion';
import ThemeSwitcher from './ThemeSwitch';
import Logo from '../assets/Logo';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store/store';
import Divider from './ui/Divider';

interface NavbarProps {
  isOpen?: boolean;
  // eslint-disable-next-line no-unused-vars
  setIsOpen?: (value: React.SetStateAction<boolean>) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isOpen, setIsOpen }) => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  const { pathname: currentPath } = useLocation();

  const renderLinks = (): ReactElement => (
    <ul className="space-y-4 py-4 font-medium">
      {ROUTES.map(({ path, label }) => (
        <li
          key={path}
          className={`${currentPath === path
            ? 'bg-primary-50 text-neutral-200' : 'hover:bg-primary-60 hover:text-neutral-200'} 
            rounded-md w-full px-4 py-1 cursor-pointer`}
        >
          <Link onClick={() => setIsOpen?.(false)} className="block w-full" to={path}>
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="bg-neutral-100 hidden lg:block bg-opacity-85 dark:bg-neutral-700 text-primary-90
       dark:text-neutral-100 w-64 md:w-48 lg:w-64 h-full p-4 rounded-2xl dark:bg-opacity-85">
        <div className="h-14 p-2 hidden lg:block">
          <Logo fill={theme === 'dark' ? '#EBF5F4' : '#206C6F'} />
        </div>
        <Divider />
        {renderLinks()}
      </nav>

      {/* Mobile Navbar */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-full bg-neutral-100 dark:bg-neutral-700 text-primary-90 dark:text-neutral-100 shadow-lg transition-transform
           transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex flex-col items-center py-4 space-y-4 h-full">
          <motion.button
            onClick={() => setIsOpen?.(false)}
            className="absolute top-4 right-4 text-fontLightLight cursor-pointer dark:text-fontLightDark focus:outline-none w-6 h-6"
            whileHover={{ scale: 1.2, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <img src={Close} alt="Close menu" />
          </motion.button>
          {renderLinks()}
          <ThemeSwitcher />
        </div>
      </div>
    </>
  );
};

export default Navbar;
