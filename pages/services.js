import React from 'react';
import Services from '../components/Services';
import Nav from '../components/Nav';
import Link from 'next/link';
import { Button, Icon, Grid } from 'semantic-ui-react';

function services() {
  return (
    <div>
      <Nav />
      <section className='services'>
        <div className='text-box'>
          <h1>YOGA ANGA</h1>
          <p style={{ lineHeight: '2' }}>
            Welcome to Yoga Anga, where we invite you to explore and deepen your
            yoga practice, discover your own magic, heal, recharge, relax, learn
            and thrive! We’re dedicated to making yoga available to everyone
            regardless of their size, shape, or bank accounts. Join our
            positive, diverse community today.
          </p>
          <Link href='/services'>
            <a>
              <Button basic inverted color='teal' size='large'>
                Services
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
