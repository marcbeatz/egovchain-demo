import React from 'react';
import laptopEgov from '/assets/images/laptop_egov.svg';
import laptopEgovDx from '/assets/images/laptop_egovdx.svg';
import laptopNationalId from '/assets/images/laptop_national_id.svg';
import egovLight from '/assets/images/egovchain_logo_light.svg';
import Image from 'next/image';

const HighlightsSection = () => {
  return (
    <section
      id='highlights'
      className='snap-section min-h-screen flex items-center justify-center py-10 md:py-32'
    >
      <div className='container mx-auto px-4'>
        <h2
          style={{ fontWeight: 600 }}
          className='text-center text-[36px] md:text-[54px] -tracking-[3px] mb-[16px]'
        >
          Powering eGovernment Platforms
        </h2>
        <p className='text-center text-[18px] md:text-[20px] mb-[40px]' style={{ fontWeight: 300 }}>
          Discover the government services enhanced by eGovChain.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-[58px]'>
          <Image src={laptopEgov} alt={'eGov Laptop'} />
          <Image src={laptopNationalId} alt={'National ID Laptop'} />
          <Image src={laptopEgovDx} alt={'eGov DX Laptop'} />
        </div>

        <div className='mt-16'>
          <Image
            src={egovLight}
            alt={'eGovChain Logo'}
            width={507.25}
            height={109}
            className='mx-auto opacity-30'
          />
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
