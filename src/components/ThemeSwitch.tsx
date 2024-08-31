import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store/store';
import { toggleTheme } from '../app/Features/themeSlice';
import Switch from './ui/Switch';
import Sun from '../assets/LightMode.svg';
import Moon from '../assets/DarkMode.svg';

const ThemeSwitcher: React.FC = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleToggle = (): void => {
    dispatch(toggleTheme());
  };

  return (
    <Switch checked={theme === 'dark'} onChange={handleToggle}>
      {theme === 'dark' ? <img src={Moon} alt='Dark' className='w-8 h-8' /> : <img src={Sun} alt='Light' className='w-8 h-8' />}
    </Switch>
  );
};

export default ThemeSwitcher;
