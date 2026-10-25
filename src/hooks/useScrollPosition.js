import { useEffect, useState } from 'react';

/** Returns true once the page has been scrolled past `offset` pixels. */
export function useIsScrolled(offset = 40) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > offset);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [offset]);

  return isScrolled;
}
