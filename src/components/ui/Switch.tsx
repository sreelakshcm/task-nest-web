import React, { ReactElement, useState } from 'react';

interface SwitchProps {
  checked?: boolean;
  // eslint-disable-next-line no-unused-vars
  onChange?: (checked: boolean) => void;
  children: ReactElement;
}

const Switch: React.FC<SwitchProps> = ({ checked = false, onChange, children }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleToggle = (): void => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    if (onChange) {
      onChange(newCheckedState);
    }
  };

  return (
    <div
      onClick={handleToggle}
      className={`relative inline-flex items-center cursor-pointer w-16 h-5 hover:shadow-lg
        ${isChecked ? 'dark:bg-primary-60' : 'bg-neutral-200 dark:bg-neutral-100'}
         rounded-full transition-colors duration-300 ease-in-out dark:hover:shadow-neutral-800 `}
    >
      <span
        className={`absolute transition-transform duration-300 ease-in-out
          ${isChecked ? 'transform translate-x-8' : ''} 
          w-8 h-8 bg-none rounded-full flex items-center justify-center shadow-lg`}
      >
        {children}
      </span>
    </div>
  );
};

export default Switch;
