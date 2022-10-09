import Image from 'next/image';
import logo from '../public/logo.png';
import Link from 'next/link';
import Button from './button';

import styles from './navbar.module.css';

import arrowforward from '../public/arrow-forward 1.svg';
import { useState } from 'react';

function Navbar() {
  const [tabletActive, setTabletActive] = useState(false);
  const [openedMinistriesItems, setMinistriesItems] = useState(true);

  function tabletActiveMenu() {
    return setTabletActive(!tabletActive);
  }

  function openMinistriesItems() {
    return setMinistriesItems(!openedMinistriesItems);
  }

  return (
    <div className="navbar_container">
      <div className={styles.navbar}>
        <div className={styles.inner_navbar}>
          <Link href="/">
            <a>
              <Image src={logo} alt="Logo" width={36.35} height={53.47} />
            </a>
          </Link>
          <ul className={styles.midnav}>
            <li className={styles.midnav_item}>
              <Link href="/about-us">
                <a className={styles.navlink}>About Us</a>
              </Link>
            </li>
            <li className={styles.midnav_item}>
              <Link href="/ministries-and-programs">
                <a className={styles.navlink}>Ministries and programs</a>
              </Link>
            </li>
            <li className={styles.midnav_item}>
              <a className={styles.navlink}>Services & Info</a>
              <span className={`${styles.breadcrumb} ${styles.soon}`}>
                SOON
              </span>
            </li>
            <li className={styles.midnav_item}>
              <Link href="/giving">
                <a className={styles.navlink}>Giving</a>
              </Link>
            </li>
          </ul>
          <Button link={'/contact-us'}>
            <span>Contact Us</span>
            <span className="arrowforward">
              <Image src={arrowforward} alt="arrow forward" />
            </span>
          </Button>
        </div>
      </div>
      <div
        className={`${styles.tablet_navbar} tablet-navbar ${
          tabletActive ? 'active' : ''
        }`}
      >
        <div className={styles.tablet_top__navbar}>
          <Link href="/">
            <a>
              <Image src={logo} alt="Logo" width={36.35} height={53.47} />
            </a>
          </Link>
          <div
            className={`hamburger-menu ${tabletActive ? 'active' : ''}`}
            onClick={tabletActiveMenu}
          >
            <div className="hamburger-slide hs1"></div>
            <div className="hamburger-slide hs2"></div>
            <div className="hamburger-slide hs3"></div>
          </div>
        </div>
        <div className={styles.inner_tablet__navbar}>
          <ul className={styles.tablet_midnav}>
            <li className={styles.tablet_midnav_item}>
              <Link href="/about-us">
                <a className={styles.tablet_navlink}>About Us</a>
              </Link>
            </li>
            <li className={styles.tablet_midnav_item}>
              <Link href="/ministries-and-programs">
                <a className={styles.tablet_navlink}>Ministries and programs</a>
              </Link>
              <div
                className={`${styles.seemore_button} seemore-button ${
                  openedMinistriesItems ? 'active' : ''
                }`}
                onClick={openMinistriesItems}
              >
                <Image src={arrowforward} alt="Arrow forward image" />
              </div>
            </li>
            <ul
              className={`${
                styles.inner_tablet__nav_list
              } inner-tablet--nav-list ${
                openedMinistriesItems ? 'active' : ''
              }`}
            >
              <li className={styles.tablet_inner__item}>
                <Link href="/ministries-and-programs/jabari">
                  <a className={styles.tablet_inner__navlink}>Jabari</a>
                </Link>
              </li>
              <li className={styles.tablet_inner__item}>
                <Link href="/ministries-and-programs/binti">
                  <a className={styles.tablet_inner__navlink}>Binti</a>
                </Link>
              </li>
              <li className={styles.tablet_inner__item}>
                <Link href="/ministries-and-programs/e-group">
                  <a className={styles.tablet_inner__navlink}>E - Group</a>
                </Link>
              </li>
              <li className={styles.tablet_inner__item}>
                <Link href="/ministries-and-programs/quest">
                  <a className={styles.tablet_inner__navlink}>Quest</a>
                </Link>
              </li>
              <li className={styles.tablet_inner__item}>
                <Link href="/ministries-and-programs/plug-in">
                  <a className={styles.tablet_inner__navlink}>Plug-In</a>
                </Link>
              </li>
              <li className={styles.tablet_inner__item}>
                <Link href="/ministries-and-programs/kinara">
                  <a className={styles.tablet_inner__navlink}>Kinara</a>
                </Link>
              </li>
            </ul>
            <li className={styles.tablet_midnav_item}>
              <a className={styles.tablet_navlink}>Services & Info</a>
              <span className={`${styles.breadcrumb} ${styles.soon}`}>
                SOON
              </span>
            </li>
          </ul>
          <div className={styles.nav_buttons}>
            <Link href="/contact-us">
              <div className={styles.nav_button}>
                <a style={{ color: '#FFFFFF' }}>Contact Us</a>
              </div>
            </Link>
            <Link href="/giving">
              <div className={styles.nav_button}>
                <a>Giving</a>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .tablet-navbar {
            height: 54px;
            overflow-y: hidden;
            transition: all 0.5s ease-in-out;
            background-color: ${tabletActive ? '#ffffff' : '#ffffffaa'};
            backdrop-filter: blur(12px);
          }

          .tablet-navbar.active {
            height: calc(102vh + 7px);
          }

          .hamburger-slide {
            height: 3px;
            width: 21px;
            background-color: #14213D;
            margin: 4px 0;
          }

          .seemore-button {
            transform: rotate(0deg);
            transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
          }

          .seemore-button.active {
            transform: rotate(90deg);
          }

          .hs1,
          .hs2,
          .hs3 {
            transform: none;
            opacity: 1;
            transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
          }

          .active .hs1 {
            transform: rotate(-45deg) translateY(5px) translateX(-5px);
          }

          .active .hs2 {
            opacity: 0;
          }

          .active .hs3 {
            transform: rotate(45deg) translateY(-5px) translateX(-5px);
          }

          .inner-tablet--nav-list {
            height: 0px;
            overflow: hidden;
            transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
          }

          .inner-tablet--nav-list.active {
            height: fit-content;
          }
        `}
      </style>
    </div>
  );
}

export default Navbar;
