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
      </Media>

      <Media lessThan='customSizeFormobile'>
        <div
          className='mobile-center-testimonials'
          style={{ marginTop: '70px' }}
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
      </Media>
    </>
  );
};

export default ReviewCarousel;
