'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import cardIcon from '@/public/images/cardIcon.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { GoArrowRight, GoArrowLeft } from 'react-icons/go';

export function WorkSlider({ data }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative w-full">
      {/* Navigation Buttons */}
      <div className="w-full flex items-center justify-end gap-4">
        <button
          ref={prevRef}
          className="w-14 h-14 border border-[var(--background)] rounded-full text-3xl text-[var(--background)] flex items-center justify-center"
        >
          <GoArrowLeft />
        </button>
        <button
          ref={nextRef}
          className="w-14 h-14 border border-[var(--background)] rounded-full text-3xl text-[var(--background)] flex items-center justify-center"
        >
          <GoArrowRight />
        </button>
      </div>

      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        modules={[Navigation]}
        className="mySwiper h-full !py-10 px-4 sm:px-8"
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {data.map((skill, index) => (
          <SwiperSlide key={index}>
            <div className="bg-[var(--background)]/10 backdrop-blur p-6 rounded-[30px] flex flex-col gap-4 hover:rotate-1 transition-transform group h-full">
              <Image
                src={cardIcon}
                alt="Skill Icon"
                width={97}
                height={99}
                priority
              />
              <h4 className="text-[var(--background)] text-xl sm:text-2xl font-semibold">
                {skill.title}
              </h4>
              <p className="text-[var(--background)] text-sm sm:text-base">
                {skill.brief}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
