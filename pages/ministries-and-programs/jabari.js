import placeholder from '../../public/placeholder.png';

import Layout from '../../components/layout';
import ContentImage from '../../components/content-image';

import styles from '../../styles/ministries.module.css';

function Jabari() {
  const group1Images = [{ src: placeholder, description: 'Placeholder Image' }];

  const group2Images = [
    { src: placeholder, description: 'Placeholder Image' },
    { src: placeholder, description: 'Placeholder Image' },
    { src: placeholder, description: 'Placeholder Image' },
  ];

  return (
    <Layout>
      <header className={styles.header_section}>
        <h1>Jabari</h1>
      </header>
      <div className={styles.highlighted_section}>
        <span></span>
        <p className={styles.highlighted_paragraph}>
          Have you ever seen the funny street interview video on the web where
          random men on the street were asked “What is a man?” Very few could
          answer. Try it with your friends. Short of saying men are men; and men
          procreate, most men don’t know what it means to be a man. No-one
          teaches them today on what it means to be a man, and what a man’s role
          in society is?
        </p>
      </div>
      <main className={styles.main_section}>
        <div className={styles.mini_nav}>
          <h6 className="title3">Jabari</h6>
          <ul className={styles.nav_items}>
            <li className={styles.nav_item}>Overview</li>
            <li className={styles.nav_item}>Jabari's aim</li>
          </ul>
        </div>
        <div className={styles.main_content}>
          <h6 className={`${styles.content_title} orange-font`}>
            What is Jabari
          </h6>
          <p className="content_paragraph">
            The Jabari Men’s Ministry is a gathering place for men to grow their
            faith in depth as they address faith issues relevant to men. Jabari
            aims to create an environment for men to encounter and relate with
            Jesus Christ unashamedly, and become disciples who live out their
            faith at home, in the church, in community and in the marketplace.
          </p>
          <ContentImage images={group1Images} />
          <p>
            They were brave warriors, ready for battle and able to handle the
            shield and spear. Their faces were the faces of lions, and they were
            as swift as gazelles in the mountains. 1 Chronicles 12:8
          </p>
          <ContentImage images={group2Images} />
          <h6 className={`${styles.content_title} orange-font`}>It's aims</h6>
          <p>
            The Jabari Men’s Ministry aims to foster an environment in which men
            can uniquely encounter God and discover the blessing of their
            masculinity and the role as men at home, at work, in the church and
            the community as a whole. We usher men into the presence of the King
            of kings so that they will be forged and formed into fierce soldiers
            of God – men who will be priests over their families, leaders in the
            marketplace and in church, and the salt and light of society. Men
            who are totally unashamed of Jesus Christ, the King of kings.
          </p>
        </div>
      </main>
    </Layout>
  );
}

export default Jabari;
