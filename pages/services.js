import React from 'react';
import Services from '../components/Services';
import Link from 'next/link';
import { Button } from 'semantic-ui-react';
import SiteWrapper from '../components/SiteWrapper';

function services() {
  return (
    <SiteWrapper
      title='Yoga Anga - Services'
      description='This Is Yoga Anga Services'
    >
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
    </SiteWrapper>
  );
}

export default services;
