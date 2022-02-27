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
          <Image src='/Logo.jpeg' width='95' height='60' />
        </li>
        <li
          style={{ marginLeft: 'auto' }}
          onClick={() => router.push('/')}
          className='navButtons'
        >
          Home
        </li>
        <li className='navButtons'>
          <Dropdown item simple text='Services'>
            <Dropdown.Menu style={{ marginTop: '1px' }}>
              <Link href='/services'>
                <Dropdown.Item>All Services</Dropdown.Item>
              </Link>
              <Link href='/services/corporate-yoga'>
                <Dropdown.Item>Corporate Yoga</Dropdown.Item>
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
        </li>
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
              <Icon name='cart' />
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
              onClick={() => {
                setVisibleServices(false);
                router.push('/services/corporate-yoga');
              }}
            >
              <Icon name='home' />
              Corporate Yoga
            </Menu.Item>
            <Menu.Item
              as='a'
              onClick={() => {
                setVisibleServices(false);
                router.push('/services/pregnancy-yoga');
              }}
            >
              <Icon name='try' />
              PREGNANCY YOGA
            </Menu.Item>
            <Menu.Item
              as='a'
              onClick={() => {
                setVisibleServices(false);
                router.push('/services/meditation-yoga');
              }}
            >
              <Icon name='try' />
              MEDITATION
            </Menu.Item>
            <Menu.Item
              as='a'
              onClick={() => {
                setVisibleServices(false);
                router.push('/services/hatha-yoga');
              }}
            >
              <Icon name='try' />
              HATHA YOGA
            </Menu.Item>
            <Menu.Item
              as='a'
              onClick={() => {
                setVisibleServices(false);
                router.push('/services/private-yoga');
              }}
            >
              <Icon name='try' />
              PRIVATE YOGA CLASSES
            </Menu.Item>
            <Menu.Item
              as='a'
              onClick={() => {
                setVisibleServices(false);
                router.push('/services/kids-yoga');
              }}
            >
              <Icon name='try' />
              KIDS YOGA
            </Menu.Item>
            <Menu.Item
              as='a'
              onClick={() => {
                setVisibleServices(false);
                router.push('/services/pranayama-yoga');
              }}
            >
              <Icon name='try' />
              PRANAYAMA
            </Menu.Item>
            <Menu.Item
              as='a'
              onClick={() => {
                setVisibleServices(false);
                router.push('/services/beginners-yoga');
              }}
            >
              <Icon name='try' />
              YOGA FOR BEGINNERS
            </Menu.Item>
            <Menu.Item
              as='a'
              onClick={() => {
                setVisibleServices(false);
                router.push('/services/online-yoga');
              }}
            >
              <Icon name='try' />
              ONLINE YOGA CLASSES
            </Menu.Item>
            <Menu.Item
              as='a'
              onClick={() => {
                setVisibleServices(false);
                router.push('/services/zumba-yoga');
              }}
            >
              <Icon name='try' />
              ZUMBA
            </Menu.Item>
          </Sidebar>
        </Media>
      </ul>
    </div>
  );
}

export default CustomNav;
