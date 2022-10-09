import Head from 'next/head';
import Image from 'next/image';

import Layout from '../components/layout';
import Button from '../components/button';

import DeepWideIcon from '../components/deepwideicons';

import arrowforward1 from '../public/arrow-forward 1.svg';
import arrowforward2 from '../public/arrow-forward 2.svg';

// icons for deep and wide
import bookopen1 from '../public/icons/book-outline 1.svg';
import bookopen2 from '../public/icons/book-outline 2.svg';
import walkicon1 from '../public/icons/walk-outline 1.svg';
import walkicon2 from '../public/icons/walk-outline 2.svg';
import peopleicon1 from '../public/icons/people-circle-outline 1.svg';
import peopleicon2 from '../public/icons/people-circle-outline 2.svg';
import micicon1 from '../public/icons/mic 1.svg';
import micicon2 from '../public/icons/mic 2.svg';
import eyeicon1 from '../public/icons/eye-outline 1.svg';
import eyeicon2 from '../public/icons/eye-outline 2.svg';
import sparklesicon1 from '../public/icons/sparkles-outline 1.svg';
import sparklesicon2 from '../public/icons/sparkles-outline 2.svg';
import bodyicon1 from '../public/icons/body-outline 1.svg';
import bodyicon2 from '../public/icons/body-outline 2.svg';
import earthicon1 from '../public/icons/earth-outline 1.svg';
import earthicon2 from '../public/icons/earth-outline 2.svg';

import styles from '../styles/home.module.css';
import { useEffect, useState } from 'react';

