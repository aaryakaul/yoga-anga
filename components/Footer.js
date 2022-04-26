import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import useMobileDetect from 'use-mobile-detect-hook';
function Footer() {
  return (
    <div className='footer-width'>
      <footer className='footer' id='footer2' style={{ paddingLeft: '10%' }}>
        <div className='footer__addr'>
          <h1 className='footer__logo'>Yoga Anga</h1>

          <h2>Contact</h2>

          <address>
            <a href='tel:+918401685467'>
              <i
                style={{ paddingRight: '10px' }}
                className='fas fa-phone-volume'
              ></i>
              +91 84016854567
            </a>
            <br />
            <a className='footer__btn' href='mailto: jinkal2796@gmail.com'>
              Email Us
            </a>
            <div className='right box'>
              <div className='media-icons' id='footer-media-icons'>
                <a
                  href='https://www.facebook.com/jinkal.thakkar'
                  target='_blank'
                >
                  <i className='fab fa-facebook-f'></i>
                </a>
                <a
                  href='https://instagram.com/yoga_anga?utm_medium=copy_link'
                  target='_blank'
                >
                  <i className='fab fa-instagram'></i>
                </a>
              </div>
            </div>
          </address>
        </div>

        <ul className='footer__nav'>
          <li className='nav__item nav__item--extra'>
            <h2 className='nav__title'>
              {' '}
              <Link href='/services'>
                <a>Our Services </a>
              </Link>
            </h2>

            <ul className='nav__ul nav__ul--extra' style={{ width: 270 }}>
              <li>
                <Link href='/services/zumba-yoga'>
                  <a>Zumba</a>
                </Link>
              </li>
              <li>
                <Link href='/services/online-yoga'>
                  <a>Online Yoga</a>
                </Link>
              </li>

              <li>
                <Link href='/services/beginners-yoga'>
                  <a>Yoga For Beginners</a>
                </Link>
              </li>

              <li>
                <Link href='/services/hatha-yoga'>
                  <a>Hatha Yoga</a>
                </Link>
              </li>

              <li>
                <Link href='/services/private-yoga'>
                  <a>Private Yoga</a>
                </Link>
              </li>

              <li>
                <Link href='/services/corporate-yoga'>
                  <a>Corporate Yoga</a>
                </Link>
              </li>

              <li>
                <Link href='/services/kids-yoga'>
                  <a>Kids yoga</a>
                </Link>
              </li>
              <li>
                <Link href='/services/pregnancy-yoga'>
                  <a>Pregnancy Yoga</a>
                </Link>
              </li>
              <li>
                <Link href='/services/meditation-yoga'>
                  <a>Meditation</a>
                </Link>
              </li>
              <li>
                <Link href='/services/pranayama-yoga'>
                  <a>Pranayama</a>
                </Link>
              </li>
            </ul>
          </li>
          <li className='nav__item'>
            <ul className='nav__ul'>
              <li>
                <Link href='/'>
                  <a>
                    <Image src='/Logo.jpeg' width='205' height='160' />
                  </a>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
