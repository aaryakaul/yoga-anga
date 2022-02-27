import React, { useState, useEffect } from 'react';

function ContactUs() {
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');
  return (
    <div>
      <div class='background'>
        <div class='container2'>
          <div class='screen'>
            <div class='screen-header'>
              <div class='screen-header-left'>
                <div class='screen-header-button close'></div>
                <div class='screen-header-button maximize'></div>
                <div class='screen-header-button minimize'></div>
              </div>
              <div class='screen-header-right'>
                <div class='screen-header-ellipsis'></div>
                <div class='screen-header-ellipsis'></div>
                <div class='screen-header-ellipsis'></div>
              </div>
            </div>
            <div class='screen-body'>
              <div class='screen-body-item left'>
                <div class='app-title'>
                  <span>CONTACT US</span>
                </div>
                <div style={{ marginTop: '50px' }}>
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
                    <div style={{ marginTop: '-21px' }} className='media-icons'>
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
                </div>
              </div>
              <div class='screen-body-item'>
                <div class='app-form'>
                  <div class='app-form-group'>
                    <input
                      class='app-form-control'
                      placeholder='EMAIL'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div class='app-form-group'>
                    <input
                      class='app-form-control'
                      placeholder='CONTACT NO'
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                    />
                  </div>
                  <div class='app-form-group message'>
                    <input
                      class='app-form-control'
                      placeholder='MESSAGE'
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                  <div class='app-form-group buttons'>
                    <button
                      class='app-form-button'
                      onClick={() => {
                        setEmail('');
                        setContact('');
                        setMessage('');
                      }}
                    >
                      CANCEL
                    </button>
                    <button class='app-form-button'>SEND</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
