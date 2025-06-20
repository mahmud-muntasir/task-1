'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/images/logo.svg';
import logoWhite from '@/public/images/logo-white.svg';
import ThemeToggle from '@/components/ThemeToggle';
import { useTheme } from '@/context/ThemeContext';
import ButtonIcon from '@/components/ButtonIcon';

const navMenu = [
  { url: '/home', label: 'Home' },
  { url: '/about', label: 'About' },
  { url: '/portfolio', label: 'Portfolio' },
  { url: '/blog', label: 'Blog' },
];

const Header = () => {
  const { theme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const selectedLogo = theme === 'light' ? logo : logoWhite;

  return (
    <header
      className={`fixed top-0 left-0 right-0 container h-[114px] flex items-center rounded-br-[30px] rounded-bl-[30px] z-50 transition-colors duration-300 ${
        scrolled ? 'bg-[var(--background)]/80 backdrop-blur' : 'bg-transparent'
      }`}
    >
      <div className="container h-[114px] flex items-center rounded-br-[30px] rounded-bl-[30px]">
        <nav className="max-w-[1340px] flex mx-auto items-center justify-between w-full">
          <Link href={'/'}>
            <Image
              src={selectedLogo}
              alt="Logo"
              width={200}
              height={34}
              priority
            />
          </Link>
          {/* pc version */}
          <div className="md:flex hidden items-center gap-10">
            <ul className="flex items-center gap-8">
              {navMenu.map((menu) => (
                <li key={menu.label} className="text-base">
                  <Link href={menu.url}>{menu.label}</Link>
                </li>
              ))}
            </ul>
            <ThemeToggle />
            <ButtonIcon variant={'arrowRight'} label={'Start Project'} />
          </div>
          {/* mobile version */}
          <div className="md:hidden flex items-center gap-10">
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
