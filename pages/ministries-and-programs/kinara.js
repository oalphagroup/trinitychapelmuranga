import Router from 'next/router';

import placeholder from '../../public/placeholder.png';

import Layout from '../../components/layout';
import ContentImage from '../../components/content-image';

import styles from '../../styles/ministries.module.css';

function Kinara() {
  const router = Router;

  const group1Images = [{ src: placeholder, description: 'Placeholder Image' }];

  const group2Images = [
    { src: placeholder, description: 'Placeholder Image' },
    { src: placeholder, description: 'Placeholder Image' },
    { src: placeholder, description: 'Placeholder Image' },
  ];

  const navs = [
    { name: 'What is Kinara' },
    { name: 'Objective' },
    { name: 'Kinara Life' },
    { name: 'Ministries' },
    { name: 'Discipleship' },
  ];

  return (
    <Layout>
      <header className={styles.header_section}>
        <h1>Kinara</h1>
      </header>
      <div className={styles.highlighted_section}>
        <span></span>
        <div className={styles.highlighted_section__content}>
          <p className="">
            Kinara is a transformative experience that takes trainees into the
            “trenches” of ministry while developing personal character and
            spiritual growth.
          </p>
          <p className="">
            You shall love the Lord your God with all your heart and with all
            your strength … [and]Love your neighbour as yourself.
            <br />
            <span className="caption" style={{ marginTop: '8px' }}>
              Mark 12 : 29 - 31; <br /> NIV
            </span>
          </p>
        </div>
      </div>
      <main className={styles.main_section}>
        <div className={'mini-nav'}>
          <div className="nav-items__container">
            <h6 className="title3">Kinara</h6>
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
          <h6
            id="What is Kinara"
            className={`${styles.content_title} orange-font`}
          >
            What is Kinara
          </h6>
          <p className="content_paragraph">
            Kinara is a full-time, leader-development program designed to
            empower and instruct emerging leaders who are passionate about Jesus
            and intent on pursuing a life of ministry. Kinara is Swahili for
            ‘point man’ or ‘captain’ and our goal is to raise leaders who can
            speak into the issues of the day and bring kingdom focused solutions
            to the problems facing the world. Our leadership development program
            began several years ago to provide an avenue for young people to
            discover and clarify their calling to full time ministry.
          </p>
          <ContentImage images={group1Images} />
          <h6 id="Objective" className={`${styles.content_title} orange-font`}>
            Objective
          </h6>
          <div className={styles.title_and_content}>
            <span className="orange-font">
              <b>Conviction</b>
            </span>
            <p>
              Pursuing a call to ministry is a matter of deep conviction and
              faith and we believe that a deep and vibrant relationship with
              Jesus is vital for leadership and for ministry. Our desire is that
              our trainees would know without a doubt what they believe, and
              allow their faith to influence their philosophy and approach to
              ministry.
            </p>
          </div>
          <div className={styles.title_and_content}>
            <span className="orange-font">
              <b>Character</b>
            </span>
            <p>
              It is vital for every leader to be above reproach in all matters.
              Through personal mentoring and group discipleship, every intern is
              encouraged to focus on personal character formation as part of
              their training for ministry and leadership.
            </p>
          </div>
          <div className={styles.title_and_content}>
            <span className="orange-font">
              <b>Comprehension</b>
            </span>
            <p>
              We expose our trainees to different fields of learning to widen
              their understanding of scripture, ministry and culture. This is
              done through weekly classes, training seminars and other
              leadership forums where trainees wrestle with different leadership
              concepts.
            </p>
          </div>
          <div className={styles.title_and_content}>
            <span className="orange-font">
              <b>Competence</b>
            </span>
            <p>
              We create avenues for our interns to acquire and develop the
              skills needed to serve competently in leadership and their area of
              spiritual gifting. The interns are attached to various departments
              and also serve high school and primary school ministries where
              they develop practical skills such as Bible teaching, leading
              prayer meetings and discipleship groups.
            </p>
          </div>
          <div className={styles.title_and_content}>
            <span className="orange-font">
              <b>Compassion</b>
            </span>
            <p>
              We recognise that the commandment to love God can only be
              fulfilled as we love our neighbours. Our convictions, knowledge
              and skills must all be translated into love and compassion for
              others. Our ministry context in Nairobi, and indeed the world
              over, includes poverty and sickness and many ills of society. We
              seek to display Christ-likeness in these situations by showing
              love and acceptance. For this reason, our trainees are involved in
              different aspects of mission work through the year, a highlight
              being an immersion mission experience in Kibera—one of the largest
              slums in Africa.
            </p>
          </div>
          <ContentImage images={group2Images} />
          <h6
            id="Kinara Life"
            className={`${styles.content_title} orange-font`}
          >
            Kinara Life
          </h6>
          <p>
            Our trainees have weekly classes aimed at developing well rounded
            individuals through courses on:
          </p>
          <ul className="fancy-list">
            <li>Theology</li>
            <li>Spiritual growth</li>
            <li>Leadership Development</li>
            <li>Personal Management</li>
            <li>Ministry Skills</li>
          </ul>
          <h6 id="Ministries" className={`${styles.content_title} orange-font`}>
            Ministries
          </h6>
          <p>
            Each of our trainees is assigned to one of our ministry departments
            where they serve during their first year of training. They are also
            involved in primary and high school ministry on a weekly basis where
            they teach and disciple children and youth. After the first year,
            the trainees go on church planting assignments for a year where they
            sharpen and grow their ministry and leadership skills even more.
          </p>
          <h6
            id="Discipleship"
            className={`${styles.content_title} orange-font`}
          >
            Discipleship
          </h6>
          <p>
            For the duration of their time in Kinara, all our trainees will be
            part of a staff discipleship group. D-groups provide an avenue for
            care and spiritual growth in the context of a community of peers.
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

export default Kinara;
