import Image from 'next/image';
import { useState } from 'react';

import Layout from '../components/layout';

import backgroundplc from '../public/background.png';
import BankImage from '../public/Bank Image.png';
import MPESAImage from '../public/MPESA Image.png';

import styles from '../styles/giving.module.css';

function Giving() {
  const payments = [
    {
      name: 'BANK',
      image: BankImage,
      details: [
        {
          name: 'Account Name',
          value: "Trinity Chapel Murang'a",
        },
        {
          name: 'Account Number',
          value: '123456789',
        },
        {
          name: 'Bank Name',
          value: 'NCBA Bank Kenya PLC',
        },
        {
          name: 'Branch',
          value: 'Prestige',
        },
        {
          name: 'Swift Code',
          value: 'ABCDEFGH',
        },
      ],
    },
    {
      name: 'M - PESA',
      image: MPESAImage,
      details: [
        {
          name: 'Paybill',
          value: '761780',
        },
        {
          name: 'Account Number',
          value: 'TCMuranga',
        },
      ],
    },
  ];
  var active = 'BANK';
  const [activePayment, setActivePayment] = useState(active);

  function changeMode(ev) {
    return setActivePayment(ev.target.textContent);
  }

  return ( 
    <Layout>
      <div className={styles.giving}>
        <header>
          <div className={styles.header_content}>
            <div className={styles.header_content__text}>
              <h2>Worship God through giving</h2>
              <p className={styles.header_content__text_p}>
                Give, and it will be given to you. A good measure, pressed down,
                shaken together and running over, will be poured into your lap.
                For with the measure you use, it will be measured to you.
              </p>
              <small>
                <span className="orange-font">Luke 6 : 38; NIV</span>
              </small>
            </div>
            <div className={styles.giving_image}>
              <Image src={backgroundplc} alt="Placeholder background" width={'480px'} height={'350px'} />
            </div>
          </div>
        </header>
        <div className={styles.giving_modes}>
          <div className={styles.giving_mode__details}>
            <ul className={styles.giving_mode__menu}>
              {payments.map((payment) => {
                return (
                  <li
                    key={payment.name}
                    className={styles.giving_mode__menu_item}
                    onClick={changeMode}
                  >
                    <p
                      style={{ pointerEvents: 'none' }}
                      className={
                        payment.name === activePayment
                          ? styles.active
                          : styles.inactive
                      }
                    >
                      {payment.name}
                    </p>
                  </li>
                );
              })}
            </ul>
            {payments.map((payment_mode, index) => {
              return (
                payment_mode.name === activePayment && (
                  <div className={styles.giving_modes__details_content} key={index}>
                    <h6 className="title3">
                      <span className="orange-font">
                        {payment_mode.name} Details
                      </span>
                    </h6>
                    <ul className={styles.payment_details}>
                      {payment_mode.details.map((payment_details) => {
                        return (
                          <li className={styles.payment_details__item}key={payment_details.name}>
                            <p className="payment_detail__name orange-font">
                              {payment_details.name}
                            </p>
                            <p className="payment_detail__value">
                              {payment_details.value}
                            </p>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )
              );
            })}
          </div>
          <div className={styles.giving_mode__image}>
            {payments.map((payment, index) => {
              return (
                payment.name === activePayment && (
                  <Image
                    src={payment.image}
                    alt={payment.name}
                    width={'500px'}
                    height={'500px'}
                    key={index}
                  />
                )
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Giving;
