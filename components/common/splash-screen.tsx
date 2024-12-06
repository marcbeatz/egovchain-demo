'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import logo from '/assets/images/egovchain_logo.svg';

const SplashScreen: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gray-200 ${
        isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className='text-center flex flex-col gap-3 items-center'>
        <Image src={logo} alt={'eLGU'} width={150} height={150} />
        <div className='flex justify-center space-x-2'>
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 bg-white rounded-full animate-bounce`}
              style={{ animationDelay: `${i * 0.1}s` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
