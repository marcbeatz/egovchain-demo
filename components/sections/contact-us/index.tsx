import React from 'react';
import Image from 'next/image';
import bgLightBlue from '/assets/images/bg_light_blue.svg';
import ContactForm from './contact-form';

const contactsArray = [
  {
    id: '01',
    title: 'Office hours',
    description: ['Monday - Friday', '8:00 AM to 5:00 PM'],
  },
  {
    id: '02',
    title: 'Our address',
    description: ['Garcia Ave, Diliman,', 'Quezon City, Metro Manila'],
  },
  {
    id: '03',
    title: 'telephone',
    description: ['(02) 8920 0101'],
  },
  {
    id: '04',
    title: 'email address',
    description: ['support.egovchain@dict.gov.ph'],
  },
];

const ContactUsSection = () => {
  return (
    <section
      id='contact'
      className='snap-section min-h-screen flex items-center justify-center relative overflow-hidden py-10 md:py-32'
    >
      {/* Background Image wrapper */}
      <div className='absolute inset-0'>
        <div className='relative w-full h-full flex items-center justify-center'>
          <div className='relative h-full aspect-auto'>
            <Image
              src={bgLightBlue}
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

      <div className='container mx-auto px-4 z-10 flex flex-col md:flex-row items-center justify-between gap-10'>
        <div>
          <h2
            style={{ fontWeight: 600 }}
            className='text-[16px] md:text-[20px] tracking-[.3em] mb-[16px]'
          >
            CONTACT US
          </h2>
          <h2
            style={{ fontWeight: 600 }}
            className='text-[36px] md:text-[54px] -tracking-[3px] leading-[42px] md:leading-[49px] md:max-w-[550px]'
          >{`Let's Build a Brighter Future Together`}</h2>

          <div className='flex flex-col-reverse mt-[40px] gap-[40px]'>
            <div className='flex flex-wrap gap-10 md:gap-10 md:max-w-[450px]'>
              {contactsArray.map((contact) => (
                <div className='flex flex-col gap-[8px]' key={contact.id}>
                  <h2
                    className='uppercase text-[12px] md:text-[14px] leading-[22.4px] tracking-[1.68px]'
                    style={{ fontWeight: 700 }}
                  >
                    {contact.title}
                  </h2>
                  <div className='flex flex-col gap-1'>
                    {contact.description.map((desc, index) => (
                      <span
                        key={index}
                        style={{ fontWeight: 400 }}
                        className='text-[14px] md:text-[16px] leading-[19px] md:leading-[24px]'
                      >
                        {desc}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className='md:hidden'>
              <ContactForm />
            </div>
          </div>
        </div>

        <div className='hidden md:block md:w-[544px]'>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
