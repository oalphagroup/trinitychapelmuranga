import Head from 'next/head';
import Image from 'next/image';

import Button from '../components/button';
import Layout from '../components/layout';

// import arrowforward1 from '../public/arrow-forward 1.svg';
import arrowforward2 from '../public/arrow-forward 2.svg';
import pluginbonfire from '../public/plugin-bonfire.png';
import jabariimage from '../public/jabari.png';

import styles from '../styles/ministries-and-programs.module.css';

function MinistriesAndPrograms() {
  const ministries = [
    {
      image: jabariimage,
      ministry: "Men's Ministry",
      name: 'Jabari',
      content:
        'The Jabari Men’s Ministry is a gathering place for men to grow their faith in depth as they address faith issues relevant to men. Jabari aims to create an environment for men to encounter and relate with Jesus Christ unashamedly, and become disciples who live out their faith at home, in the church, in community and in the marketplace.',
      link: '/ministries-and-programs/jabari',
    },
    {
      image: jabariimage,
      ministry: "Ladie's Ministry",
      name: 'Binti',
      content:
        'When women work together, it’s a bond unlike any other. Strong women stand together, lift each other up and empower one another through prayer. Women don’t always get to choose life’s circumstances but we do get to choose how we’ll respond: with Strength, Stamina and a Staying Perseverance...',
      link: '/ministries-and-programs/binti',
    },
    {
      image: jabariimage,
      ministry: "Children's Ministry",
      name: 'Quest',
      content:
        '“Train a child in the way He should go, and when he is old he will not turn from it.” (Proverbs 22:6). QUEST, our Children’s Ministry, embodies the great adventure of knowing God, discovering His Word and enjoying His people. Here, we seek to draw the young ones into a closer walk with...',
      link: '/ministries-and-programs/quest',
    },
    {
      image: jabariimage,
      ministry: 'Fellowship',
      name: 'E-Group',
      content:
        'The body of Christ at Trinity Chapel is discipled through Small Groups – eGroups, for members to become Faithful Followers of Christ and in turn, through active engagement of their gifts to become effective Fishers of men. Our eGroups meet throughout the week at different locations... ',
      link: '/ministries-and-programs/e-group',
    },
    {
      image: jabariimage,
      ministry: 'Discipleship',
      name: 'Plug-In',
      content:
        'Plug-In is about connecting to God. It is not just for Christians, but is an experience for everyone who needs to embark on the journey of understanding God’s purpose for them. During this incredible 10 week experience, we seek to know God through His Word and our wrong perceptions of ...',
      link: '/ministries-and-programs/plug-in',
    },

    {
      image: jabariimage,
      ministry: 'Discipleship',
      name: 'Kinara',
      content:
        'Kinara is a full-time, leader-development program designed to empower and instruct emerging leaders who are passionate about Jesus and intent on pursuing a life of ministry. Kinara is Swahili for ‘point man’ or ‘captain’ and our goal is to raise leaders who can speak into the issues of ...',
      link: '/ministries-and-programs/kinara',
    },
  ];

  return (
    <Layout>
      <Head>
        <title>Trinity Chapel Muranga</title>
        <meta name="description" content="Audaciously Impacting Lives" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <div className={styles.header_content}>
          <h1>Ministries and Programs</h1>
        </div>
      </header>
      <div className={styles.m_and_p}>
        <div className={styles.featured_ministry}>
          <div className={styles.ministries_and_programs__content}>
            <Image
              src={pluginbonfire}
              alt="Plugin Bonfire Image"
              width="540px"
              height="360px"
            />
          </div>
          <div className={styles.ministries_and_programs__content}>
            <small className={styles.ministries_and_preograms__title}>
              <b>Discipleship Program</b>
            </small>
            <h6 className="ministries_and_preograms__title">
              <span className="orange-font">Plugin</span>
            </h6>
            <p className={styles.ministries_and_programs__content_p}>
              Plug-In is about connecting to God. It is not just for Christians,
              but is an experience for everyone who needs to embark on the
              journey of understanding God’s purpose for them. During this
              incredible 10 week experience, we seek to know God through His
              Word and our wrong perceptions of Him begin to to be sensitively..
            </p>
            <Button theme={'dark'} link={'/ministries-and-programs/plug-in'}>
              <span>Plug In</span>
              <span className="arrowforward">
                <Image src={arrowforward2} alt="arrow forward" />
              </span>
            </Button>
          </div>
        </div>
        <div className={styles.ministries_list__container}>
          <div className={styles.section_slider__container}>
            <div className={styles.section_slider}></div>
          </div>
          <div className="ministry-list__container">
            <ul className={`${styles.ministries_list} ministries-list`}>
              {ministries.map((ministry, index) => {
                return (
                  <li
                    className={styles.ministry_list__item}
                    key={ministry.name}
                  >
                    <h1 className={styles.background_image}>{index + 1}</h1>
                    <Image
                      src={ministry.image}
                      alt={ministry.ministry}
                      width={'540px'}
                      height={'320px'}
                    />
                    <small
                      className={styles.section_mini__title}
                      style={{ display: 'block' }}
                    >
                      <b>{ministry.ministry}</b>
                    </small>
                    <h6 className="title1 orange-font">{ministry.name}</h6>
                    <p className={styles.section_content__p}>
                      {ministry.content}
                    </p>
                    <Button theme={'dark'} link={ministry.link}>
                      <span>{ministry.name}</span>
                      <span className="arrowforward">
                        <Image src={arrowforward2} alt="arrow forward" />
                      </span>
                    </Button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .ministry-list__container {
            display: flex;
            overflow-y: hidden;
            overflow-x: scroll;
            margin-top: 64px;
            position: relative;
            height: 100%;
          }

          .ministries-list {
            display: grid;
            grid-template-columns: repeat(${ministries.length}, auto);
            grid-gap: 0 32px;
            width: fit-content;
            height: fit-content;
          }
        `}
      </style>
    </Layout>
  );
}

export default MinistriesAndPrograms;
