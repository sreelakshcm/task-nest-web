import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  onClick, children, disabled, type,
}) => {
  return (
    <motion.button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`px-4 py-2 rounded-md font-semibold text-white bg-primary-50 dark:bg-primary-50 
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary-60 dark:hover:bg-primary-60 focus:outline-none'}
        transition-colors duration-300 ease-in-out`}
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05, backgroundColor: '#0B8B8A' }} // Lighten the button color on hover
      whileTap={{ scale: 0.95 }} // Slightly shrink the button when pressed
      whileFocus={{ scale: 1.05 }} // Enlarge the button on focus
    >
      {children}
    </motion.button>
  );
};

export default Button;
