import React from 'react';
import Image from 'next/image';
import republikaLogo from '/assets/images/republika_logo.svg';
import egovChainSemi from '/assets/images/egovchain_logo_semi_light.svg';
import dict from '/assets/images/dict_logo_light.svg';
import Link from 'next/link';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
  return (
    <section
      id='footer'
      className='snap-section bg-custom-dark flex items-center justify-center py-32 text-background'
    >
      <div className='container mx-auto px-4 flex flex-col md:flex-row md:flex-wrap items-center md:items-start gap-16'>
        <Image
          src={republikaLogo}
          alt={'Republika Logo'}
          width={200}
          height={200}
          className='opacity-30'
        />

        <div className='flex flex-col gap-5'>
          <Image src={egovChainSemi} alt='eGovChain Semi Light' width={200} height={200} />
          <div className='flex flex-col gap-2'>
            <p>Copyright © 2023 eGovChain.</p>
            <p>All Rights Reserved</p>
          </div>
        </div>

        <div className='flex flex-col gap-5'>
          <h2 className='text-lg font-bold uppercase'>About Us</h2>
          <div className='flex flex-col gap-2'>
            <Link href='/terms'>Terms & Conditions</Link>
            <Link href='/privacy'>Privacy Policy</Link>
            <Link href='/faq'>FAQs</Link>
          </div>
        </div>

        <div className='flex flex-col gap-5'>
          <h2 className='text-lg font-bold uppercase'>FOLLOW US</h2>
          <div className='flex gap-5'>
            <Link href='#'>
              <FaFacebook className='w-5 h-5' />
            </Link>
            <Link href='#'>
              <FaTwitter className='w-5 h-5' />
            </Link>
            <Link href='#'>
              <AiFillInstagram className='w-5 h-5' />
            </Link>
          </div>
        </div>

        <div className='flex flex-col gap-5'>
          <h2 className='text-lg font-bold uppercase'>DEVELOPED BY</h2>
          <Image src={dict} alt='DICT' width={200} className='h-auto' />
        </div>
      </div>
    </section>
  );
};

export default Footer;
