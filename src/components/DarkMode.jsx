import React, { useState, useEffect } from 'react';
import DarkButton from '../assets/website/dark-mode-button.png';
import LightButton from '../assets/website/light-mode-button.png';

const DarkMode = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const element = document.documentElement;

    useEffect(() => {
        localStorage.setItem('theme', theme);
        if (theme === 'dark') {
        element.classList.remove('light');
        element.classList.add('dark');
        } else {
        element.classList.add('light');
        element.classList.remove('dark');
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <div className='relative'>
        <img
            src={theme === 'dark' ? LightButton : DarkButton}
            onClick={toggleTheme}
            className='cursor-pointer w-12 transition-all duration-300'
            alt='Toggle Theme'
        />
        </div>
    );
};

export default DarkMode;
