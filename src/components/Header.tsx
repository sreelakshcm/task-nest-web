import React, { useState } from 'react';
import ThemeSwitcher from './ThemeSwitch';
import Menu from '../assets/MenuIcon.svg';
import Navbar from './Navbar';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex flex-row items-center justify-between p-4 bg-neutral-100
     dark:bg-neutral-700 text-neutral-100 rounded-2xl bg-opacity-85 dark:bg-opacity-85">
      <input
        type="text"
        placeholder="Search..."
        className="px-4 py-2 rounded-md text-sm sm:text-base h-10 sm:h-12 
        w-2/3 focus:w-[85%] md:focus:w-2/3 shadow
        focus:shadow-lg dark:focus:shadow-neutral-800 
        focus-visible:outline-0 dark:bg-neutral-600 
        text-neutral-800 dark:placeholder:text-neutral-100 
        dark:text-neutral-100 mb-0 transition-all duration-300"
      />
      <div className="flex items-center lg:hidden space-x-4">
        <motion.button
          onClick={toggleMenu}
          className="text-fontLightLight cursor-pointer dark:text-fontLightDark focus:outline-none w-6 h-6"
          whileHover={{ scale: 1.2, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <img src={Menu} alt='Menu' />
        </motion.button>
      </div>
      <div className='hidden lg:block'>
        <ThemeSwitcher />
      </div>
      {isOpen && <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />}
    </header>
  );
};

export default Header;
