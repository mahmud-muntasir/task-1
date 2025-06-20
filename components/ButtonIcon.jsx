import React from 'react';
import { GoArrowRight, GoArrowLeft } from 'react-icons/go';
import { FaPhoneAlt } from 'react-icons/fa';

const iconMap = {
  arrowRight: { Icon: GoArrowRight, sizeClass: 'text-2xl' },
  arrowLeft: { Icon: GoArrowLeft, sizeClass: 'text-2xl' },
  phone: { Icon: FaPhoneAlt, sizeClass: 'text-base' },
};

const ButtonIcon = ({ variant, label }) => {
  const iconEntry = iconMap[variant];

  if (!iconEntry) {
    return (
      <button className="flex items-center gap-4 border border-[var(--border)] rounded-full h-[58px] pr-4 tracking-tight font-base cursor-pointer">
        <span className="w-[38px] h-[38px] flex items-center justify-center rounded-full border border-[var(--border)]" />
        {label}
      </button>
    );
  }

  const { Icon, sizeClass } = iconEntry;

  return (
    <button className="group flex items-center gap-4 border border-[var(--border)] rounded-full h-[58px] pr-4 tracking-tight font-base cursor-pointer">
      <span
        className={`w-[38px] h-[38px] flex items-center justify-center rounded-full border border-[var(--border)] ${sizeClass}`}
      >
        <Icon />
      </span>
      {label}
    </button>
  );
};

export default ButtonIcon;