export default function Home() {
  useEffect(() => {
    var heroTitle = document.querySelector('.hero-title');
    var heroTitleOverlay = document.querySelector('.hero-title[data-overlay]');

    heroTitleOverlay.innerText = heroTitle.textContent;

    if (window.matchMedia('(max-width: 1130px)').matches) {
      setSmallScreenSize(true);
    }
    var canvas = document.getElementById('canv');
    var ctx = canvas.getContext('2d');

    var col = function (x, y, r, g, b) {
      ctx.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
      ctx.fillRect(x, y, 1, 1);
    };

    var R = function (x, y, t) {
      return Math.floor(176 + 80 * Math.cos((x * x - y * y) / 300 + t));
    };

    var G = function (x, y, t) {
      return Math.floor(
        176 +
          80 *
            Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300)
      );
    };

    var B = function (x, y, t) {
      return Math.floor(
        176 +
          80 *
            Math.sin(
              5 * Math.sin(t / 9) +
                ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100
            )
      );
    };

    var t = 0;

    var run = function () {
      for (var x = 0; x <= 35; x++) {
        for (var y = 0; y <= 35; y++) {
          col(x, y, R(x, y, t), G(x, y, t), B(x, y, t));
        }
      }
      t = t + 0.06;
      window.requestAnimationFrame(run);
    };

    run();
  }, []);

  const [smallScreenSize, setSmallScreenSize] = useState(false);
  const deepandwideicons = [
    {
      image1: bookopen1,
      image2: bookopen2,
      title: 'Daily Devotion',
      content:
        'Personal reding of the Bible everyday can make a huge difference.',
    },
    {
      image1: walkicon1,
      image2: walkicon2,
      title: 'Engagement In Service',
      content:
        'Using our various different gifts in service to God in the church',
    },
    {
      image1: peopleicon1,
      image2: peopleicon2,
      title: 'E - Groups',
      content: 'Fellowshiping together in our homes in small cell groups',
    },
    {
      image1: micicon1,
      image2: micicon2,
      title: 'Pulpit',
      content: 'Symbol of Sunday gatherings which helps you grow',
    },
    {
      image1: eyeicon1,
      image2: eyeicon2,
      title: 'Witness',
      content: 'Be witnesses of God’s word to a million people out there',
    },
    {
      image1: sparklesicon1,
      image2: sparklesicon2,
      title: 'Impact',
      content: 'Impacting the lives of the around us wherever we go',
    },
    {
      image1: bodyicon1,
      image2: bodyicon2,
      title: 'Disciple',
      content:
        'Disciple 100,000 people outside of chapel into spiritual maturity.',
    },
    {
      image1: earthicon1,
      image2: earthicon2,
      title: 'Evangelise',
      content: 'Establish and plant more churches.',
    },
  ];

  return (
    <Layout>
      <div>
        <Head>
          <title>Trinity Chapel Muranga</title>
          <meta name="description" content="Audaciously Impacting Lives" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <header className={styles.header}>
          <div className={styles.canvas_container}>
            <canvas
              style={{ width: '100%', height: '100%' }}
              id="canv"
              width="32"
              height="32"
            ></canvas>
          </div>
          <div className={`${styles.hero_title__container}`}>
            <h1 className={`${styles.hero_title} hero-title`}>
              Audaciously Impacting Lives
            </h1>
            <span
              aria-hidden="true"
              className={`${styles.hero_title} hero-title`}
              data-overlay
            ></span>
          </div>
          <div className={styles.header_container}>
            <div className={styles.header_content}>
              <p className={styles.header_content__p}>
                <span>
                  Trinity Chapel Murang’a is a church located in Muranga, at
                  Runo{' '}
                </span>
                Arcade. Our mission is to Audaciously Impact Lives and our
                vision is to Grow DEEP to reach WIDE. Come worship with us every
                Sunday from 10:00 am to 12:00 noon.
              </p>
            </div>
            <div className={styles.call_to_action}>
              <div className={styles.sermons_button}>
                <Button theme={'dark'} link={'/sermons'}>
                  <span>Check Our Sermons</span>
                  <span className="arrowforward">
                    <Image src={arrowforward2} alt="arrow forward" />
                  </span>
                </Button>
              </div>
              <div className={styles.about_us__button}>
                <Button link={'/about-us'}>
                  <span>About Us</span>
                  <span className="arrowforward">
                    <Image src={arrowforward1} alt="arrow forward" />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </header>
        <div className={styles.video_container}>
          <video
            className={styles.video}
            preload="metadata"
            src="/worship-video.mp4"
            controls
            autoPlay
            muted
            loop
          />
        </div>
        <section className={styles.deep_and_wide__container}>
          <span className="caption">Vision</span>
          <h6>
            Growing <span className={'orange-font'}>deep</span> to reach
            <span className={'orange-font'}> wide</span>
          </h6>
          <article className={styles.about_us_article}>
            <p className={styles.content}>
              Trinity Chapel Murang’a exists to help its members to
              <span> grow deep to reach wide. </span>
              The words DEEP and WIDE are acronyms that embrace our strategy and
              goals. DEEP, <span>the how to of discipleship,</span> stands for
              the four disciplines central to Christian growth. These are:
              <span>
                daily devotion, engagement in serivice, e-groups and pulpit
              </span>
            </p>
            <p className={styles.content}>
              WIDE,
              <span>the what of our vision</span>, stands for our primary goals.
              These are: To witness to
              <span> 1,000,000 people</span>, to Impact the lives of th people
              around us especially yhe needy and the poor. To disciple
              <span> 100, 000 people</span> outside of the chapel community into
              spiritual maturity, To Establish and plant{' '}
              <span>300 churces</span>.
            </p>
          </article>
          <div className={styles.icons}>
            {deepandwideicons.map((dwi) => {
              return (
                <DeepWideIcon
                  key={dwi.title}
                  image1={dwi.image1}
                  image2={dwi.image2}
                  title={dwi.title}
                  content={dwi.content}
                  matchesMedia={smallScreenSize}
                />
              );
            })}
          </div>
          <div className={styles.more_aboutus__button}>
            <Button theme={'dark'} link={'/about-us'}>
              <span>More about this</span>
              <span className="arrowforward">
                <Image src={arrowforward2} alt="arrow forward" />
              </span>
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
}
