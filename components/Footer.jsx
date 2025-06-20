import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logoSecondary from '@/public/images/logo-secondary.svg';
import besnik from '@/public/images/BESNIK.svg';

const email = [
  {
    label: 'HELLO@DEVLOP.ME.COM',
    url: 'hellw@develop.me.com',
  },
  {
    label: 'MAHBUBUL@ME.COM',
    url: 'mahbubul@me.com',
  },
];

const call = [
  {
    label: '+784549 4981 00',
    url: '+784549498100',
  },
  {
    label: '+8845 0100 211',
    url: '+88450100211',
  },
];

const menu = [
  {
    label: 'HOME',
    url: '/home',
  },
  {
    label: 'ABOUT',
    url: '/about',
  },
  {
    label: 'PORTFOLIO',
    url: '/portfolio',
  },
  {
    label: 'BLOG',
    url: '/blog',
  },
];

const socialMedia = [
  {
    label: 'TWITTER',
    url: 'https://twitter.com',
  },
  {
    label: 'INSTAGRAM',
    url: 'https://instagram.com',
  },
  {
    label: 'FACEBOOK',
    url: 'https://facebook.com',
  },
  {
    label: 'BEHANCE',
    url: 'https://behance.com',
  },
  {
    label: 'DRIBBBLE',
    url: 'https://dribble.com',
  },
];

const Footer = () => {
  return (
    <footer className="mt-auto pb-5">
      <div className="container bg-[var(--foreground)] rounded-[52px] !p-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10">
          <div>
            <Link href={'/'}>
              <Image
                src={logoSecondary}
                alt="User avatar"
                width={200}
                height={34}
                priority
              />
            </Link>
          </div>
          <div>
            <h3 className="text-[var(--background)] font-bold text-5xl md:text-6xl mb-24">
              As You Can
            </h3>

            <div className="flex flex-col md:flex-row justify-between gap-6">
              <div className="flex flex-col gap-8">
                <ol className="flex flex-col gap-2">
                  <li className="text-[var(--foreground-text-muted)] text-base mb-2">
                    Say hello
                  </li>
                  {email.map((item) => (
                    <li
                      key={item.url}
                      className="text-base text-[var(--background)] hover:underline"
                    >
                      <a
                        href={`mailto:${item.url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ol>
                <ol className="flex flex-col gap-2">
                  <li className="text-[var(--foreground-text-muted)] text-base mb-2">
                    Call
                  </li>
                  {call.map((item) => (
                    <li
                      key={item.url}
                      className="text-base text-[var(--background)] hover:underline"
                    >
                      <a
                        href={`tel:${item.url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>

              <ol className="flex flex-col gap-2">
                <li className="text-[var(--foreground-text-muted)] text-base mb-2">
                  Menu
                </li>
                {menu.map((item) => (
                  <li
                    key={item.url}
                    className="text-base text-[var(--background)] hover:underline"
                  >
                    <Link href={item.url}>{item.label}</Link>
                  </li>
                ))}
              </ol>
              <ol className="flex flex-col gap-2">
                <li className="text-[var(--foreground-text-muted)] text-base mb-2">
                  Social
                </li>
                {socialMedia.map((item) => (
                  <li
                    key={item.url}
                    className="text-base text-[var(--background)] hover:underline"
                  >
                    <Link
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
        {/* bottom Section */}
        <div className="mt-24 flex flex-col md:flex-row items-center justify-between gap-5 w-full">
          <Image
            src={besnik}
            alt="User avatar"
            width={91}
            height={34}
            priority
          />
          <p className="text-base text-[var(--foreground-text-muted)]">
            © devlop.me 2022
          </p>
          <Link
            href={'/privacy'}
            className="text-base text-[var(--foreground-text-muted)]"
          >
            PRIVACY - TERMS
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
