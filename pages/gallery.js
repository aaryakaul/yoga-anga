import React from 'react';
import Head from 'next/head';
import Nav from '../components/Nav';
import Gallery from '../components/Gallery';
import CustomNav from '../components/CustomNav';

function gallery() {
  return (
    <div>
      <Head>
        <title>Services</title>
        <meta
          name='description'
          content='width=device-width,initial-scale=1.0'
        />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,600;0,700;1,100&display=swap'
          rel='stylesheet'
        />
        <link
          rel='stylesheet'
          href='https://pro.fontawesome.com/releases/v5.10.0/css/all.css'
          integrity='sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p'
          crossOrigin='anonymous'
        />
      </Head>
      <CustomNav />
      <Gallery />
    </div>
  );
}

export default gallery;
