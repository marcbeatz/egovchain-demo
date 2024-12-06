import { useState, useEffect } from 'react';

interface ScrollState {
  isScrolled: boolean;
  scrollTop: number;
}

export const useScrollDetect = () => {
  const [scrollState, setScrollState] = useState<ScrollState>({
    isScrolled: false,
    scrollTop: 0,
  });

  useEffect(() => {
    // Find the scrollable parent container
    const scrollContainer = document.querySelector('.scrollable-container');
    if (!scrollContainer) {
      console.log('No scrollable container found');
      return;
    }

    const handleScroll = () => {
      const scrollTop = scrollContainer.scrollTop;

      setScrollState({
        isScrolled: scrollTop > 0,
        scrollTop: scrollTop,
      });
    };

    // Add scroll event listener to the scrollable container
    scrollContainer.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollState;
};
