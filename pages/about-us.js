import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import Button from '../components/button';
import Layout from '../components/layout';

import styles from '../styles/about-us.module.css';

import cake from '../public/cake.png';
import arrowforward2 from '../public/arrow-forward 2.svg';
import roots from '../public/roots.svg';
import leaves from '../public/leaves.svg';
// import francismash from '../public/francismash.png';
import pastorfrancis from '../public/pastorfrancis.png';
import gitongawachira from '../public/gitongawachira.png';
import olivernjuguna from '../public/olivernjuguna.png';
import harrietgitonga from '../public/harrietgitonga.png';

function AboutUs() {
  const team_images = [
    {
      image: pastorfrancis,
      role: 'Lead Pastor',
      name: 'Pst. Francis Macharia',
      alt: 'Lead Pastor Image',
    },
    {
      image: gitongawachira,
      role: 'Lead Host',
      name: 'Gitonga Wachira',
      alt: 'Lead Host Image',
    },
    {
      image: olivernjuguna,
      role: 'Media Team Leader',
      name: 'Oliver Njuguna',
      alt: 'Medai Team Leader Image',
    },
    {
      image: harrietgitonga,
      role: 'Worship Team Leader',
      name: 'Harriet Gitonga',
      alt: 'Worship Team Leader Image',
    },
  ];
  return (
    <Layout>
      <Head>
        <title>Trinity Chapel Muranga</title>
        <meta name="description" content="Audaciously Impacting Lives" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.navbar}>
        <div className={styles.inner_navbar}>
          <p className={styles.navbar_title}>Trinity Chapel Murang&apos;a</p>
          <ul className={styles.links}>
            <li>
              <a className={styles.navlink}>Mission & Vision</a>
            </li>
            <li>
              <a className={styles.navlink}>Staff</a>
            </li>
            <li>
              <a className={styles.navlink}>Map</a>
            </li>
          </ul>
        </div>
      </div>
      <header>
        <div className={styles.above_fold__container}>
          <div className={styles.above_fold__left_section}>
            <Image
              src={cake}
              alt="Trinity Chapel Murang'a 3rd Anniversary"
              width="502px"
              height="502px"
            />
          </div>
          <div className={styles.above_fold__right_section}>
            <h1>
              Hi there,
              <br />
              we are TCM
            </h1>
            <p className={styles.above_fold__content}>
              Our mission is to{' '}
              <b className="orange-font">Audaciously Impact Lives</b> and our
              vision is to <b className="orange-font"> Grow DEEP to reach WIDE</b>
              . Our desire is to see that each and every person that God brings
              through our doors has a life changing encounter and begins to live
              a life of purpose. That they grow in their relationship with God,
              and become more Christ-like as His disciple.
            </p>
            <div className={styles.sermons_button}>
              <Button theme={'dark'} link={'/sermons'}>
                <span>Check Our Sermons</span>
                <span className="arrowforward">
                  <Image src={arrowforward2} alt="arrow forward" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </header>
      <div className={styles.deep_and_wide__section}>
        <div className={styles.deep_and_wide__container}>
          <div className={styles.deep_and_wide__left}>
            <div className={styles.deep_and_wide__sub_section}>
              <small className={styles.section_mini__title}>Mission</small>
              <h6 className="title1">
                Audaciously <span className="orange-font">Impacting</span> Lives
              </h6>
              <p className={styles.mission_and_vision__artical}>
                Our desire is to see that we can positively impact the lives of
                people here in Murang’a and in the rest of the world. This we
                plan to do through our services, acts of mercy and by reaching
                out in whichever way we can.
              </p>
            </div>
            <div className={styles.deep_and_wide__sub_section}>
              <small className={styles.section_mini__title}>Vision</small>
              <h6 className="title1">
                Grow <span className="orange-font">deep</span> to reach{' '}
                <span className="orange-font">wide</span>
              </h6>
              <div className={styles.list_group}>
                <div className={styles.list_inner__group}>
                  <div className={styles.illustration1}>
                    <Image src={roots} alt="Deep Image" />
                  </div>
                  <p>
                    <b>Deep</b>
                  </p>
                  <ul className="fancy-list">
                    <li>D - Daily Devotion</li>
                    <li>E - Engagement In Service</li>
                    <li>E - E - Groups</li>
                    <li>D - Pulpit</li>
                  </ul>
                </div>
                <div className={styles.list_inner__group}>
                  <div className={styles.illustration2}>
                    <Image src={leaves} alt="Deep Image" />
                  </div>
                  <p>
                    <b>Wide</b>
                  </p>
                  <ul className="fancy-list">
                    <li>W - Witness</li>
                    <li>I - Impact</li>
                    <li>D - Disciple</li>
                    <li>E - Evangelism</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.deep_and_wide__right}>
            <h6 className="title1">
              <span className="orange-font">Daily Devotion</span>
            </h6>
            <p className={styles.mission_and_vision__artical}>
              Nothing causes personal spiritual growth like developing the
              discipline of reading God’s word daily and listening to his
              leading and direction for the day. So we work hard at helping our
              members learn how to listen to God for themselves on a daily
              basis.
            </p>
          </div>
        </div>
        <div className="team">
          <small className={styles.section_mini__title}>Team</small>
          <h6 className="title1">Meet the team leaders</h6>
          <ul className={styles.team_members__list}>
            {team_images.map((member) => {
              return (
                <li className={styles.team_members__list_item} key={member.alt}>
                  <Image
                    src={member.image}
                    alt={member.alt}
                    width="316px"
                    height="316px"
                  />
                  <small style={{ display: 'block', margin: '16px 0 0' }}>
                    <span className="orange-font">
                      <b>{member.role}</b>
                    </span>
                  </small>
                  <p style={{ display: 'block', margin: '4px 0 0' }}>
                    {member.name}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export default AboutUs;
