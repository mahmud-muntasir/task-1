import React from 'react';
import { IoArrowDownOutline } from 'react-icons/io5';

const SectionTitle = ({ variant, title }) => {
  return (
    <div className="flex items-center flex-nowrap">
      <div
        className={`w-[44px] h-[44px] rounded-full border-[1px] ${
          variant === 'light'
            ? 'border-[var(--foreground)]'
            : 'border-[var(--background)]'
        } flex items-center justify-center`}
      >
        <IoArrowDownOutline
          className={`text-xl ${
            variant === 'light'
              ? 'text-[var(--foreground)]'
              : 'text-[var(--background)]'
          } `}
        />
      </div>
      <p
        className={`text-base whitespace-nowrap h-[44px] border-[1px] ${
          variant === 'light'
            ? 'border-[var(--foreground)] text-[var(--foreground)]'
            : 'border-[var(--background)] text-[var(--background)]'
        } rounded-full px-4 py-2.5`}
      >
        {title}
      </p>
    </div>
  );
};

export default SectionTitle;
