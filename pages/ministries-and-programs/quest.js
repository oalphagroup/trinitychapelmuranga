import placeholder from '../../public/placeholder.png';

import Layout from '../../components/layout';
import ContentImage from '../../components/content-image';

import styles from '../../styles/ministries.module.css';

function Binti() {
  const group1Images = [{ src: placeholder, description: 'Placeholder Image' }];

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
        <div className={styles.mini_nav}>
          <h6 className="title3">Quest</h6>
          <ul className={styles.nav_items}>
            <li className={styles.nav_item}>Quest</li>
            <li className={styles.nav_item}>Our Vision</li>
          </ul>
        </div>
        <div className={styles.main_content}>
          <h6 className={`${styles.content_title} orange-font`}>Quest</h6>
          <p className="content_paragraph">
            QUEST, our Children’s Ministry, embodies the great adventure of
            knowing God, discovering His Word and enjoying His people. Here, we
            seek to draw the young ones into a closer walk with Jesus and to
            empower them to reveal His love to others along the way. .
          </p>
          <ContentImage images={group1Images} />
          <h6 className={`${styles.content_title} orange-font`}>Our Vision</h6>
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
    </Layout>
  );
}

export default Binti;
