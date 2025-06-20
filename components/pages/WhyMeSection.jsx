import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import Image from 'next/image';
import cardIcon from '@/public/images/cardIcon.svg';
import { GoArrowRight, GoArrowLeft } from 'react-icons/go';

const skillSets = [
  {
    title: 'HTML & CSS',
    brief:
      'Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis',
  },
  {
    title: 'Javascript',
    brief:
      'Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis',
  },
  {
    title: 'Webflow',
    brief:
      'Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis',
  },
];

const WhyMeSection = () => {
  return (
    <div>
      <div className="container bg-[var(--foreground)] rounded-[52px] !p-16">
        <SectionTitle variant={'dark'} title={'Why Choose me'} />
        <div className="w-full flex justify-between mt-14">
          <h2 className="text-[var(--background)] text-6xl leading-20">
            My Extensive <br /> List of Skills
          </h2>
          <div>
            <p className="text-[var(--background)] text-right text-lg leading-8">
              Building the worlds best marketing Your
              <br />
              trusted partner for strategy, design, and dev.
            </p>
            <div className="w-full h-[1px] border border-[var(--foreground-text-muted)] mt-4 opacity-20"></div>
          </div>
        </div>
        <div className="flex items-center gap-6 justify-end">
          <button className="w-14 h-14 border border-[var(--background)] rounded-full text-3xl text-[var(--background)] flex items-center justify-center">
            <GoArrowLeft />
          </button>
          <button className="w-14 h-14 border border-[var(--background)] rounded-full text-3xl text-[var(--background)] flex items-center justify-center">
            <GoArrowRight />
          </button>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-16">
          {skillSets.map((skill) => {
            return (
              <div className="bg-[var(--background)]/8 p-8 rounded-[30px] flex flex-col gap-4 hover:rotate-3 transition-transform group">
                <Image
                  src={cardIcon}
                  alt="User avatar"
                  width={97}
                  height={99}
                  priority
                />
                <h4 className="text-[var(--background)] text-2xl">
                  {skill.title}
                </h4>
                <p className="text-[var(--background)] text-base">
                  {skill.brief}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyMeSection;
