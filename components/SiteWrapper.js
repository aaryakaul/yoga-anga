import React from 'react';
import CustomNav from './CustomNav';
import Footer from '../components/Footer';
import ReviewCarousel from './ReviewCarousel';
import Meta from './Meta';

const SiteWrapper = ({ title, description, children }) => {
  return (
    <div>
      <Meta title={title} description={description} />
      <CustomNav />
      {children}
      <ReviewCarousel />
      <Footer />
    </div>
  );
};

export default SiteWrapper;
