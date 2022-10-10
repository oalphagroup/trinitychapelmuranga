import Router from 'next/router';

import placeholder from '../../public/placeholder.png';

import Layout from '../../components/layout';
import ContentImage from '../../components/content-image';

import styles from '../../styles/ministries.module.css';

function Binti() {
  const router = Router;

  const group1Images = [{ src: placeholder, description: 'Placeholder Image' }];

  const navs = [{ name: 'Quest' }, { name: 'Our Vision' }];

  return (
    <Layout>
      <header className={styles.header_section}>
        <h1>Quest</h1>
      </header>
      <div className={styles.highlighted_section}>
        <span></span>
        <div className={styles.highlighted_section__content}>
          <p>
            Our commitment to nurture children of faith is underpinned by the
            belief that a strong children’s ministry translates into a strong
            social fabric.
          </p>
          <p className={''}>
            Train a child in the way He should go, and when he is old he will
            not turn from it.”
            <br />
            Proverbs 22 : 6; <br /> NIV
          </p>
        </div>
      </div>
      <main className={styles.main_section}>
        <div className="mini-nav">
          <div className="nav-items__container">
            <h6 className="title3">Quest</h6>
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
          <h6 id="Quest" className={`${styles.content_title} orange-font`}>
            Quest
          </h6>
          <p className="content_paragraph">
            QUEST, our Children’s Ministry, embodies the great adventure of
            knowing God, discovering His Word and enjoying His people. Here, we
            seek to draw the young ones into a closer walk with Jesus and to
            empower them to reveal His love to others along the way. .
          </p>
          <ContentImage images={group1Images} />
          <h6 id="Our Vision" className={`${styles.content_title} orange-font`}>
            Our Vision
          </h6>
          <p>
            Our vision at Quest is to nurture children of F.A.I.T.H who will
            grow D.E.E.P in their personal relationships with Jesus and reach
            W.I.D.E in loving and serving others. The acronym F.A.I.T.H stands
            for:
          </p>
          <ul className="fancy-list">
            <li>F - Firm foundation in the Word of God</li>
            <li>
              A - Active devotion expressed in a worshiping lifestyle and
              spiritual disciplines
            </li>
            <li>I - Involvement in God’s community of love and service</li>
            <li>T - Transformed lives seen in Christ-like character</li>
            <li>H - Heart for Mission and Outreach</li>
          </ul>
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

export default Binti;
