import React from 'react';
import Services from '../components/Services';
import Nav from '../components/Nav';
import Link from 'next/link';
import Head from 'next/head';
import { Button, Icon, Grid } from 'semantic-ui-react';
import CustomNav from '../components/CustomNav';
function services() {
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
      <section className='services'>
        <div className='text-box' style={{ paddingTop: '25px' }}>
          <h1>Stay in shape all year round</h1>
          <p style={{ lineHeight: '2' }}>
            Yoga Anga offers yoga classes 7 days a week classes in Ashtanga,
            Hatha, Kundalini, Iyengar, Restorative, Yin, Prenatal Yoga and
            Meditation for all types of students, from beginners to experienced
            practitioners. <strong>“Grow your health better”</strong>.
          </p>
          <Link href='/'>
            <a>
              <Button basic inverted color='teal' size='large'>
                Home
              </Button>
            </a>
          </Link>
        </div>
      </section>
      <Services />
    </div>
  );
}

export default services;
