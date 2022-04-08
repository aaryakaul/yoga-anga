import React from 'react';
import SiteWrapper from '../components/SiteWrapper';
import Gallery from '../components/Gallery';

function gallery() {
  return (
    <SiteWrapper title='Gallery' description='This Is Yoga Anga Gallery'>
      <Gallery />
    </SiteWrapper>
  );
}

export default gallery;
