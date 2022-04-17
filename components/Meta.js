import React from 'react';
import Head from 'next/head';

const Meta = ({ title, description }) => {
  return (
    <Head>
      <link
        rel='stylesheet'
        href='https://use.fontawesome.com/releases/v5.13.0/css/all.css'
      />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta charSet='utf-8' />
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta property='og:description' content={description} />
      <link rel='preconnect' href='https://fonts.googleapis.com&display=swap' />
      <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
      <link
        href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,600;0,700;1,100&display=swap'
        rel='stylesheet'
      />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  );
};
export default Meta;
