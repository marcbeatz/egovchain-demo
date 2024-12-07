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
      className='relative snap-section bg-custom-dark flex items-center justify-center py-20 md:py-32 text-background'
    >
      <div className='container mx-auto px-4 flex flex-col md:flex-row md:flex-wrap items-start md:justify-between gap-10 md:gap-16'>
        <Image
          src={republikaLogo}
          alt={'Republika Logo'}
          width={203.64}
          height={224}
          className='opacity-15 absolute md:relative top-5 right-5'
        />

        <div className='flex flex-col gap-5'>
          <Image
            src={egovChainSemi}
            alt='eGovChain Semi Light'
            width={200}
            height={200}
            className='w-[98.92px] md:w-auto'
          />
          <div className='flex flex-col gap-2'>
            <p>Copyright © 2023</p>
            <p>DICT Services</p>
            <p>All Rights Reserved</p>
          </div>
        </div>

        <div className='flex flex-col gap-5'>
          <h2 className='text-[14px] md:text-[16px] font-bold uppercase'>About Us</h2>
          <div className='flex flex-col gap-2'>
            <Link href='/terms'>Terms & Conditions</Link>
            <Link href='/privacy'>Privacy Policy</Link>
            <Link href='/faq'>FAQs</Link>
          </div>
        </div>

        <div className='flex flex-col gap-5'>
          <h2 className='text-[14px] md:text-[16px] font-bold uppercase'>FOLLOW US</h2>
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
          <h2 className='text-[14px] md:text-[16px] font-bold uppercase'>DEVELOPED BY</h2>
          <Image src={dict} alt='DICT' width={152.33} height={65.81} className='h-auto' />
        </div>
      </div>
    </section>
  );
};

export default Footer;
