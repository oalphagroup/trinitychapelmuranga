import Router from 'next/router';

import placeholder from '../../public/placeholder.png';

import Layout from '../../components/layout';
import ContentImage from '../../components/content-image';

import styles from '../../styles/ministries.module.css';

function Egroup() {
  const router = Router;

  const group1Images = [{ src: placeholder, description: 'Placeholder Image' }];

  const group2Images = [
    { src: placeholder, description: 'Placeholder Image' },
    { src: placeholder, description: 'Placeholder Image' },
    { src: placeholder, description: 'Placeholder Image' },
  ];

  const group3Images = [
    { src: placeholder, description: 'Placeholder Image' },
    { src: placeholder, description: 'Placeholder Image' },
  ];

  const navs = [
    { name: 'What is E-group' },
    { name: 'Accountability' },
    { name: 'Belonging' },
    { name: 'Care' },
    { name: 'Discipline' },
    { name: 'Evangelism' },
  ];

  return (
    <Layout>
      <header className={styles.header_section}>
        <h1>E - Group</h1>
      </header>
      <div className={styles.highlighted_section}>
        <span></span>
        <p className={styles.highlighted_paragraph}>
          The body of Christ at Trinity Chapel is discipled through Small Groups
          – eGroups, for members to become Faithful Followers of Christ and in
          turn, through active engagement of their gifts to become effective
          Fishers of men. Our eGroups meet throughout the week at different
          locations. They are designed to help you build healthy relationships
          with others in a safe environment while growing spiritually.
        </p>
      </div>
      <main className={styles.main_section}>
        <div className="mini-nav">
          <div className="nav-items__container">
            <h6 className="title3">
              E - Group
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
          <h6 id="What is E-group"className={`${styles.content_title} orange-font`}>
            What is E-group
          </h6>
          <p className="content_paragraph">
            eGroups is where the life of the church really happens. At Nairobi
            Chapel, our eGroup Ministry lays emphasis on five vital areas that
            promote a church’s growth and well being. We call these the ‘ABCDEs’
            of an eGroup’s Life;
          </p>
          <ContentImage images={group1Images} />
          <h6
            id="Accountability"
            className={`${styles.content_title} orange-font`}
          >
            Accountability
          </h6>
          <p>
            Accountability is about openness in healthy relationships, work and
            areas of weakness, devotion to God and all other aspects of life.
            Members are to counsel, remind, admonish, pray and provoke one
            another to living their lives as God intended; not just in public
            life but in private too.
          </p>
          <h6 id="Belonging" className={`${styles.content_title} orange-font`}>
            Belonging
          </h6>
          <p>
            With limited time for Sunday interaction, one may not easily connect
            with other believers. In our small groups we: pray, eat, love, cry
            and laugh together. Our eGroups seek to draw people into a community
            where faith and life meet and grow. We want each of our members to
            come to the place where they can confidently say, “This is my
            family” when referring to their eGroup
          </p>
          <h6 id="Care" className={`${styles.content_title} orange-font`}>
            Care
          </h6>
          <p>
            Christians are called to be like Jesus, caring for the hurt &
            injured members of the body of Christ and sharing the Good News. Our
            eGroups give pastoral care to members in different life stages e.g.
            birth of a new child, bereavement, weddings, family transitions and
            illnesses etc. It is in this family that one finds the quickest
            response to their needs from people who will continually surround
            and care for them long after the event has happened.
          </p>
          <ContentImage images={group2Images} />
          <h6 id="Discipline" className={`${styles.content_title} orange-font`}>
            Discipline
          </h6>
          <p>
            eGroups are our strongest avenue for discipleship and
            transformation. They complement our Sunday Services by providing an
            informal and relaxed atmosphere that allows people to actively live
            out the gospel. It is in our eGroups that members ask, “How can we
            apply the Sunday teachings to our lives?” Through authentic
            discussions that require accountability and follow-up, we are able
            to nurture one another to spiritual maturity through our eGroups.
          </p>
          <h6 id="Evangelism" className={`${styles.content_title} orange-font`}>
            Evangelism
          </h6>
          <p>
            The process of ‘fishing for men’ includes being relevant in the 6
            sectors of society through their gifts to meet felt needs and
            simultaneously sharing the gospel in;
          </p>
          <ul className="fancy-list">
            <li>
              Jerusalem (Immediate communities; family, neighborhoods, zones)
            </li>
            <li>
              Judea and Samaria (Wider regions; Counties, the nation, the
              continent)
            </li>
            <li>And to the ends of the earth ( Global scene) ” (Acts 1:8).</li>
          </ul>
          <ContentImage images={group3Images} />
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

export default Egroup;
