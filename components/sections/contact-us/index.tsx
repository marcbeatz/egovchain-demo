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
      className='snap-section min-h-screen flex items-center justify-center relative overflow-hidden py-32'
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
          <h2 className='text-lg uppercase tracking-widest font-bold'>CONTACT US</h2>
          <h1 className='text-4xl font-bold'>
            Let's Build a Brighter
            <br />
            Future Together
          </h1>

          <div className='mt-20 grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-10'>
            {contactsArray.map((contact) => (
              <div className='flex flex-col gap-5' key={contact.id}>
                <h2 className='text-md font-bold tracking-widest uppercase'>{contact.title}</h2>
                <div className='flex flex-col gap-1'>
                  {contact.description.map((desc, index) => (
                    <span key={index} className='text-sm'>
                      {desc}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
};

export default ContactUsSection;
