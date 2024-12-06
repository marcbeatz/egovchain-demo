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
          alt='Lines and boxes'
          className='w-auto absolute top-32 left-0 -z-10 hidden md:block'
          width={572}
          height={800}
        />

        <div className='ml-auto max-w-[670px]'>
          <h2
            style={{
              fontWeight: 600,
              fontSize: '20px',
              lineHeight: '25px',
              letterSpacing: '0.3em',
              marginBottom: '10px',
            }}
          >
            ABOUT US
          </h2>
          <h1
            style={{
              fontSize: '54px',
              fontWeight: 600,
              lineHeight: '49px',
              letterSpacing: '-3px',
              marginBottom: '16px',
            }}
          >
            Your Trusted Partner in Government Innovation
          </h1>

          <p
            style={{
              fontSize: '24px',
              fontWeight: 300,
              lineHeight: '30px',
              marginBottom: '24px',
              color: '#4B5563',
            }}
          >
            eGovChain is at the forefront of government innovation, leveraging the power of
            blockchain technology to deliver secure, transparent, and efficient public services. Our
            mission is to empower governments to build a future where trust, accountability, and
            citizen satisfaction are paramount.
          </p>

          <Button
            size={'sm'}
            className='rounded-full bg-white border text-custom-blue border-custom-blue hover:bg-custom-blue hover:text-white'
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
