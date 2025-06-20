import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import Image from 'next/image';
import companyList from '@/public/images/companyList.svg';

const AboutSection = () => {
  return (
    <div
      className="min-h-screen bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: "url('/images/aboutBg.png')" }}
    >
      <div className="container pt-36 ">
        <div className="mb-14 flex items-center justify-end">
          <SectionTitle variant={'light'} title={'About'} />
        </div>
        <h2 className="text-7xl font-bold leading-32 mb-12 text-right">
          I’ve been
          <span className="bg-[var(--foreground)] text-[var(--background)] px-4 py-0 rounded-2xl">
            Developing
          </span>
          <br />
          Websites since
          <span className="bg-[var(--foreground)] text-[var(--background)] px-4 py-0 rounded-2xl">
            2013
          </span>
        </h2>
        <p className="text-center text-lg leading-loose">
          We start every new client interaction with an in-depth discovery call
          where we get <br /> to know each other and recommend the best course
          of action.
        </p>

        <div className="grid grid-cols-[1fr_4fr] mt-22 gap-5 items-center">
          <h6 className="text-2xl">
            PREVIOUSLY
            <br />
            WORKED ON
          </h6>
          <Image
            src={companyList}
            alt="User avatar"
            width={5000}
            height={5000}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
