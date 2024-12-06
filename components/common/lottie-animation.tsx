// components/ui/lottie-animation.tsx
'use client';

import dynamic from 'next/dynamic';
import { CSSProperties, useEffect, useState } from 'react';

const Lottie = dynamic(() => import('lottie-react'), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

interface LottieAnimationProps {
  animationData: any;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
}

export default function LottieAnimation({
  animationData,
  loop = true,
  autoplay = true,
  className,
  style,
  onClick,
}: LottieAnimationProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Lottie
      animationData={animationData}
      loop={loop}
      autoplay={autoplay}
      className={className}
      style={style}
      onClick={onClick}
    />
  );
}
