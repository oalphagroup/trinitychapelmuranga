import Link from 'next/link';

import styles from './button.module.css';

function Button({ link, theme, children }) {

  return (
    <Link href={link}>
      <a
        className={`${
          theme === 'dark'
            ? styles.dark
            : theme === 'site'
            ? styles.site
            : styles.light
        } button`}
      >
        {children}
      </a>
    </Link>
  );
}

export default Button;
