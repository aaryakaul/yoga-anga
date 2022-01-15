import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Menu, Sticky } from 'semantic-ui-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Nav = () => {
  const router = useRouter();

  const [activeItem, setActiveItem] = useState('');
  const [activeLink, setActiveLink] = useState('');

  const handleItemClick = (e, { name }) => {
    // setActiveItem(name);
    // setActiveLink(name);
    if (name) {
      if (name === 'home') {
        router.push('/');
        // setActiveItem('home');
      } else if (name === 'services') {
        router.push('/services');
        // setActiveItem('services');
      } else if (name === 'gallery') {
        router.push('/gallery');
      } else {
        router.push('/contactus');
      }
    }
  };

  // useEffect(() => {
  //   console.log(activeLink);
  //   setActiveItem(activeLink);
  // }, [activeLink]);

  return (
    <div className='navbar'>
      <Menu secondary>
        <Menu.Item name='home' onClick={handleItemClick}>
          <Image src='/Logo.jpeg' width='95' height='60' />
        </Menu.Item>
        <Menu.Menu position='right' style={{ marginRight: 10 }}>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name='services'
            active={activeItem === 'services'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name='gallery'
            active={activeItem === 'gallery'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name='contact us'
            active={activeItem === 'contactus'}
            onClick={handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    </div>
  );
};

export default Nav;
