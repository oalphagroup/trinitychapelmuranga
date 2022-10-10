import Router from 'next/router';

import Layout from '../../components/layout';
import ContentImage from '../../components/content-image';

import pluginmembers from '../../public/pluginmembers.png';
import campsite from '../../public/campsite.png';
import pluginmember from '../../public/pluginmember.png';
import plugingroupphoto from '../../public/plugingroupphoto.png';

import styles from '../../styles/ministries.module.css';

function PlugIn() {
  const router = Router;

  const group1Images = [
    { src: pluginmembers, description: 'Image of plugin members in camp' },
  ];

  const group2Images = [
    { src: campsite, description: 'Image of plugin campsite' },
    { src: pluginmember, description: 'Image of a plugin member' },
    { src: plugingroupphoto, description: 'Plugin photo' },
  ];

  const navs = [
    { name: 'Plug In' },
    { name: 'Our 4 Objectives' },
    { name: 'How it works' },
  ];

  return (
    <Layout>
      <header className={styles.header_section}>
        <h1>Plug In</h1>
      </header>
      <div className={styles.highlighted_section}>
        <span></span>
        <p className={styles.highlighted_paragraph}>
          We desire that you will not only attend church on Sunday, but get the
          opportunity to live out what the Bible says. When you discover the
          word of God, you become an agent of change and impact others around
          you. Welcome to Plug-In, our 10 week experience.
        </p>
      </div>
      <main className={styles.main_section}>
        <div className="mini-nav">
          <div className="nav-items__container">
            <h6 id="Plug In" className="title3">
              Plug In
            </h6>
            <ul className="nav-items">
              {navs.map(({ name }) => {
                return (
                  <li
                    className="nav-item"
                    key={name}
                    onClick={() => router.push(`${router.pathname}/#${name}`)}
                  >
                    {name}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className={styles.main_content}>
          <h6 className={`${styles.content_title} orange-font`}>Plugin</h6>
          <p className="content_paragraph">
            Plug-In is about connecting to God. It is not just for Christians,
            but is an experience for everyone who needs to embark on the journey
            of understanding God’s purpose for them. During this incredible 10
            week experience, we seek to know God through His Word and our wrong
            perceptions of Him begin to to be sensitively addressed. Plug-In is
            about true community where deep bonding and lifelong friendships are
            often developed. Plug-In is about knowing God and His purpose for
            your life.
          </p>
          <ContentImage images={group1Images} />
          <h6
            id="Our 4 Objectives"
            className={`${styles.content_title} orange-font`}
          >
            Our 4 Objectives
          </h6>
          <div className={styles.title_and_content}>
            <span className="orange-font">
              <b>Connect to God</b>
            </span>
            <p>
              As you spend an hour a day in reflection, Bible study, prayer and
              journaling.
            </p>
          </div>
          <div className={styles.title_and_content}>
            <span className="orange-font">
              <b>Connect to your community</b>
            </span>
            <p>
              Through the shared experience, you get to know and bond with
              members of your group at a deeper level during the meetings and
              Saturday activities.
            </p>
          </div>
          <div className={styles.title_and_content}>
            <span className="orange-font">
              <b>Connect to your church</b>
            </span>
            <p>
              Discover your spiritual gifts and abilities and get to use them
              through a 6 month internship after graduation. This internship
              will be in line with your gifts and skills – if you are
              hospitable, you are invited to serve as a greeter or usher; if you
              are passionate about justice then you can serve the marginalized
              and less fortunate in our Frontline Ministries. You also get to
              engage in our adult, youth and children’s ministries if this is in
              line with your gifts.
            </p>
          </div>
          <div className={styles.title_and_content}>
            <span className="orange-font">
              <b>Connect to your destiny</b>
            </span>
            <p>
              Each one of us is seeking our purpose and we have a deep desire to
              know how we can engage meaningfully to make a difference in this
              life and possibly leave a legacy for the next generation.
            </p>
          </div>
          <ContentImage images={group2Images} />
          <h6
            id="How it works"
            className={`${styles.content_title} orange-font`}
          >
            How it works
          </h6>
          <p>
            Every year we organise 3 Plug-In Seasons each{' '}
            <b className="orange-font">spanning across 10 weeks.</b> The Plug-In
            experience is made up of a big group of congregants,{' '}
            <b className="orange-font">numbering up to 250 in every season</b>.
            This large group is broken down into{' '}
            <b className="orange-font">smaller groups of 6 to 15 people</b>,
            primarily based on the geographical location of their homes, to make
            it easy for each person to conveniently participate.
          </p>
          <br />
          <p>
            Each of these small groups is led by two facilitators who guide
            members as they engage with God, Community, Church and Destiny. The
            small groups meet once a week (at a location convenient to each
            group) for two hours to share and explore what they have studied
            over a cup of tea and other refreshments. There are 3 weekend
            activities and the experience culminates in a retreat at the tail
            end. 80% attendance is required for one to successfully complete the
            Plug-In experience.
          </p>
        </div>
      </main>
      <style jsx>
        {`
          .mini-nav {
            margin-top: 54px;
            position: relative;
          }

          .nav-items__container {
            position: sticky;
            top: 74px;
          }

          .nav-item {
            padding: 8px 0;
            user-select: none;
          }

          @media screen and (max-width: 1130px) {
            .mini-nav {
              margin: 0;
              position: fixed;
              inset: 54px 0 auto 0;
              border: 1px solid #ddd;
              background-color: #ffffff;
              width: 100vw;
              overflow-x: scroll;
            }

            .nav-items__container h6 {
              display: none;
            }

            .nav-items {
              display: grid;
              grid-template-columns: repeat(${navs.length}, 1fr);
              width: fit-content;
              grid-gap: 0 16px;
              padding: 0 160px;
              // removes the breaks caused by spaces in words
              white-space: nowrap;
            }

            .nav-item::before {
              display: none;
            }

            .nav-items:-webkit-scrollbar {
              display: none;
            }

            /* Hide scrollbar for IE, Edge and Firefox */
            .nav-items {
              -ms-overflow-style: none; /* IE and Edge */
              scrollbar-width: none; /* Firefox */
            }
          }

          @media screen and (max-width: 1040px) {
            .nav-items {
              padding: 8px 60px;
            }
          }

          @media screen and (max-width: 768px) {
            .nav-items {
              padding: 8px 16px;
            }
          }
        `}
      </style>
    </Layout>
  );
}

export default PlugIn;
