import { ArrowRightCircle } from 'lucide-react';
import React from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';
import linesBoxes from '/assets/images/lines_boxes.svg';

const AboutSection = () => {
  return (
    <section
      id='about'
      className='snap-section min-h-screen flex items-center justify-center relative py-32'
    >
      <div className='container px-4 flex'>
        <Image
          src={linesBoxes}
          alt='Background'
          className='w-auto absolute top-32 left-0 -z-10 hidden md:block'
          width={800}
          height={800}
        />

        <div className='ml-auto'>
          <h2 className='text-lg uppercase tracking-widest font-bold'>ABOUT US</h2>
          <h1 className='text-4xl font-bold'>
            Your Trusted Partner in
            <br />
            Government Innovation
          </h1>
          <p className='mt-4 text-lg md:text-xl'>
            eGovChain is at the forefront of government
            <br />
            innovation, leveraging the power of blockchain
            <br />
            technology to deliver secure, transparent, and
            <br />
            efficient public services. Our mission is to empower
            <br />
            governments to build a future where trust,
            <br />
            accountability, and citizen satisfaction are
            <br />
            paramount.
          </p>

          <Button
            size={'sm'}
            className='rounded-full bg-white border text-custom-blue border-custom-blue hover:bg-custom-blue hover:text-white mt-8'
          >
            Get Started
            <ArrowRightCircle className='h-6 w-6' />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
