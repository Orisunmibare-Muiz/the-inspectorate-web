import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  // This extracts the current URL path (like '/about' or '/contact')
  const { pathname } = useLocation();

  // This effect runs every time the pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // This component doesn't actually show anything on the screen!
  return null;
}