import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Menu, Sticky } from 'semantic-ui-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Nav = () => {
  const router = useRouter();
  const inputEl = useRef(null);
  const [activeItem, setActiveItem] = useState('');
  const handleItemClick = (e, { name }) => {
    console.log('name', name);
    e.preventDefault();
    setActiveItem(name);
    if (name) {
      if (name === 'home') {
        router.push('/');
      } else if (name === 'services') {
        router.push('/services');
      }
    }
  };

  return (
    <div className='navbar'>
      <Menu secondary>
        <Menu.Item>
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
        </Menu.Menu>
      </Menu>
    </div>
  );
};

export default Nav;
