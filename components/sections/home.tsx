import React from 'react';
import bgHeader from '/assets/images/bg_header.svg';
import { Button } from '../ui/button';
import heroAnimation from '@/assets/images/hero_animation.json';
import LottieAnimation from '../common/lottie-animation';
import { FaCircleArrowRight } from 'react-icons/fa6';

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
      <div className='flex flex-col md:flex-row items-center justify-center container mx-auto px-4 py-32'>
        <div className='relative z-20 flex-none max-w-full md:max-w-[407px] lg:max-w-[707px]'>
          <h1
            style={{ fontWeight: 600 }}
            className=' text-[58px] md:text-[90px] -tracking-[2px] md:-tracking-[4px] leading-[61px] md:leading-[85px]'
          >
            Secure Your Digital Future
          </h1>
          <p
            className='mt-[16px] text-[18px] md:text-[24px] leading-[22.5px] md:leading-[30px]'
            style={{ fontWeight: 300, color: '#4b5563' }}
          >
            Revolutionizing Government Services with Blockchain Technology
          </p>
          <Button
            size={'sm'}
            className='rounded-full bg-custom-blue hover:bg-custom-blue/80 mt-[34px]'
          >
            Get Started
            <FaCircleArrowRight className='h-6 w-6 text-white' />
          </Button>
        </div>

        <div>
          <LottieAnimation
            animationData={heroAnimation}
            className='max-w-[400px] md:max-w-[760px]'
          />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
