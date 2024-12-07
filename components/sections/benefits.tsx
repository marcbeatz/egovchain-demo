import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import Image from 'next/image';
import iconLock from '/assets/images/icon_encryption.svg';
import iconSecurity from '/assets/images/icon_security.svg';
import iconStopWatch from '/assets/images/icon_stopwatch.svg';
import iconKey from '/assets/images/icon_key.svg';
import iconBlockChain from '/assets/images/icon_blockchain.svg';
import iconGovernment from '/assets/images/icon_government.svg';
import { CircleCheckBig } from 'lucide-react';

const benefitsCardArray = [
  {
    id: '01',
    title: 'Zero-Trust Architecture',
    description: [
      <p key='1'>
        <strong>Enhanced Security:</strong> A security model that assumes no one or device is
        inherently trustworthy.
      </p>,
      <p key='2'>
        <strong>Proactive Threat Mitigation:</strong> Continuous monitoring and rapid response to
        potential threats.
      </p>,
    ],
    icon: iconLock,
  },
  {
    id: '02',
    title: 'Tokenization',
    description: [
      <p key='1'>
        <strong>Data Privacy:</strong> Protecting sensitive data by replacing it with unique tokens.
      </p>,
      <p key='2'>
        <strong>Secure Data Sharing:</strong> Controlled and secure sharing of data.
      </p>,
    ],
    icon: iconSecurity,
  },
  {
    id: '03',
    title: 'Streamlined Efficiency',
    description: [
      <p key='1'>
        <strong>Automated Workflows:</strong> Streamlined processes and reduced manual intervention.
      </p>,
      <p key='2'>
        <strong>Faster Service Delivery:</strong> Expedited delivery of government services.
      </p>,
    ],
    icon: iconStopWatch,
  },
  {
    id: '04',
    title: 'Encryption',
    description: [
      <p key='1'>
        <strong>Data Confidentiality:</strong> Ensuring the confidentiality of sensitive data.
      </p>,
      <p key='2'>
        <strong>Data Integrity:</strong> Protecting data from unauthorized modification.
      </p>,
    ],
    icon: iconKey,
  },
  {
    id: '05',
    title: 'Blockchain Technology',
    description: [
      <p key='1'>
        <strong>Immutable Record-Keeping:</strong> Transparent and auditable transactions on the
        blockchain.
      </p>,
      <p key='2'>
        <strong>Smart Contract Automation:</strong> Automating government processes and reducing
        human error.
      </p>,
    ],
    icon: iconBlockChain,
  },
  {
    id: '06',
    title: 'Data Protection',
    description: [
      <p key='1'>
        <strong>Seamless Service Delivery:</strong> Convenient access to government services through
        digital channels.
      </p>,
      <p key='2'>
        <strong>Improved Citizen Satisfaction:</strong> Increased trust and confidence in
        government.
      </p>,
    ],
    icon: iconGovernment,
  },
];

const BenefitsSection = () => {
  return (
    <section
      id='benefits'
      className='snap-section min-h-screen bg-background flex items-center justify-center py-10 md:py-24'
    >
      <div className='container mx-auto px-4'>
        <h2
          className='text-center text-[38px] md:text-[54px] leading-[42px] md:leading-[49px] -tracking-[3px] md:-tracking-[4px]'
          style={{
            fontWeight: 600,
          }}
        >
          Key Benefits of eGovChain
        </h2>
        <p className='text-center text-[18px] md:text-[20px]' style={{ fontWeight: 300 }}>
          Experience the transformative power of blockchain technology and zero-trust tokenization
          in government.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8'>
          {benefitsCardArray.map((benefit) => (
            <Card key={benefit.id} className='border border-custom-light rounded-lg'>
              <CardHeader className='relative'>
                <span className='text-3xl absolute left-8 top-8 text-custom-light/15'>
                  {benefit.id}
                </span>
                <CardTitle className='flex items-center flex-col gap-8'>
                  <Image src={benefit.icon} alt={benefit.title} width={50} height={50} />
                  <span>{benefit.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className='flex flex-col gap-5'>
                {benefit.description.map((desc, index) => (
                  <div key={index} className='flex gap-2 items-start'>
                    <span className='text-custom-light'>
                      <CircleCheckBig size={21} />
                    </span>

                    {desc}
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
