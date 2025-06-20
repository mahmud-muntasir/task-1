import React from 'react';
import Link from 'next/link';
import SectionTitle from '@/components/SectionTitle';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import ButtonIcon from '@/components/ButtonIcon';
import ButtonIconLight from '@/components/ButtonIconLight';

const socialLinks = [
  {
    icon: FaFacebook,
    url: 'https://facebook.com',
  },
  {
    icon: FaInstagram,
    url: 'https://instagram.com',
  },
  {
    icon: FaTwitter,
    url: 'https://twitter.com',
  },
];

const ContactSection = () => {
  return (
    <section
      className="min-h-screen pt-16 bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: "url('/images/contactBg.png')" }}
    >
      <div className="container grid grid-cols-[2fr_1fr] gap-5">
        <div>
          <SectionTitle variant={'light'} title={'Contact'} />
          <h2 className="text-7xl font-bold leading-24 mb-12 mt-12">
            Interested in <br /> work{' '}
            <span className="bg-[var(--foreground)] text-[var(--background)] px-4 py-0 rounded-2xl">
              together?
            </span>
          </h2>
          <p className="text-lg mb-8">
            We start every new client interaction with an in-depth discovery
            call where we get to know each other
          </p>
          <ButtonIcon variant={'phone'} label={'Schedule a Call'} />
        </div>
        <div>
          <form className="bg-[var(--foreground)] rounded-[30px] px-5 py-10 flex flex-col gap-4">
            <input
              className="text-lg text-[var(--background)] w-full border-b border-[var(--background)]/20 px-4 py-3 outline-none"
              type="text"
              placeholder="Enter your name"
            />
            <input
              className="text-lg text-[var(--background)] w-full border-b border-[var(--background)]/20 px-4 py-3 outline-none"
              type="email"
              placeholder="Your email address"
            />
            <textarea
              className="text-lg text-[var(--background)] w-full border-b border-[var(--background)]/20 px-4 py-3 outline-none"
              placeholder="Describe your project"
            ></textarea>
            <div className="flex items-center gap-5 mt-10">
              <ButtonIconLight variant={'arrowRight'} label={'Send'} />
              <ButtonIconLight variant={'phone'} label={'Contact Me'} />
            </div>
            <div className="flex items-center justify-between mt-10">
              <p className="text-lg text-[var(--background)] mb-2">
                @williamrey
              </p>
              <div className="flex items-center gap-4">
                <div className="w-16 h-[1px] bg-[var(--background)]"></div>
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Link
                      className="text-[var(--background)]"
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon className="text-lg" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
