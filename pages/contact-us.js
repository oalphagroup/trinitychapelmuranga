import Image from 'next/image';

import Layout from '../components/layout';

import arrowforward from '../public/arrow-forward 2.svg';

import styles from '../styles/contact-us.module.css';

function ContactUs() {
  return (
    <Layout>
      <div className={styles.contact_us}>
        <header>
          <h1>Get in touch</h1>
          <p className={styles.header_content}>
            <b className="orange-font">We love visitors</b>, If you are new in
            Murang’a consider passing by. If you are in search of a place to
            fellowship, you can make us your home church. You can also send us a
            message below via our mail.
          </p>
        </header>
        <main className={styles.main_section}>
          <div className={styles.form_section}>
            <h6>
              <span className={`orange-font ${styles.form_title}`}>
                Send us a message
              </span>
            </h6>
            <form action="" className={styles.form}>
              <div className={styles.form_group}>
                <label htmlFor="name" className={styles.form_label}>
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Jane Doe"
                  className={styles.form_input}
                />
              </div>
              <div className={styles.form_group}>
                <label htmlFor="telephone" className={styles.form_label}>
                  Telephone
                </label>
                <input
                  type="tel"
                  name="telephone"
                  id="telephone"
                  placeholder="+25412345678"
                  className={styles.form_input}
                />
              </div>
              <div className={styles.form_group}>
                <label htmlFor="email" className={styles.form_label}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="janedoe@email.com"
                  className={styles.form_input}
                />
              </div>
              <div className={styles.form_group}>
                <label htmlFor="email" className={styles.form_label}>
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="5"
                  placeholder="Hello there!"
                  className={styles.form_textarea}
                ></textarea>
              </div>
              <button
                type="submit"
                className={`button ${styles.submit_button}`}
              >
                <span>Submit Message</span>
                <Image src={arrowforward} alt="Arrow Forward" />
              </button>
            </form>
          </div>
          <div className={styles.map_container}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.7734446715094!2d37.15790302966406!3d-0.7216269169974734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1828991a2cd868ff%3A0x9b6e4b22666e478e!2sDeekei%20Restaurant!5e0!3m2!1sen!2ske!4v1664521695787!5m2!1sen!2ske"
              style={{ border: 0, minHeight: '400px', width: '100%' }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </main>
        <div className={styles.contact_section}>
          <div className={styles.contact_item}>
            <span className="orange-font"><b>Email Address</b></span>
            <p>info@tcmuranga.org</p>
          </div>
          <div className={styles.contact_item}>
            <span className="orange-font"><b>Telephone Number</b></span>
            <p>+254 712 3456 789</p>
          </div>
          <div className={styles.contact_item}>
            <span className="orange-font"><b>Postal Address</b></span>
            <p>P.O BOX 53635 -00200 Muranga, Kenya</p>
          </div>
          <div className={styles.contact_item}>
            <span className="orange-font"><b>Church Physical Address</b></span>
            <p>
              Runo Arcade, 2nd floor ( Deekei ventures near mukuyu travellers
              stage).
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ContactUs;
