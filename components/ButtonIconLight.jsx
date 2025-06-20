import React from 'react';
import { GoArrowRight, GoArrowLeft } from 'react-icons/go';
import { FaPhoneAlt } from 'react-icons/fa';

const iconMap = {
  arrowRight: {
    Icon: GoArrowRight,
    sizeClass: 'text-2xl text-[var(--background)]',
  },
  arrowLeft: {
    Icon: GoArrowLeft,
    sizeClass: 'text-2xl text-[var(--background)]',
  },
  phone: { Icon: FaPhoneAlt, sizeClass: 'text-base text-[var(--background)]' },
};

const ButtonIconLight = ({ variant, label }) => {
  const iconEntry = iconMap[variant];

  if (!iconEntry) {
    return (
      <button className="flex items-center gap-4 border border-[var(--background)] rounded-full h-[58px] pr-4 tracking-tight font-base cursor-pointer">
        <span className="w-[38px] h-[38px] flex items-center justify-center rounded-full border border-[var(--background)]" />
        {label}
      </button>
    );
  }

  const { Icon, sizeClass } = iconEntry;

  return (
    <button className="flex items-center gap-4 text-[var(--background)] border border-[var(--background)] rounded-full h-[58px] pr-4 tracking-tight font-base cursor-pointer">
      <span
        className={`w-[38px] h-[38px] flex items-center justify-center rounded-full border border-[var(--background)] ${sizeClass}`}
      >
        <Icon />
      </span>
      {label}
    </button>
  );
};

export default ButtonIconLight;
