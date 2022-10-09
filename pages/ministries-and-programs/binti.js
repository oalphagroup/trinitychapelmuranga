import placeholder from '../../public/placeholder.png';

import Layout from '../../components/layout';
import ContentImage from '../../components/content-image';

import styles from '../../styles/ministries.module.css';

function Binti() {
  const group1Images = [{ src: placeholder, description: 'Placeholder Image' }];

  const group2Images = [
    { src: placeholder, description: 'Placeholder Image' },
    { src: placeholder, description: 'Placeholder Image' },
    { src: placeholder, description: 'Placeholder Image' },
  ];

  return (
    <Layout>
      <header className={styles.header_section}>
        <h1>Binti</h1>
      </header>
      <div className={styles.highlighted_section}>
        <span></span>
        <div className={styles.highlighted_section__content}>
          <p className={''}>
            When women work together, it’s a bond unlike any other. Strong women
            stand together, lift each other up and empower one another through
            prayer.
          </p>
          <p className={''}>
            Charm is deceptive, and beauty is fleeting; but a woman who fears
            the LORD is to be praised. Give her the reward she has earned, and
            let her works bring her praise at the city gate.
            <br />
            <span style={{ marginTop: '8px' }} className="caption">
              Prov 31 : 29 - 31; <br /> NIV
            </span>
          </p>
        </div>
      </div>
      <main className={styles.main_section}>
        <div className={styles.mini_nav}>
          <h6 className="title3">Binti</h6>
          <ul className={styles.nav_items}>
            <li className={styles.nav_item}>Overview</li>
            <li className={styles.nav_item}>Binti's aim</li>
          </ul>
        </div>
        <div className={styles.main_content}>
          <h6 className={`${styles.content_title} orange-font`}>
            What is Binti
          </h6>
          <p className="content_paragraph">
            Binti seeks to provide ladies young and old, with opportunities to
            build authentic relationships. We aim to encourage ladies to
            function in their true identity, as we empower them on issues of
            life and faith.
          </p>
          <ContentImage images={group1Images} />
          <p>
            Women don’t always get to choose life’s circumstances but we do get
            to choose how we’ll respond: with Strength, Stamina and a Staying
            Perseverance. That can only be possible if we choose to have God
            walk with us. Binti lays the foundation to make that possible.
          </p>
          <ContentImage images={group2Images} />
          <h6 className={`${styles.content_title} orange-font`}>
            Why be a part of Binti
          </h6>
          <p>
            Binti encourages all ladies to function in their true identity,
            through forums that increase their knowledge of God, and strengthen
            their personal faith. It creates opportunities for fellowship and
            accountability for ladies to walk with, challenge and support one
            another as they grow to the next levels. Binti also gives ladies a
            safe forum to connect emotionally, socially, spiritually and
            psychologically as they develop new friendships.
          </p>
        </div>
      </main>
    </Layout>
  );
}

export default Binti;
