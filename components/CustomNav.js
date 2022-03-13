import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, Sidebar, Icon, Dropdown } from 'semantic-ui-react';
import { useRouter } from 'next/router';
import { Media } from '../lib/Media';
import Link from 'next/link';

function CustomNav() {
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const [visibleServices, setVisibleServices] = useState(false);

  return (
    <div className='customNav'>
      <ul className='customNavUl'>
        <li
          className='navButtonsImage'
          style={{ marginTop: 5, cursor: 'pointer' }}
          onClick={() => router.push('/')}
        >
          <Image src='/Logo.jpeg' width='88' height='63' />
        </li>
        <li
          style={{ marginLeft: 'auto' }}
          onClick={() => router.push('/')}
          className='navButtons'
        >
          Home
        </li>
        <Dropdown simple item text='Services' className='navButtons'>
          <Dropdown.Menu style={{ marginTop: '1px' }}>
            <Link href='/services'>
              <Dropdown.Item>ALL SERVICES</Dropdown.Item>
            </Link>
            <Link href='/services/corporate-yoga'>
              <Dropdown.Item>CORPORATE YOGA</Dropdown.Item>
            </Link>
            <Link href='/services/pregnancy-yoga'>
              <Dropdown.Item>PREGNANCY YOGA</Dropdown.Item>
            </Link>
            <Link href='/services/meditation-yoga'>
              <Dropdown.Item>MEDITATION</Dropdown.Item>
            </Link>
            <Link href='/services/hatha-yoga'>
              <Dropdown.Item>HATHA YOGA</Dropdown.Item>
            </Link>
            <Link href='/services/private-yoga'>
              <Dropdown.Item>PRIVATE YOGA CLASSES</Dropdown.Item>
            </Link>
            <Link href='/services/kids-yoga'>
              <Dropdown.Item>KIDS YOGA</Dropdown.Item>
            </Link>
            <Link href='/services/pranayama-yoga'>
              <Dropdown.Item>PRANAYAMA</Dropdown.Item>
            </Link>
            <Link href='/services/beginners-yoga'>
              <Dropdown.Item>YOGA FOR BEGINNERS</Dropdown.Item>
            </Link>
            <Link href='/services/online-yoga'>
              <Dropdown.Item>ONLINE YOGA CLASSES</Dropdown.Item>
            </Link>
            <Link href='/services/zumba-yoga'>
              <Dropdown.Item>ZUMBA</Dropdown.Item>
            </Link>
          </Dropdown.Menu>
        </Dropdown>
        <li className='navButtons' onClick={() => router.push('/gallery')}>
          Gallery
        </li>
        <li className='navButtons' onClick={() => router.push('/contactus')}>
          Contact Us
        </li>
        <Media lessThan='myNavSize' className='jhi'>
          {visible ? (
            <Icon
              name='close'
              size='large'
              onClick={() => setVisible(!visible)}
            />
          ) : (
            <Icon
              name='align justify'
              size='large'
              onClick={() => setVisible(!visible)}
            />
          )}

          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={() => setVisible(false)}
            vertical
            visible={visible}
            width='wide'
          >
            <Menu.Item as='a' onClick={() => router.push('/')}>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item
              as='a'
              onClick={() => setVisibleServices(!visibleServices)}
            >
              <Icon name='arrow circle right' />
              Services
            </Menu.Item>
            <Menu.Item as='a' onClick={() => router.push('/gallery')}>
              <Icon name='camera' />
              Gallery
            </Menu.Item>
            <Menu.Item as='a' onClick={() => router.push('/contactus')}>
              <Icon name='phone' />
              Contact Us
            </Menu.Item>
          </Sidebar>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={() => setVisibleServices(false)}
            vertical
            visible={visibleServices}
            width='wide'
          >
            <Menu.Item
              as='a'
              style={{ lineHeight: 2 }}
              onClick={() => {
                setVisibleServices(false);
                router.push('/services/');
              }}
            >
              ALL SERVICES
            </Menu.Item>
            <Menu.Item
              as='a'
              style={{ lineHeight: 2 }}
              onClick={() => {
                setVisibleServices(false);
                router.push('/services/corporate-yoga');
              }}
            >
              CORPORATE YOGA
            </Menu.Item>
            <Menu.Item
              style={{ lineHeight: 2 }}
              as='a'
              onClick={() => {
                setVisibleServices(false);
                router.push('/services/pregnancy-yoga');
              }}
            >
              PREGNANCY YOGA
            </Menu.Item>
            <Menu.Item
              style={{ lineHeight: 2 }}
              as='a'
              onClick={() => {
                setVisibleServices(false);
                router.push('/services/meditation-yoga');
              }}
            >
              MEDITATION
            </Menu.Item>
            <Menu.Item
              style={{ lineHeight: 2 }}
              as='a'
              onClick={() => {
                setVisibleServices(false);
                router.push('/services/hatha-yoga');
              }}
            >
              HATHA YOGA
            </Menu.Item>
            <Menu.Item
              style={{ lineHeight: 2 }}
              as='a'
              onClick={() => {
                setVisibleServices(false);
                router.push('/services/private-yoga');
              }}
            >
              PRIVATE YOGA CLASSES
            </Menu.Item>
            <Menu.Item
              as='a'
              style={{ lineHeight: 2 }}
              onClick={() => {
                setVisibleServices(false);
                router.push('/services/kids-yoga');
              }}
            >
              KIDS YOGA
            </Menu.Item>
            <Menu.Item
              style={{ lineHeight: 2 }}
              as='a'
              onClick={() => {
                setVisibleServices(false);
                router.push('/services/pranayama-yoga');
              }}
            >
              PRANAYAMA
            </Menu.Item>
            <Menu.Item
              style={{ lineHeight: 2 }}
              as='a'
              onClick={() => {
                setVisibleServices(false);
                router.push('/services/beginners-yoga');
              }}
            >
              YOGA FOR BEGINNERS
            </Menu.Item>
            <Menu.Item
              style={{ lineHeight: 2 }}
              as='a'
              onClick={() => {
                setVisibleServices(false);
                router.push('/services/online-yoga');
              }}
            >
              ONLINE YOGA CLASSES
            </Menu.Item>
            <Menu.Item
              style={{ lineHeight: 2 }}
              as='a'
              onClick={() => {
                setVisibleServices(false);
                router.push('/services/zumba-yoga');
              }}
            >
              ZUMBA
            </Menu.Item>
          </Sidebar>
        </Media>
      </ul>
    </div>
  );
}

export default CustomNav;
