import React, { useEffect, useState } from "react";
import Header from '../shared/Header';
import Content from './Content';
import Footer from '../shared/Footer';
import ScrollToTop from '../utility/ScrollToTop';
import Loader from '../utility/Loader';
import dynamic from 'next/dynamic';

const Filter = dynamic(() => import('../complex/Filter'), { ssr: false });
const Commsult = dynamic(() => import('../complex/Commsult'), { ssr: false });

export default function Layout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Content />
          <Filter />
          {children}
          <Commsult />
          <Footer />
          <ScrollToTop />
        </>
      )}
    </>
  )
}
