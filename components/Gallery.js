import React from 'react';
import Footer from './Footer';
import Image from 'next/image';
function Gallery() {
  return (
    <div>
      <div className='container'>
        <div className='heading'>
          <h1>Discover the spirit of yoga</h1>
          <p>
            Yoga is a science that has crossed centuries and continents for the
            well-being of all.
          </p>
        </div>
        <div className='gallery'>
          <div className='gallery-item'>
            <img
              className='gallery-image'
              src='/galleryimage1.jpeg'
              style={{ width: 'inherit', height: 'inherit' }}
              alt='pregnancyyoga'
            />
          </div>

          <div className='gallery-item'>
            <img
              className='gallery-image'
              src='/galleryimage2.jpeg'
              style={{ width: 'inherit', height: 'inherit' }}
              alt='pregnancyyoga'
            />
          </div>

          <div className='gallery-item'>
            <img
              className='gallery-image'
              src='/galleryimage3.jpeg'
              style={{ width: 'inherit', height: 'inherit' }}
              alt='pregnancyyoga'
            />
          </div>

          <div className='gallery-item'>
            <img
              className='gallery-image'
              src='/galleryimage4.jpeg'
              style={{ width: 'inherit', height: 'inherit' }}
              alt='pregnancyyoga'
            />
          </div>
          <div className='gallery-item'>
            <img
              className='gallery-image'
              src='/galleryimage5.jpeg'
              style={{ width: 'inherit', height: 'inherit' }}
              alt='pregnancyyoga'
            />
          </div>
          <div className='gallery-item'>
            <img
              className='gallery-image'
              src='/galleryimage6.jpeg'
              style={{ width: 'inherit', height: 'inherit' }}
              alt='pregnancyyoga'
            />
          </div>
          <div className='gallery-item'>
            <img
              className='gallery-image'
              src='/galleryimage7.jpeg'
              style={{ width: 'inherit', height: 'inherit' }}
              alt='pregnancyyoga'
            />
          </div>
          <div className='gallery-item'>
            <img
              className='gallery-image'
              src='/galleryimage8.jpeg'
              style={{ width: 'inherit', height: 'inherit' }}
              alt='pregnancyyoga'
            />
          </div>
          <div className='gallery-item'>
            <img
              className='gallery-image'
              src='/galleryimage9.jpeg'
              style={{ width: 'inherit', height: 'inherit' }}
              alt='pregnancyyoga'
            />
          </div>
          <div className='gallery-item'>
            <img
              className='gallery-image'
              src='/galleryimage10.jpeg'
              style={{ width: 'inherit', height: 'inherit' }}
              alt='pregnancyyoga'
            />
          </div>
          <div className='gallery-item'>
            <img
              className='gallery-image'
              src='/galleryimage11.jpeg'
              style={{ width: 'inherit', height: 'inherit' }}
              alt='pregnancyyoga'
            />
          </div>
          <div className='gallery-item'>
            <img
              className='gallery-image'
              src='/galleryimage12.jpeg'
              style={{ width: 'inherit', height: 'inherit' }}
              alt='pregnancyyoga'
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Gallery;
