import React, { useState, useEffect } from 'react';
import { Media } from '../lib/Media';

const ReviewCarousel = () => {
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
    if (slides && dots) {
      slides[slideIndex - 1].style.display = 'block';
      dots[slideIndex - 1].className += ' active';
    }
  }

  return (
    <>
      <Media greaterThanOrEqual='customSizeFormobile'>
        <div
          className='about commonWidth'
          style={{ marginTop: '10px', width: '81%' }}
        >
          {' '}
          <div className='slideshow-container'>
            <div className='mySlides'>
              <q>
                Are you looking for best yoga class in Ahmedabad, just go for
                Yoga Anga without a second thought as you will definitely love
                it. Excellent place to transform your body towards healthy life.
                Perfect ambience which will pull you to come daily. You will get
                the professional guide for perfect yoga postures with personal
                assistance.
              </q>
              <p className='author'>- Ruhi Patel</p>
            </div>
            <div className='mySlides'>
              <q>
                she knows work related work and how one can relax with yoga and
                different meditation techniques .her teaching method is very
                good . She is the best yoga teacher in the town
              </q>
              <p className='author'>- Avni P.</p>
            </div>
            <div className='mySlides'>
              <q>
                I recommend that you try out Jinkal ‘s classes. She’s highly
                knowledgeable, inviting, compassionate, and has a sense of
                humor. A true inclusive yoga experience regardless of your
                level. Can’t wait to go again soon.
              </q>
              <p className='author'>- Deepika parmar</p>
            </div>

            <div className='mySlides'>
              <q>
                I enjoyed the every session and learned a lot from it. Iam very
                much thankful for Jinkal mam.She teaches with heart and patience
                that inspire me in learning yoga always teach variations of the
                poses and explain what each pose is for, and even the spiritual
                and energetic part of the poses. Every day practicing yoga it
                hlep me so much with the lower back pain issues that i used to
                have.Thank you for your support and love.
              </q>
              <p className='author'>- Shalini H.</p>
            </div>

            <div className='mySlides'>
              <q>
                The yoga classes are excellent ! I have joined the online
                classes and have seen increased flexibility throughout my body.
                Jinkal is an excellent yoga teacher and I look forward every
                morning to join her classes!
              </q>
              <p className='author'>- Ravji Ahir</p>
            </div>
            <div className='mySlides'>
              <q>
                I did pregnancy yoga through out my pregnancy with Yoga Anga. I
                could not be more happier about my decision. Such personal
                guidance and care . It was an amazing experience. I would
                recommend Yoga Anga any day to everyone.
              </q>
              <p className='author'>- Saloni Parikh</p>
            </div>

            <a className='prev' onClick={() => plusSlides(-1)}>
              ❮
            </a>
            <a className='next' onClick={() => plusSlides(1)}>
              ❯
            </a>
          </div>
          <div className='dot-container'>
            <span className='dot' onClick={() => currentSlide(1)}></span>
            <span className='dot' onClick={() => currentSlide(2)}></span>
            <span className='dot' onClick={() => currentSlide(3)}></span>
            <span className='dot' onClick={() => currentSlide(4)}></span>
            <span className='dot' onClick={() => currentSlide(5)}></span>
            <span className='dot' onClick={() => currentSlide(6)}></span>
          </div>
        </div>
      </Media>

      <Media lessThan='customSizeFormobile'>
        <div
          className='mobile-center-testimonials'
          style={{ marginTop: '70px' }}
        >
          <div className='slideshow-container'>
            <div className='mySlides'>
              <q>
                Are you looking for best yoga class in Ahmedabad, just go for
                Yoga Anga without a second thought as you will definitely love
                it. Excellent place to transform your body towards healthy life.
                Perfect ambience which will pull you to come daily. You will get
                the professional guide for perfect yoga postures with personal
                assistance.
              </q>
              <p className='author'>- Ruhi Patel</p>
            </div>
            <div className='mySlides'>
              <q>
                she knows work related work and how one can relax with yoga and
                different meditation techniques .her teaching method is very
                good . She is the best yoga teacher in the town
              </q>
              <p className='author'>- Avni P.</p>
            </div>
            <div className='mySlides'>
              <q>
                I recommend that you try out Jinkal ‘s classes. She’s highly
                knowledgeable, inviting, compassionate, and has a sense of
                humor. A true inclusive yoga experience regardless of your
                level. Can’t wait to go again soon.
              </q>
              <p className='author'>- Deepika parmar</p>
            </div>

            <div className='mySlides'>
              <q>
                I enjoyed the every session and learned a lot from it. Iam very
                much thankful for Jinkal mam.She teaches with heart and patience
                that inspire me in learning yoga always teach variations of the
                poses and explain what each pose is for, and even the spiritual
                and energetic part of the poses. Every day practicing yoga it
                hlep me so much with the lower back pain issues that i used to
                have.Thank you for your support and love.
              </q>
              <p className='author'>- Shalini H.</p>
            </div>

            <div className='mySlides'>
              <q>
                The yoga classes are excellent ! I have joined the online
                classes and have seen increased flexibility throughout my body.
                Jinkal is an excellent yoga teacher and I look forward every
                morning to join her classes!
              </q>
              <p className='author'>- Ravji Ahir</p>
            </div>
            <div className='mySlides'>
              <q>
                I did pregnancy yoga through out my pregnancy with Yoga Anga. I
                could not be more happier about my decision. Such personal
                guidance and care . It was an amazing experience. I would
                recommend Yoga Anga any day to everyone.
              </q>
              <p className='author'>- Saloni Parikh</p>
            </div>

            <a className='prev' onClick={() => plusSlides(-1)}>
              ❮
            </a>
            <a className='next' onClick={() => plusSlides(1)}>
              ❯
            </a>
          </div>

          <div className='dot-container'>
            <span className='dot' onClick={() => currentSlide(1)}></span>
            <span className='dot' onClick={() => currentSlide(2)}></span>
            <span className='dot' onClick={() => currentSlide(3)}></span>
            <span className='dot' onClick={() => currentSlide(4)}></span>
            <span className='dot' onClick={() => currentSlide(5)}></span>
            <span className='dot' onClick={() => currentSlide(6)}></span>
          </div>
        </div>
      </Media>
    </>
  );
};

export default ReviewCarousel;
