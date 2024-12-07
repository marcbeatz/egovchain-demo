import { ArrowRightCircle } from 'lucide-react';
import React from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';
import linesBoxes from '/assets/images/lines_boxes.svg';
import { FaCircleArrowRight } from 'react-icons/fa6';

const AboutSection = () => {
  return (
    <section
      id='about'
      className='snap-section min-h-screen flex items-center justify-center relative py-10 md:py-32'
    >
      <div className='container px-4 flex flex-col-reverse md:flex-row gap-10 md:gap-0'>
        <Image
          src={linesBoxes}
          alt='Lines and boxes'
          className='w-auto relative md:absolute md:top-32 md:left-0 -z-10'
          width={572}
          height={800}
        />

        <div className='ml-auto max-w-[670px]'>
          <h2
            style={{
              fontWeight: 600,
            }}
            className='text-[16px] md:text-[20px] leading-[20px] md:leading-[25px] tracking-[0.3em] mb-[10px]'
          >
            ABOUT US
          </h2>
          <h2
            style={{
              fontWeight: 600,
            }}
            className='text-[36px] md:text-[54px] leading-[42px] md:leading-[49px] -tracking-[3px] mb-[16px]'
          >
            Your Trusted Partner in Government Innovation
          </h2>

          <p
            style={{
              fontWeight: 300,
              color: '#4B5563',
            }}
            className='text-[18px] md:text-[24px] leading-[22.5px] md:leading-[30px] mb-[24px]'
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
            <FaCircleArrowRight className='h-6 w-6' />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
