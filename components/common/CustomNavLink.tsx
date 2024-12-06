'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: (({ isActive }: { isActive: boolean }) => string) | string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const CustomNavLink = ({ href, children, className = '', onClick }: NavLinkProps) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const sectionId = href.replace('#', '');

    const observerOptions = {
      threshold: 0.5,
      rootMargin: '-64px 0px 0px 0px',
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsActive(true);
        } else {
          setIsActive(false);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const element = document.getElementById(sectionId);

    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [href]);

  const computedClassName = typeof className === 'function' ? className({ isActive }) : className;

  return (
    <Link href={href} className={computedClassName} onClick={onClick}>
      {children}
    </Link>
  );
};

export default CustomNavLink;
