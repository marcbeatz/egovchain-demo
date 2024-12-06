import Image from 'next/image';
import React from 'react';
import bgHeader from '/assets/images/bg_header.svg';
import { Button } from '../ui/button';
import heroAnimation from '@/assets/images/hero_animation.json';
import LottieAnimation from '../common/lottie-animation';
import { ArrowRightCircle } from 'lucide-react';

const HomeSection = () => {
  return (
    <section
      id='home'
      className='snap-section min-h-screen bg-background flex items-center justify-center relative overflow-hidden'
    >
      <div
        className='absolute inset-0 w-full h-full'
        style={{
          backgroundImage: `url(${bgHeader.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          transform: 'scale(1.2)', // Adjust this value to make image larger
          transformOrigin: 'center',
          minWidth: '100vw',
          minHeight: '100vh',
          overflow: 'hidden',
        }}
      />

      {/* Content */}
      <div className='flex items-center justify-center container mx-auto px-4 py-32'>
        <div className='relative z-20'>
          <h1
            style={{ fontSize: '90px', letterSpacing: '-4px', fontWeight: 600, lineHeight: '85px' }}
          >
            Secure Your Digital Future
          </h1>
          <p
            className='mt-[16px]'
            style={{ fontWeight: 300, fontSize: '24px', lineHeight: '30px', color: '#4b5563' }}
          >
            Revolutionizing Government Services with Blockchain Technology
          </p>
          <Button
            size={'sm'}
            className='rounded-full bg-custom-blue hover:bg-custom-blue/80 mt-[34px]'
          >
            Get Started
            <ArrowRightCircle className='h-6 w-6 text-white' />
          </Button>
        </div>

        <div className='hidden md:block'>
          <LottieAnimation animationData={heroAnimation} className='w-[760px] h-[638px]' />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
