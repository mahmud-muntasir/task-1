import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { GoArrowRight } from 'react-icons/go';

const works = [
  {
    category: 'Discovery',
    brief:
      'We start every new client interaction with an in-depth discovery call where we get to know each other, discuss your current and future objectives, and recommend the best course of action.',
  },
  {
    category: 'Strategy',
    brief:
      "Every end-to-end project of ours begins with a tEspoke pre-build strateu. From brand ID consultation to in-depth ccxle reviews we're here to set the stage for success.",
  },
  {
    category: 'Design',
    brief:
      "After we have a comprehensive understanding of your brand we'll be ready to move onto design. Each page or will be designed, reviewed, and given your stamp of approval.",
  },
  {
    category: 'Build',
    brief:
      "Whether we've just finished designing your new site or you're handing off finished designs for us to develop in Webflow, we're here to apply our trusted development process to your project.",
  },
];

const MyWorkSection = () => {
  return (
    <div>
      <div className="container bg-[var(--foreground)] rounded-[52px] !p-16">
        <div className="w-full flex justify-between mt-14">
          <SectionTitle variant={'dark'} title={'Work Process'} />
          <h2 className="text-[var(--background)] text-6xl leading-20">
            My Work Process
          </h2>
          <div className="w-[212px]"></div>
        </div>

        <div className="grid grid-cols-2 gap-2 mt-16">
          {works.map((work) => {
            return (
              <div className="bg-[var(--background)]/8 hover:bg-[var(--main)] group p-8 rounded-[30px] flex flex-col gap-4 hover:rotate-3 transition-all">
                <div className="flex items-center justify-between">
                  <p className="text-[var(--foreground)] group-hover:text-[var(--background)] bg-[var(--secondary)] group-hover:bg-[var(--foreground)] px-4 py-2 rounded-full text-xl">
                    {work.category}
                  </p>
                  <button className="flex cursor-pointer items-center gap-2 text-base text-[var(--background)] group-hover:text-[var(--foreground)] underline">
                    <GoArrowRight className="text-xl" />
                    Read More
                  </button>
                </div>
                <p className="text-[var(--background)] group-hover:text-[var(--foreground)] text-lg">
                  {work.brief}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MyWorkSection;
