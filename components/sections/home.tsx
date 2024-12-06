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
      {/* Background Image wrapper */}
      <div className='absolute inset-0'>
        <div className='relative w-full h-full flex items-center justify-center'>
          <div className='relative h-full aspect-auto'>
            <Image
              src={bgHeader}
              alt='Background'
              className='h-full w-auto max-w-none'
              style={{ height: '100%', width: 'auto' }}
              width={2000}
              height={1080}
              priority
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className='flex items-center justify-center gap-10 container mx-auto px-4 py-32'>
        <div className='relative z-20'>
          <h1 className='text-4xl md:text-6xl font-bold'>
            Secure Your
            <br />
            Digital Future
          </h1>
          <p className='mt-4 text-lg md:text-xl'>
            Revolutionizing Government Services with
            <br />
            Blockchain Technology
          </p>
          <Button size={'sm'} className='rounded-full bg-custom-blue hover:bg-custom-blue/80 mt-8'>
            Get Started
            <ArrowRightCircle className='h-6 w-6 text-white' />
          </Button>
        </div>

        <div className='hidden md:block'>
          <LottieAnimation animationData={heroAnimation} className='w-[40svw]' />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
