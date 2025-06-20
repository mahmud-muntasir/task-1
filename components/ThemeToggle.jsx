'use client';

import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { IoMoonSharp, IoSunny } from 'react-icons/io5';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  if (!theme) return null;

  return (
    <button
      className="text-xl cursor-pointer w-5 h-5 transition-all duration-300 ease-in-out text-foreground"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <IoSunny /> : <IoMoonSharp />}
    </button>
  );
}
