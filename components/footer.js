import Image from 'next/image';
import Link from 'next/link';

import logo from '../public/logo.png';

import styles from './footer.module.css';

function Footer() {
  const linkgroups = [
    {
      title: 'Pages',
      links: [
        {
          name: 'About Us',
          h_ref: './about-us',
        },
        {
          name: 'Ministries and programs',
          h_ref: './ministries-and-programs',
        },
        {
          name: 'Blog',
          inactive: true,
        },
        {
          name: 'Giving',
          h_ref: './giving',
        },
        {
          name: 'Contact Us',
          h_ref: './contact-us',
        },
      ],
    },
    {
      title: 'Information',
      links: [
        {
          name: 'Sermons',
          inactive: true,
        },
        {
          name: 'Blogs',
          inactive: true,
        },
        {
          name: 'News',
          inactive: true,
        },
        {
          name: 'Podcasts',
          inactive: true,
        },
      ],
    },
    {
      title: 'Social',
      links: [
        {
          name: 'Facebook',
          h_ref: 'https://www.facebook.com/',
          inactive: true,
        },
        {
          name: 'Instagram',
          h_ref: 'https://www.instagram.com/',
          inactive: true,
        },
        {
          name: 'Spotify',
          h_ref: 'https://www.spotify.com/',
          inactive: true,
        },
        {
          name: 'Twitter',
          h_ref: 'https://www.twitter.com/',
          inactive: true,
        },
        {
          name: 'Youtube',
          h_ref: 'https://www.yuotube.com/',
          inactive: true,
        },
      ],
    },
  ];

  return (
    <div className={styles.footer}>
      <div className={styles.footer_top}>
        <div className={styles.footer_logo}>
          <Link href="/">
            <a>
              <Image src={logo} alt="Logo" width={36.35} height={53.47} />
            </a>
          </Link>
        </div>
        <div className={styles.footer_links}>
          {linkgroups.map((linkgroup, index) => {
            return (
              <div className={styles.link_group} key={linkgroup.title}>
                <p className={`${styles.title3} title3`}>{linkgroup.title}</p>
                <ul>
                  {linkgroup.links.map((link) => {
                    return (
                      <li key={link.name} className={styles.link_item}>
                        {/* if the link inactive, render a <p> tag instead of a link */}
                        {link.inactive ? (
                          <div className={styles.link}>
                            {link.name}
                            <span
                              className={`${styles.breadcrumb} ${styles.soon}`}
                            >
                              SOON
                            </span>
                          </div>
                        ) : link.new ? (
                          link.redirect ? (
                            <a className={styles.link}>
                              {/* if the link is new and is a redirect, render a breadcrumb indicating that and redirect the link*/}
                              {link.name}
                              <span
                                className={`${styles.breadcrumb} ${styles.new}`}
                              >
                                NEW
                              </span>
                            </a>
                          ) : (
                            <Link href={link.h_ref}>
                              {/* if the link is new and is NOT a redirect, render a breadcrumb indicating that*/}
                              <a className={styles.link}>
                                {link.name}
                                <span
                                  className={`${styles.breadcrumb} ${styles.new}`}
                                >
                                  NEW
                                </span>
                              </a>
                            </Link>
                          )
                        ) : link.redirect ? (
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={link.h_ref}
                            className={styles.link}
                          >
                            {link.name}
                          </a>
                        ) : (
                          <Link href={link.h_ref}>
                            <a className={styles.link}>{link.name}</a>
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.footer_bottom}>
        <small className="name">Trinity Chapel Murang&apos;a</small>
        <span className="copyright">
          © <small>{new Date().getFullYear()} All rights reserved.</small>
        </span>
      </div>
    </div>
  );
}

export default Footer;
