import React, { useState, useEffect } from 'react';
import { Button, Icon, Grid } from 'semantic-ui-react';
import { Media } from '../lib/Media';
import Nav from '../components/Nav';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Footer from '../components/Footer';
import CustomNav from '../components/CustomNav';

const Home = () => {
  const [didMount, setDidMount] = useState(false);

  var slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  useEffect(() => {
    setDidMount(true);
  }, []);

  function showSlides(n) {
    var i;
    // var slides;
    // var dots;
    if (didMount) {
      var slides = document.getElementsByClassName('mySlides');
      var dots = document.getElementsByClassName('dot');
    }

    if (n > slides?.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides?.length;
    }
    for (i = 0; i < slides?.length; i++) {
      slides[i].style.display = 'none';
    }
    for (i = 0; i < dots?.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }
    if (slides && slides.length > 0 && dots && dots.length > 0) {
      slides[slideIndex - 1].style.display = 'block';
      dots[slideIndex - 1].className += ' active';
    }
  }
  return (
    <div>
      <Head>
        <title>Yoga Anga</title>
        <meta
          name='description'
          content='width=device-width,initial-scale=1.0'
        />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,600;0,700;1,100&display=swap'
          rel='stylesheet'
        />
        <link
          rel='stylesheet'
          href='https://pro.fontawesome.com/releases/v5.10.0/css/all.css'
          integrity='sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p'
          crossOrigin='anonymous'
        />
      </Head>
      <Media greaterThanOrEqual='customSizeFormobile'>
        <CustomNav />
        <section className='header' id='home'>
          <div className='text-box'>
            <h1>YOGA ANGA</h1>
            <p style={{ lineHeight: '2' }}>
              Welcome to Yoga Anga, where we invite you to explore and deepen
              your yoga practice, discover your own magic, heal, recharge,
              relax, learn and thrive! We’re dedicated to making yoga available
              to everyone regardless of their size, shape, or bank accounts.
              Join our positive, diverse community today.
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
        <section className='about commonWidth' id='aboutUs'>
          <div className='about-cols'>
            <div className='about-rows'>
              <div className='aboutItem'>
                <h1>About Us</h1>
                <p style={{ lineHeight: '2em', textAlign: 'left' }}>
                  In today’s fast-paced world, our lifestyle hampers our body’s
                  well-being by accumulating toxins. This results in creation of
                  stress, diseases and illnesses, which deteriorates one’s
                  health. This is where the Yoga Anga comes into effect and has
                  proven to be important for our body and mind. Yoga Anga is a
                  sacred haven for everyone who wants to embark on a life
                  changing journey. We welcome all students and offer a variety
                  of yoga, meditations, training, courses, workshops and other
                  healing modalities to support and deepen your practice. Yoga
                  Anga offers many physical and mental health and wellness
                  programs, with a curriculum designed to meet the needs of
                  everyone.
                </p>
              </div>
              <div className='aboutItem'>
                <Image
                  src='/aboutUs.jpeg'
                  width='420px'
                  height='450px'
                  alt='aboutUs'
                />
              </div>
            </div>
            <div className='about-rows' style={{ marginTop: '50px' }}>
              <div className='aboutItem'>
                <Image
                  src='/homePage2Image.jpeg'
                  width='380px'
                  height='420px'
                  alt='logo'
                />
              </div>
              <div>
                <h1>Our Purpose</h1>
                <p style={{ lineHeight: '2em', textAlign: 'left' }}>
                  To offer inclusive wellbeing classes for real people, wherever
                  and whenever, with live and online yoga classes We provide
                  services at your Home, Garden, Bunglow, Hospitals, Health
                  club, GYM, Society & Companies.
                </p>
              </div>
            </div>
          </div>
        </section>
        <div
          className='about commonWidth'
          style={{ marginTop: '10px', width: '81%' }}
        >
          <div class='slideshow-container'>
            <div class='mySlides'>
              <q>
                Are you looking for best yoga class in Ahmedabad, just go for
                Yoga Anga without a second thought as you will definitely love
                it. Excellent place to transform your body towards healthy life.
                Perfect ambience which will pull you to come daily. You will get
                the professional guide for perfect yoga postures with personal
                assistance.
              </q>
              <p class='author'>- Ruhi Patel</p>
            </div>
            <div class='mySlides'>
              <q>
                she knows work related work and how one can relax with yoga and
                different meditation techniques .her teaching method is very
                good . She is the best yoga teacher in the town
              </q>
              <p class='author'>- Avni P.</p>
            </div>
            <div class='mySlides'>
              <q>
                I recommend that you try out Jinkal ‘s classes. She’s highly
                knowledgeable, inviting, compassionate, and has a sense of
                humor. A true inclusive yoga experience regardless of your
                level. Can’t wait to go again soon.
              </q>
              <p class='author'>- Deepika parmar</p>
            </div>

            <div class='mySlides'>
              <q>
                I enjoyed the every session and learned a lot from it. Iam very
                much thankful for Jinkal mam.She teaches with heart and patience
                that inspire me in learning yoga always teach variations of the
                poses and explain what each pose is for, and even the spiritual
                and energetic part of the poses. Every day practicing yoga it
                hlep me so much with the lower back pain issues that i used to
                have.Thank you for your support and love.
              </q>
              <p class='author'>- Shalini H.</p>
            </div>

            <div class='mySlides'>
              <q>
                The yoga classes are excellent ! I have joined the online
                classes and have seen increased flexibility throughout my body.
                Jinkal is an excellent yoga teacher and I look forward every
                morning to join her classes!
              </q>
              <p class='author'>- Ravji Ahir</p>
            </div>
            <div class='mySlides'>
              <q>
                I did pregnancy yoga through out my pregnancy with Yoga Anga. I
                could not be more happier about my decision. Such personal
                guidance and care . It was an amazing experience. I would
                recommend Yoga Anga any day to everyone.
              </q>
              <p class='author'>- Saloni Parikh</p>
            </div>

            <a class='prev' onClick={() => plusSlides(-1)}>
              ❮
            </a>
            <a class='next' onClick={() => plusSlides(1)}>
              ❯
            </a>
          </div>

          <div class='dot-container'>
            <span class='dot' onClick={() => currentSlide(1)}></span>
            <span class='dot' onClick={() => currentSlide(2)}></span>
            <span class='dot' onClick={() => currentSlide(3)}></span>
            <span class='dot' onClick={() => currentSlide(4)}></span>
            <span class='dot' onClick={() => currentSlide(5)}></span>
            <span class='dot' onClick={() => currentSlide(6)}></span>
          </div>
        </div>
        <Footer />
      </Media>
      <Media lessThan='customSizeFormobile'>
        <CustomNav />
        <section className='header' id='home'>
          <div className='text-box'>
            <h1>YOGA ANGA</h1>
            <p style={{ lineHeight: '2' }}>
              Welcome to Yoga Anga, where we invite you to explore and deepen
              your yoga practice, discover your own magic, heal, recharge,
              relax, learn and thrive! We’re dedicated to making yoga available
              to everyone regardless of their size, shape, or bank accounts.
              Join our positive, diverse community today.
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
        <div className='center' style={{ marginTop: '100px' }}>
          <Grid divided='vertically'>
            <Grid.Row columns={1}>
              <Grid.Column>
                <h1 style={{ textAlign: 'center' }}>About Us</h1>
                <p style={{ lineHeight: '2em', textAlign: 'left' }}>
                  In today’s fast-paced world, our lifestyle hampers our body’s
                  well-being by accumulating toxins. This results in creation of
                  stress, diseases and illnesses, which deteriorates one’s
                  health. This is where the Yoga Anga comes into effect and has
                  proven to be important for our body and mind. Yoga Anga is a
                  sacred haven for everyone who wants to embark on a life
                  changing journey. We welcome all students and offer a variety
                  of yoga, meditations, training, courses, workshops and other
                  healing modalities to support and deepen your practice. Yoga
                  Anga offers many physical and mental health and wellness
                  programs, with a curriculum designed to meet the needs of
                  everyone.
                </p>
              </Grid.Column>
              <Grid.Column>
                <img
                  src='/aboutUs.jpeg'
                  style={{ width: 'inherit' }}
                  alt='aboutUs'
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid divided='vertically'>
            <Grid.Row columns={1}>
              <Grid.Column>
                <h1 style={{ textAlign: 'center' }}>Our Purpose</h1>
                <p style={{ lineHeight: '2em', textAlign: 'left' }}>
                  To offer inclusive wellbeing classes for real people, wherever
                  and whenever, with live and online yoga classes We provide
                  services at your Home, Garden, Bunglow, Hospitals, Health
                  club, GYM, Society & Companies.
                </p>
              </Grid.Column>
              <Grid.Column>
                <img
                  src='/homePage2Image.jpeg'
                  style={{ width: 'inherit' }}
                  alt='aboutUs'
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
        <div
          className='about commonWidth'
          style={{ marginTop: '10px', width: '90%' }}
        >
          <div class='slideshow-container'>
            <div class='mySlides'>
              <q>
                Are you looking for best yoga class in Ahmedabad, just go for
                Yoga Anga without a second thought as you will definitely love
                it. Excellent place to transform your body towards healthy life.
                Perfect ambience which will pull you to come daily. You will get
                the professional guide for perfect yoga postures with personal
                assistance.
              </q>
              <p class='author'>- Ruhi Patel</p>
            </div>
            <div class='mySlides'>
              <q>
                she knows work related work and how one can relax with yoga and
                different meditation techniques .her teaching method is very
                good . She is the best yoga teacher in the town
              </q>
              <p class='author'>- Avni P.</p>
            </div>
            <div class='mySlides'>
              <q>
                I recommend that you try out Jinkal ‘s classes. She’s highly
                knowledgeable, inviting, compassionate, and has a sense of
                humor. A true inclusive yoga experience regardless of your
                level. Can’t wait to go again soon.
              </q>
              <p class='author'>- Deepika parmar</p>
            </div>

            <div class='mySlides'>
              <q>
                I enjoyed the every session and learned a lot from it. Iam very
                much thankful for Jinkal mam.She teaches with heart and patience
                that inspire me in learning yoga always teach variations of the
                poses and explain what each pose is for, and even the spiritual
                and energetic part of the poses. Every day practicing yoga it
                hlep me so much with the lower back pain issues that i used to
                have.Thank you for your support and love.
              </q>
              <p class='author'>- Shalini H.</p>
            </div>

            <div class='mySlides'>
              <q>
                The yoga classes are excellent ! I have joined the online
                classes and have seen increased flexibility throughout my body.
                Jinkal is an excellent yoga teacher and I look forward every
                morning to join her classes!
              </q>
              <p class='author'>- Ravji Ahir</p>
            </div>
            <div class='mySlides'>
              <q>
                I did pregnancy yoga through out my pregnancy with Yoga Anga. I
                could not be more happier about my decision. Such personal
                guidance and care . It was an amazing experience. I would
                recommend Yoga Anga any day to everyone.
              </q>
              <p class='author'>- Saloni Parikh</p>
            </div>

            <a class='prev' onClick={() => plusSlides(-1)}>
              ❮
            </a>
            <a class='next' onClick={() => plusSlides(1)}>
              ❯
            </a>
          </div>

          <div class='dot-container'>
            <span class='dot' onClick={() => currentSlide(1)}></span>
            <span class='dot' onClick={() => currentSlide(2)}></span>
            <span class='dot' onClick={() => currentSlide(3)}></span>
            <span class='dot' onClick={() => currentSlide(4)}></span>
            <span class='dot' onClick={() => currentSlide(5)}></span>
            <span class='dot' onClick={() => currentSlide(6)}></span>
          </div>
        </div>
        <Footer />
      </Media>
    </div>
  );
};

export default Home;
