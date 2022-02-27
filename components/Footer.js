import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import useMobileDetect from 'use-mobile-detect-hook';
function Footer() {
  return (
    <div className='footer-width'>
      <footer class='footer' id='footer2' style={{ paddingLeft: '10%' }}>
        <div class='footer__addr'>
          <h1 class='footer__logo'>Yoga Anga</h1>

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
            <a class='footer__btn' href='mailto: jinkal2796@gmail.com'>
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

        <ul class='footer__nav'>
          <li class='nav__item nav__item--extra'>
            <h2 class='nav__title'>
              {' '}
              <Link href='/services'>
                <a>Our Services </a>
              </Link>
            </h2>

            <ul class='nav__ul nav__ul--extra'>
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
                  <a>Yoga For beginners</a>
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
          <li class='nav__item'>
            <ul class='nav__ul'>
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
