'use client';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import CustomNavLink from './CustomNavLink';
import Image from 'next/image';
import eGovChainLogo from '/assets/images/egovchain_logo.svg';
import { useScrollDetect } from '@/hooks/useScrollDetect';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isScrolled } = useScrollDetect();

  const navLinks = [
    { title: 'Home', href: '#home' },
    { title: 'About Us', href: '#about' },
    { title: 'Benefits', href: '#benefits' },
    { title: 'Highlights', href: '#highlights' },
    { title: 'Contact Us', href: '#contact' },
    { title: 'Developers', href: '/developers' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/50 backdrop-blur-md border-b' : 'bg-transparent'
      }`}
    >
      <div className='container mx-auto px-4'>
        <div className='flex h-16 items-center justify-between'>
          {/* Logo */}
          <div className='flex items-center'>
            <Link href='/'>
              <Image src={eGovChainLogo} alt={'eGovChain Logo'} width={111.69} height={24} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center gap-6'>
            {navLinks.map((link) => (
              <CustomNavLink
                key={link.title}
                href={link.href}
                className={({ isActive }) => `
                  text-sm font-medium transition-colors hover:text-primary relative py-2
                  ${isActive ? 'text-custom-blue' : ''}
                  after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full 
                  after:bg-custom-blue after:transition-transform after:duration-300
                  after:scale-x-0 after:origin-left
                  ${isActive ? 'after:scale-x-100' : ''}
                `}
              >
                {link.title}
              </CustomNavLink>
            ))}
          </nav>

          {/* Get Started Button (Desktop) */}
          <div className='hidden md:flex items-center'>
            <Button size={'sm'} className='rounded-full bg-custom-blue hover:bg-custom-blue/80'>
              Get Started
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className='md:hidden'>
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant='ghost' size='icon'>
                  <Menu className='h-6 w-6' />
                </Button>
              </SheetTrigger>
              <SheetContent side='right'>
                <SheetTitle className='sr-only'>Navigation Menu</SheetTitle>
                <nav className='flex flex-col gap-4 mt-6'>
                  {navLinks.map((link) => (
                    <CustomNavLink
                      key={link.title}
                      href={link.href}
                      className={({ isActive }) => `
                        text-sm font-medium transition-colors hover:text-custom-blue
                        ${isActive ? 'text-custom-blue underline' : ''}
                      `}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.title}
                    </CustomNavLink>
                  ))}
                  <Button className='mt-2 rounded-full bg-custom-blue'>Get Started</Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
