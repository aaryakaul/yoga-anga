import React from 'react';
import { Grid } from 'semantic-ui-react';
import Image from 'next/image';
import { Media } from '../lib/Media';
import MobileService from './MobileService';
import { useRouter } from 'next/router';

const Services = () => {
  const router = useRouter();
  return (
    <>
      <Media greaterThanOrEqual='customSizemobile'>
        <div
          className='services-container'
          style={{ maxWidth: '1024px', margin: 'auto', marginTop: 100 }}
        >
          <Grid columns='two' padded>
            <Grid.Row
              style={{ paddingTop: 0, paddingBottom: 0, cursor: 'pointer' }}
              onClick={() => router.push('services/corporate-yoga')}
            >
              <Grid.Column>
                <Image src='/corporateyoga.jpeg' layout='fill' alt='aboutUs' />
              </Grid.Column>
              <Grid.Column style={{ padding: 25 }}>
                <h1 style={{ textAlign: 'left' }}>CORPORATE YOGA</h1>
                <p style={{ lineHeight: '1.6' }}>
                  Yoga is not just about being able to perform complicated poses
                  and movements. It is a holistic approach to physical and
                  mental health, as well as a person's well-being and personal
                  growth. Corporate Yoga is the extended concept of working
                  peacefully in the midst of a hectic corporate environment.
                  depression is the most disabling illness for the corporate
                  sector, second only to cardio-vascular diseases.{' '}
                </p>
                <p style={{ lineHeight: '1.6' }}>
                  Both your business and your employees will benefit by
                  incorporating yoga into your daily work routine and your
                  wellness program. Fortunately, stress need not cost you so
                  dearly. There is a way to maintain a level of graceful
                  productivity within the four walls of an office and manage
                  stress effectively. It’s called Corporate Yoga.
                </p>
                <p style={{ lineHeight: '1.6' }}>
                  We guarantee that our yoga class will leave you and your
                  co-workers refreshed, re-energize ed and ready to deal with
                  workplace stress.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid columns='two' padded>
            <Grid.Row
              style={{ paddingTop: 0, paddingBottom: 0, cursor: 'pointer' }}
              onClick={() => router.push('services/pregnancy-yoga')}
            >
              <Grid.Column style={{ padding: 25 }}>
                <h1 style={{ textAlign: 'left' }}>PREGNANCY YOGA</h1>
                <p style={{ lineHeight: '1.6' }}>
                  Prenatal yoga can be a great way to prepare for childbirth. If
                  you're pregnant and looking for ways to relax or stay fit, you
                  might be considering prenatal yoga. But did you know that
                  prenatal yoga might also help you prepare for labor and
                  promote your baby's health?
                </p>
                <p style={{ lineHeight: '1.6' }}>
                  From your physical body to your emotional state, prenatal yoga
                  is a key ingredient to a healthy, happy pregnancy.
                </p>
                <p style={{ lineHeight: '1.6' }}>
                  <b style={{ fontWeight: 'bold' }}>
                    Amazing Benefits of Prenatal yoga:
                  </b>
                  <ol style={{ textAlign: 'left', marginLeft: '-25px' }}>
                    <li>Supports Your Changing Body.</li>
                    <li>Tones Important Muscle Groups.</li>
                    <li>Prepares for Labor and Delivery.</li>
                    <li>Promotes Connection With Your Baby.</li>
                    <li>Provides Relief From Common Pregnancy Complaints.</li>
                    <li>Work Around Your Schedule.</li>
                    <li>Gives You a Healthier Pregnancy.</li>
                  </ol>
                </p>
              </Grid.Column>
              <Grid.Column>
                <Image src='/pregnancy.jpeg' layout='fill' alt='aboutUs' />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid columns='two' padded>
            <Grid.Row
              style={{ paddingTop: 0, paddingBottom: 0, cursor: 'pointer' }}
              onClick={() => router.push('services/meditation-yoga')}
            >
              <Grid.Column>
                <Image src='/meditation.jpeg' layout='fill' alt='aboutUs' />
              </Grid.Column>
              <Grid.Column style={{ padding: 25 }}>
                <h1 style={{ textAlign: 'left' }}>MEDITATION</h1>
                <p style={{ lineHeight: '1.6' }}>
                  Meditation is the habitual process of training your mind to
                  focus and redirect your thoughts.The popularity of meditation
                  is increasing as more people discover its many health
                  benefits. If stress has you anxious, tense and worried,
                  consider trying meditation.{' '}
                </p>
                <p>
                  Spending even a few minutes in meditation can restore your
                  calm and inner peace
                </p>

                <p style={{ lineHeight: '1.6' }}>
                  <b style={{ fontWeight: 'bold' }}>
                    Benefits of meditation can include:
                  </b>
                  <ol style={{ textAlign: 'left', marginLeft: '-25px' }}>
                    <li>Gaining a new perspective on stressful situations.</li>
                    <li>Building skills to manage your stress.</li>
                    <li>Increasing self-awareness.</li>
                    <li>Focusing on the present.</li>
                    <li>Reducing negative emotions</li>
                    <li>Increasing imagination and creativity.</li>
                    <li>Increasing patience and tolerance.</li>
                  </ol>
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid columns='two' padded>
            <Grid.Row
              style={{ paddingTop: 0, paddingBottom: 0, cursor: 'pointer' }}
              onClick={() => router.push('services/hatha-yoga')}
            >
              <Grid.Column style={{ padding: 25 }}>
                <h1 style={{ textAlign: 'left' }}>HATHA YOGA</h1>
                <p style={{ lineHeight: '1.6' }}>
                  Hatha Yoga concentrates on physical health and mental
                  well-being. Hatha Yoga comprises of asanas (physical postures)
                  , b reat hing techniques and meditation with the goal of
                  bringing about a sound, healthy body and a clear, peaceful
                  mind. It concentrates on the third (Asana) and fourth
                  (Pranayama) limb in the Eight Limbs of Yoga.
                </p>
                <p>
                  Hatha Yoga focuses on breathing and postures which are held
                  for a while to benefit from their healing power. Because Hatha
                  yoga’s pace is slow and gentle, it is an ideal starting place
                  for people who are new to yoga.
                </p>
              </Grid.Column>
              <Grid.Column>
                <Image src='/hathyoga.jpeg' layout='fill' alt='aboutUs' />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid columns='two' padded>
            <Grid.Row
              style={{ paddingTop: 0, paddingBottom: 0, cursor: 'pointer' }}
              onClick={() => router.push('services/private-yoga')}
            >
              <Grid.Column>
                <Image
                  src='/privateyogaclasses.jpg'
                  layout='fill'
                  alt='aboutUs'
                />
              </Grid.Column>
              <Grid.Column style={{ padding: 25 }}>
                <h1 style={{ textAlign: 'left' }}>PRIVATE YOGA CLASSES</h1>
                <p style={{ lineHeight: '1.6' }}>
                  We teach Yoga at your doorstep. You require guidance to
                  practice Yoga at your home. Private yoga class helps to relea
                  se dormant energy & revitalizes the whole being ensuring the
                  body's vitality and the minds tranquility.
                </p>
                <p style={{ lineHeight: '1.6' }}>
                  <b style={{ fontWeight: 'bold' }}>
                    Benefits of Private yoga classes:
                  </b>
                  <ol style={{ textAlign: 'left', marginLeft: '-25px' }}>
                    <li>
                      Gain Initial Experience In A Safer Environment For
                      Beginners.
                    </li>
                    <li>Feel More Comfortable And Less Self-Conscious.</li>
                    <li>Focus On Personal Goals & Needs.</li>
                    <li>
                      Reduce Your Anxiety Without Triggering Other Stressors.
                    </li>
                    <li>Be Able To Practice Yoga Anywhere, Even at Work</li>
                    <li>Work Around Your Schedule.</li>
                    <li>Advance Your Yoga Skills With Pre-Determined Goals.</li>
                    <li>
                      Tailor The Class To Your Limitations, Injuries, or Health
                      Concerns Book Your Private Yoga Class Today.
                    </li>
                  </ol>
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid columns='two' padded>
            <Grid.Row
              style={{ paddingTop: 0, paddingBottom: 0, cursor: 'pointer' }}
              onClick={() => router.push('services/kids-yoga')}
            >
              <Grid.Column style={{ padding: 25 }}>
                <h1 style={{ textAlign: 'left' }}>KIDS YOGA</h1>
                <p style={{ lineHeight: '1.6' }}>
                  Yoga is not just for adults! In fact, it can give children
                  very important life skills that can help them succeed in the
                  world.
                </p>
                <p style={{ lineHeight: '1.6' }}>
                  <b style={{ fontWeight: 'bold' }}>
                    Some Amazing Benefits of kids yoga:
                  </b>
                  <ol style={{ textAlign: 'left', marginLeft: '-25px' }}>
                    <li>Yoga helps children manage their anxiety.</li>
                    <li>Yoga improves children’s emotional regulation.</li>
                    <li>Yoga boosts children’s self-esteem.</li>{' '}
                    <li>
                      Yoga increases children’s body awareness and mindfulness.
                    </li>
                    <li> Yoga enhances children’s concentration and memory.</li>
                    <li>
                      Yoga develops children’s strength and flexibility Yoga
                      teaches discipline and reduces impulsivity
                    </li>
                  </ol>
                </p>
              </Grid.Column>
              <Grid.Column>
                <Image src='/kidsyoga.jpg' layout='fill' alt='aboutUs' />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid columns='two' padded>
            <Grid.Row
              style={{ paddingTop: 0, paddingBottom: 0, cursor: 'pointer' }}
              onClick={() => router.push('services/pranayama-yoga')}
            >
              <Grid.Column>
                <Image src='/pranayama.jpg' layout='fill' alt='aboutUs' />
              </Grid.Column>
              <Grid.Column style={{ padding: 25 }}>
                <h1 style={{ textAlign: 'left' }}>PRANAYAMA</h1>
                <p style={{ lineHeight: '1.6' }}>
                  Today, more and more people from different walks of life are
                  opting for Yoga. Yoga is more than asanas. It’s a complete
                  lifestyle that promotes holistic health. Prana is the vital
                  component that sustains life. “Pran” mean bio-energy and
                  “ayama” means to control or regulation. There are various
                  types of Pranayama, and their benefits in daily life are
                  unlimited.
                </p>
                <p style={{ lineHeight: '1.6' }}>
                  <b style={{ fontWeight: 'bold' }}>
                    Benefits of pranayama can include:
                  </b>
                  <ol style={{ textAlign: 'left', marginLeft: '-25px' }}>
                    <li>Clears the mind.</li>
                    <li>Improves mindfulness.</li>
                    <li>Strengthens your lungs.</li>
                    <li>Improves sleep quality.</li>
                  </ol>
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid columns='two' padded>
            <Grid.Row
              style={{ paddingTop: 0, paddingBottom: 0, cursor: 'pointer' }}
              onClick={() => router.push('services/beginners-yoga')}
            >
              <Grid.Column style={{ padding: 25 }}>
                <h1 style={{ textAlign: 'left' }}>YOGA FOR BEGINNERS</h1>
                <p style={{ lineHeight: '1.6' }}>
                  Our Yoga for Beginners classes is just what you need to ignite
                  or deepen your passion for yoga. Whether you are a complete
                  begi nner, or have tried yoga in the past and are ready to
                  really get going, these classes will pave the way.
                </p>
                <p style={{ lineHeight: '1.6' }}>
                  These beginners class is designed for everyone and for
                  everybody, so there’s no need to be wary if you have no
                  previous yoga experience.
                </p>
              </Grid.Column>
              <Grid.Column>
                <Image
                  src='/yogaforbeginners.jpg'
                  layout='fill'
                  alt='aboutUs'
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid columns='two' padded>
            <Grid.Row
              style={{ paddingTop: 0, paddingBottom: 0, cursor: 'pointer' }}
              onClick={() => router.push('services/online-yoga')}
            >
              <Grid.Column>
                <Image src='/onlineyoga.jpg' layout='fill' alt='aboutUs' />
              </Grid.Column>
              <Grid.Column style={{ padding: 25 }}>
                <h1 style={{ textAlign: 'left' }}>ONLINE YOGA CLASSES</h1>
                <p style={{ lineHeight: '1.6' }}>
                  Yoga allows you to select the time of the day that suits you
                  to practice. Whether you’re a morning bird or a night owl, the
                  ability to roll out your mat at any given time offers a great
                  amount of freedom and allows you to commit to your practice in
                  a way that is simple and easy.
                </p>
                <p style={{ lineHeight: '1.6' }}>
                  Online yoga offers an abundance of options and solutions for
                  the modern-day yogi. Share the many physical and mental
                  benefits of Yoga with your family, friends, coworkers or
                  neighbors.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid columns='two' padded>
            <Grid.Row
              style={{ paddingTop: 0, paddingBottom: 0, cursor: 'pointer' }}
              onClick={() => router.push('services/zumba-yoga')}
            >
              <Grid.Column style={{ padding: 25 }}>
                <h1 style={{ textAlign: 'left' }}>ZUMBA</h1>
                <p style={{ lineHeight: '1.6' }}>
                  Dance fitness classes that are fun, energetic, and make you
                  feel amazing.<b> Everybody and every body!</b>
                </p>
                <p style={{ lineHeight: '1.6' }}>
                  Zumba is a fun, high-energy workout experience that keeps you
                  excited to exercise—and coming back for more.
                </p>
                <p style={{ lineHeight: '1.6' }}>
                  <b style={{ fontWeight: 'bold' }}>
                    Amazing health benefits of Zumba:
                  </b>
                  <ol style={{ textAlign: 'left', marginLeft: '-25px' }}>
                    <li>It’s fun.</li>
                    <li>
                      Great for weight loss. Zumba is a powerful exercise with a
                      600 to 1,000-calorie burn in just an hour.
                    </li>
                    <li>Tones your entire body.</li>
                    <li>Boosts your heart health.</li>
                    <li>Helps you de-stress. </li>
                    <li>Improves coordination.</li>
                    <li>Makes you happy.</li>
                  </ol>
                </p>
              </Grid.Column>
              <Grid.Column>
                <Image src='/zumba.jpg' layout='fill' alt='aboutUs' />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </Media>
      <Media between={['customSizeFormobile', 'customSizemobile']}>
        <div
          style={{ marginLeft: '10px', marginRight: '10px', marginTop: 100 }}
        >
          <Grid columns='two' padded>
            <Grid.Row
              style={{ paddingTop: 0, paddingBottom: 0, cursor: 'pointer' }}
              onClick={() => router.push('services/corporate-yoga')}
            >
              <Grid.Column>
                <Image src='/corporateyoga.jpeg' layout='fill' alt='aboutUs' />
              </Grid.Column>
              <Grid.Column style={{ padding: 25 }}>
                <h1 style={{ textAlign: 'left' }}>CORPORATE YOGA</h1>
                <p style={{ lineHeight: '1.6' }}>
                  Yoga is not just about being able to perform complicated poses
                  and movements. It is a holistic approach to physical and
                  mental health, as well as a person's well-being and personal
                  growth. Corporate Yoga is the extended concept of working
                  peacefully in the midst of a hectic corporate environment.
                  depression is the most disabling illness for the corporate
                  sector, second only to cardio-vascular diseases.{' '}
                </p>
                <p style={{ lineHeight: '1.6' }}>
                  Both your business and your employees will benefit by
                  incorporating yoga into your daily work routine and your
                  wellness program. Fortunately, stress need not cost you so
                  dearly. There is a way to maintain a level of graceful
                  productivity within the four walls of an office and manage
                  stress effectively. It’s called Corporate Yoga.
                </p>
                <p style={{ lineHeight: '1.6' }}>
                  We guarantee that our yoga class will leave you and your
                  co-workers refreshed, re-energize ed and ready to deal with
                  workplace stress.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid columns='two' padded>
            <Grid.Row
              style={{ paddingTop: 0, paddingBottom: 0, cursor: 'pointer' }}
              onClick={() => router.push('services/pregnancy-yoga')}
            >
              <Grid.Column style={{ padding: 25 }}>
                <h1 style={{ textAlign: 'left' }}>PREGNANCY YOGA</h1>
                <p style={{ lineHeight: '1.6' }}>
                  Prenatal yoga can be a great way to prepare for childbirth. If
                  you're pregnant and looking for ways to relax or stay fit, you
                  might be considering prenatal yoga. But did you know that
                  prenatal yoga might also help you prepare for labor and
                  promote your baby's health?
                </p>
                <p style={{ lineHeight: '1.6' }}>
                  From your physical body to your emotional state, prenatal yoga
                  is a key ingredient to a healthy, happy pregnancy.
                </p>
                <p style={{ lineHeight: '1.6' }}>
                  <b style={{ fontWeight: 'bold' }}>
                    Amazing Benefits of Prenatal yoga:
                  </b>
                  <ol style={{ textAlign: 'left', marginLeft: '-25px' }}>
                    <li>Supports Your Changing Body.</li>
                    <li>Tones Important Muscle Groups.</li>
                    <li>Prepares for Labor and Delivery.</li>
                    <li>Promotes Connection With Your Baby.</li>
                    <li>Provides Relief From Common Pregnancy Complaints.</li>
                    <li>Work Around Your Schedule.</li>
                    <li>Gives You a Healthier Pregnancy.</li>
                  </ol>
                </p>
              </Grid.Column>
              <Grid.Column>
                <Image src='/pregnancy.jpeg' layout='fill' alt='aboutUs' />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid columns='two' padded>
            <Grid.Row
              style={{ paddingTop: 0, paddingBottom: 0, cursor: 'pointer' }}
              onClick={() => router.push('services/meditation-yoga')}
            >
              <Grid.Column>
                <Image src='/meditation.jpeg' layout='fill' alt='aboutUs' />
              </Grid.Column>
              <Grid.Column style={{ padding: 25 }}>
                <h1 style={{ textAlign: 'left' }}>MEDITATION</h1>
                <p style={{ lineHeight: '1.6' }}>
                  Meditation is the habitual process of training your mind to
                  focus and redirect your thoughts.The popularity of meditation
                  is increasing as more people discover its many health
                  benefits. If stress has you anxious, tense and worried,
                  consider trying meditation.{' '}
                </p>
                <p>
                  Spending even a few minutes in meditation can restore your
                  calm and inner peace
                </p>

                <p style={{ lineHeight: '1.6' }}>
                  <b style={{ fontWeight: 'bold' }}>
                    Benefits of meditation can include:
                  </b>
                  <ol style={{ textAlign: 'left', marginLeft: '-25px' }}>
                    <li>Gaining a new perspective on stressful situations.</li>
                    <li>Building skills to manage your stress.</li>
                    <li>Increasing self-awareness.</li>
                    <li>Focusing on the present.</li>
                    <li>Reducing negative emotions</li>
                    <li>Increasing imagination and creativity.</li>
                    <li>Increasing patience and tolerance.</li>
                  </ol>
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid columns='two' padded>
            <Grid.Row
              style={{ paddingTop: 0, paddingBottom: 0, cursor: 'pointer' }}
              onClick={() => router.push('services/hatha-yoga')}
            >
              <Grid.Column style={{ padding: 25 }}>
                <h1 style={{ textAlign: 'left' }}>HATHA YOGA</h1>
                <p style={{ lineHeight: '1.6' }}>
                  Hatha Yoga concentrates on physical health and mental
                  well-being. Hatha Yoga comprises of asanas (physical postures)
                  , b reat hing techniques and meditation with the goal of
                  bringing about a sound, healthy body and a clear, peaceful
                  mind. It concentrates on the third (Asana) and fourth
                  (Pranayama) limb in the Eight Limbs of Yoga.
                </p>
                <p>
                  Hatha Yoga focuses on breathing and postures which are held
                  for a while to benefit from their healing power. Because Hatha
                  yoga’s pace is slow and gentle, it is an ideal starting place
                  for people who are new to yoga.
                </p>
              </Grid.Column>
              <Grid.Column>
                <Image src='/hathyoga.jpeg' layout='fill' alt='aboutUs' />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid columns='two' padded>
            <Grid.Row
              style={{ paddingTop: 0, paddingBottom: 0, cursor: 'pointer' }}
              onClick={() => router.push('services/private-yoga')}
            >
              <Grid.Column>
                <Image
                  src='/privateyogaclasses.jpg'
                  layout='fill'
                  alt='aboutUs'
                />
              </Grid.Column>
              <Grid.Column style={{ padding: 25 }}>
                <h1 style={{ textAlign: 'left' }}>PRIVATE YOGA CLASSES</h1>
                <p style={{ lineHeight: '1.6' }}>
                  We teach Yoga at your doorstep. You require guidance to
                  practice Yoga at your home. Private yoga class helps to relea
                  se dormant energy & revitalizes the whole being ensuring the
                  body's vitality and the minds tranquility.
                </p>
                <p style={{ lineHeight: '1.6' }}>
                  <b style={{ fontWeight: 'bold' }}>
                    Benefits of Private yoga classes:
                  </b>
                  <ol style={{ textAlign: 'left', marginLeft: '-25px' }}>
                    <li>
                      Gain Initial Experience In A Safer Environment For
                      Beginners.
                    </li>
                    <li>Feel More Comfortable And Less Self-Conscious.</li>
                    <li>Focus On Personal Goals & Needs.</li>
                    <li>
                      Reduce Your Anxiety Without Triggering Other Stressors.
                    </li>
                    <li>Be Able To Practice Yoga Anywhere, Even at Work</li>
                    <li>Work Around Your Schedule.</li>
                    <li>Advance Your Yoga Skills With Pre-Determined Goals.</li>
                    <li>
                      Tailor The Class To Your Limitations, Injuries, or Health
                      Concerns Book Your Private Yoga Class Today.
                    </li>
                  </ol>
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid columns='two' padded>
            <Grid.Row
              style={{ paddingTop: 0, paddingBottom: 0, cursor: 'pointer' }}
              onClick={() => router.push('services/kids-yoga')}
            >
              <Grid.Column style={{ padding: 25 }}>
                <h1 style={{ textAlign: 'left' }}>KIDS YOGA</h1>
                <p style={{ lineHeight: '1.6' }}>
                  Yoga is not just for adults! In fact, it can give children
                  very important life skills that can help them succeed in the
                  world.
                </p>
                <p style={{ lineHeight: '1.6' }}>
                  <b style={{ fontWeight: 'bold' }}>
                    Some Amazing Benefits of kids yoga:
                  </b>
                  <ol style={{ textAlign: 'left', marginLeft: '-25px' }}>
                    <li>Yoga helps children manage their anxiety.</li>
                    <li>Yoga improves children’s emotional regulation.</li>
                    <li>Yoga boosts children’s self-esteem.</li>{' '}
                    <li>
                      Yoga increases children’s body awareness and mindfulness.
                    </li>
                    <li> Yoga enhances children’s concentration and memory.</li>
                    <li>
                      Yoga develops children’s strength and flexibility Yoga
                      teaches discipline and reduces impulsivity
                    </li>
                  </ol>
                </p>
              </Grid.Column>
              <Grid.Column>
                <Image src='/kidsyoga.jpg' layout='fill' alt='aboutUs' />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid columns='two' padded>
            <Grid.Row
              style={{ paddingTop: 0, paddingBottom: 0, cursor: 'pointer' }}
              onClick={() => router.push('services/pranayama-yoga')}
            >
              <Grid.Column>
                <Image src='/pranayama.jpg' layout='fill' alt='aboutUs' />
              </Grid.Column>
              <Grid.Column style={{ padding: 25 }}>
                <h1 style={{ textAlign: 'left' }}>PRANAYAMA</h1>
                <p style={{ lineHeight: '1.6' }}>
                  Today, more and more people from different walks of life are
                  opting for Yoga. Yoga is more than asanas. It’s a complete
                  lifestyle that promotes holistic health. Prana is the vital
                  component that sustains life. “Pran” mean bio-energy and
                  “ayama” means to control or regulation. There are various
                  types of Pranayama, and their benefits in daily life are
                  unlimited.
                </p>
                <p style={{ lineHeight: '1.6' }}>
                  <b style={{ fontWeight: 'bold' }}>
                    Benefits of pranayama can include:
                  </b>
                  <ol style={{ textAlign: 'left', marginLeft: '-25px' }}>
                    <li>Clears the mind.</li>
                    <li>Improves mindfulness.</li>
                    <li>Strengthens your lungs.</li>
                    <li>Improves sleep quality.</li>
                  </ol>
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid columns='two' padded>
            <Grid.Row
              style={{ paddingTop: 0, paddingBottom: 0, cursor: 'pointer' }}
              onClick={() => router.push('services/beginners-yoga')}
            >
              <Grid.Column style={{ padding: 25 }}>
                <h1 style={{ textAlign: 'left' }}>YOGA FOR BEGINNERS</h1>
                <p style={{ lineHeight: '1.6' }}>
                  Our Yoga for Beginners classes is just what you need to ignite
                  or deepen your passion for yoga. Whether you are a complete
                  begi nner, or have tried yoga in the past and are ready to
                  really get going, these classes will pave the way.
                </p>
                <p style={{ lineHeight: '1.6' }}>
                  These beginners class is designed for everyone and for
                  everybody, so there’s no need to be wary if you have no
                  previous yoga experience.
                </p>
              </Grid.Column>
              <Grid.Column>
                <Image
                  src='/yogaforbeginners.jpg'
                  layout='fill'
                  alt='aboutUs'
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid columns='two' padded>
            <Grid.Row
              style={{ paddingTop: 0, paddingBottom: 0, cursor: 'pointer' }}
              onClick={() => router.push('services/online-yoga')}
            >
              <Grid.Column>
                <Image src='/onlineyoga.jpg' layout='fill' alt='aboutUs' />
              </Grid.Column>
              <Grid.Column style={{ padding: 25 }}>
                <h1 style={{ textAlign: 'left' }}>ONLINE YOGA CLASSES</h1>
                <p style={{ lineHeight: '1.6' }}>
                  Yoga allows you to select the time of the day that suits you
                  to practice. Whether you’re a morning bird or a night owl, the
                  ability to roll out your mat at any given time offers a great
                  amount of freedom and allows you to commit to your practice in
                  a way that is simple and easy.
                </p>
                <p style={{ lineHeight: '1.6' }}>
                  Online yoga offers an abundance of options and solutions for
                  the modern-day yogi. Share the many physical and mental
                  benefits of Yoga with your family, friends, coworkers or
                  neighbors.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid columns='two' padded>
            <Grid.Row
              style={{ paddingTop: 0, paddingBottom: 0, cursor: 'pointer' }}
              onClick={() => router.push('services/zumba-yoga')}
            >
              <Grid.Column style={{ padding: 25 }}>
                <h1 style={{ textAlign: 'left' }}>ZUMBA</h1>
                <p style={{ lineHeight: '1.6' }}>
                  Dance fitness classes that are fun, energetic, and make you
                  feel amazing.<b> Everybody and every body!</b>
                </p>
                <p style={{ lineHeight: '1.6' }}>
                  Zumba is a fun, high-energy workout experience that keeps you
                  excited to exercise—and coming back for more.
                </p>
                <p style={{ lineHeight: '1.6' }}>
                  <b style={{ fontWeight: 'bold' }}>
                    Amazing health benefits of Zumba:
                  </b>
                  <ol style={{ textAlign: 'left', marginLeft: '-25px' }}>
                    <li>It’s fun.</li>
                    <li>
                      Great for weight loss. Zumba is a powerful exercise with a
                      600 to 1,000-calorie burn in just an hour.
                    </li>
                    <li>Tones your entire body.</li>
                    <li>Boosts your heart health.</li>
                    <li>Helps you de-stress. </li>
                    <li>Improves coordination.</li>
                    <li>Makes you happy.</li>
                  </ol>
                </p>
              </Grid.Column>
              <Grid.Column style={{ padding: '25px' }}>
                <Image src='/zumba.jpg' layout='fill' alt='aboutUs' />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </Media>
      <MobileService />
    </>
  );
};

export default Services;
