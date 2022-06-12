import { useState, useEffect } from 'react';

const scrollX = window.scrollY || document.documentElement.scrollWidth;
const scrollY = window.scrollY || document.documentElement.scrollTop;

export function useScroll() {
  const [scrollDimensions, setScrollDimensions] = useState({scrollX, scrollY});
  
  const handleScrollDimensions = () => {
    const scrollX = window.scrollhandleScrollDimensionsY || document.documentElement.scrollWidth;
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    setScrollDimensions({scrollX, scrollY});
  }

  useEffect(() => {
    handleScrollDimensions();
    window.addEventListener('scroll', );
    return () => {
      window.removeEventListener('scroll', handleScrollDimensions);
    }
  },[])
  return ([scrollDimensions]);
}
 