import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { WorkSlider } from '@/components/WorkSlider';

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
        <div className="w-full flex flex-col gap-4 md:flex-row justify-between mt-14 mb-6">
          <h2 className="text-[var(--background)] text-5xl md:text-6xl leading-16 md:leading-20">
            My Extensive <br /> List of Skills
          </h2>
          <div>
            <p className="text-[var(--background)] text-left md:text-right text-md md:text-lg leading-8">
              Building the worlds best marketing Your
              <br />
              trusted partner for strategy, design, and dev.
            </p>
            <div className="w-full h-[1px] border border-[var(--foreground-text-muted)] mt-4 opacity-20"></div>
          </div>
        </div>
        <WorkSlider data={skillSets} />
      </div>
    </div>
  );
};

export default WhyMeSection;
