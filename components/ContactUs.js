import React, { useState, useRef, useEffect } from 'react';
import emailjs from 'emailjs-com';

function ContactUs() {
  const form = useRef();
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');
  const [name, setName] = useState('');
  const [messageSent, setMessageSent] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setMessageSent(false);
    }, 3000);
  }, [messageSent]);

  const handleSend = (e) => {
    e.preventDefault();
    if (email !== '' && contact !== '' && message !== '' && name !== '') {
      setError(null);
      emailjs
        .sendForm(
          'service_ebtnzgf',
          'template_cf4cczk',
          form.current,
          'ql0Di4zASFMNUMxfQ'
        )
        .then(
          () => {
            setMessageSent(true);
            setEmail('');
            setContact('');
            setMessage('');
            setName('');
            setSubject('');
          },
          (error) => {
            setError('Not able to send the mail');
            console.log(error.text);
          }
        );
    } else {
      setError('Please Fill In All The Details To Proceed');
    }
  };

  return (
    <div>
      <div className='background'>
        <div className='container2'>
          <div className='screen'>
            <div className='screen-header'>
              <div className='screen-header-left'>
                <div className='screen-header-button close'></div>
                <div className='screen-header-button maximize'></div>
                <div className='screen-header-button minimize'></div>
              </div>
              <div className='screen-header-right'>
                <div className='screen-header-ellipsis'></div>
                <div className='screen-header-ellipsis'></div>
                <div className='screen-header-ellipsis'></div>
              </div>
            </div>
            <div className='screen-body'>
              <div className='screen-body-item left'>
                <div className='app-title'>
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
                  <a
                    className='footer__btn'
                    href='mailto: jinkal2796@gmail.com'
                  >
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
              <div className='screen-body-item'>
                <div className='app-form'>
                  <form ref={form} onSubmit={handleSend}>
                    <div className='app-form-group'>
                      <input
                        className='app-form-control'
                        placeholder='EMAIL'
                        value={email}
                        type='email'
                        name='email'
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className='app-form-group'>
                      <input
                        className='app-form-control'
                        placeholder='EMAIL SUBJECT'
                        value={subject}
                        type='text'
                        name='subject'
                        onChange={(e) => setSubject(e.target.value)}
                      />
                    </div>
                    <div className='app-form-group'>
                      <input
                        className='app-form-control'
                        placeholder='NAME'
                        value={name}
                        type='name'
                        name='name'
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className='app-form-group'>
                      <input
                        className='app-form-control'
                        placeholder='CONTACT NO'
                        value={contact}
                        type='number'
                        name='contact_no'
                        onChange={(e) => setContact(e.target.value)}
                      />
                    </div>
                    <div className='app-form-group message'>
                      <input
                        className='app-form-control'
                        placeholder='MESSAGE'
                        value={message}
                        type='text'
                        name='message'
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </div>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    {messageSent && (
                      <p style={{ color: 'green' }}>Message Sent !!</p>
                    )}
                    <div className='app-form-group buttons'>
                      <input
                        className='app-form-button'
                        type='button'
                        value='CANCEL'
                        onClick={() => {
                          setError(null);
                          setEmail('');
                          setContact('');
                          setMessage('');
                          setName('');
                          setSubject('');
                        }}
                      />
                      <input
                        type='submit'
                        value='SEND'
                        className='app-form-button'
                      />
                    </div>
                  </form>
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
