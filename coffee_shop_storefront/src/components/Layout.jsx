import { useLayoutEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Loader from './Loader';
import useScrollReveal from '../hooks/useScrollReveal';
import useStellar from '../hooks/useStellar';

export default function Layout() {
  const { pathname } = useLocation();

  // every original page started at the top
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // these run after the page below has mounted (child effects fire first)
  useScrollReveal(pathname);
  useStellar(pathname);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <Loader />
    </>
  );
}
