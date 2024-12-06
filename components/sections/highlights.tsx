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
      className='snap-section min-h-screen flex items-center justify-center py-32'
    >
      <div className='container mx-auto px-4'>
        <h1 className='text-4xl font-bold text-center'>Powering eGovernment Platforms</h1>
        <p className='mt-4 text-lg md:text-xl text-center'>
          Discover the government services enhanced by eGovChain.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-12'>
          <Image src={laptopEgov} alt={'eGov Laptop'} />
          <Image src={laptopNationalId} alt={'National ID Laptop'} />
          <Image src={laptopEgovDx} alt={'eGov DX Laptop'} />
        </div>

        <div className='mt-16'>
          <Image src={egovLight} alt={'eGovChain Logo'} className='mx-auto opacity-30' />
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
