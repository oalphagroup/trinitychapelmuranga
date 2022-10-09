import Image from 'next/image';
import { useEffect, useState } from 'react';

import styles from './deepwideicons.module.css';

function DeepWideIcon({ image1, image2, title, content, matchesMedia }) {
  const [hovered, setHovered] = useState(false);
  const mouseEnterHandler = () => setHovered(true);
  const mouseLeaveHandler = () => setHovered(false);

  return (
    <div
      className={`${styles.icon_item} icon-item`}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      <div className={`${styles.icon_header} icon-header`}>
        <div className="icon-image">
          {hovered || matchesMedia ? (
            <Image src={image2} alt="arrow forward active icon" />
          ) : (
            <Image src={image1} alt="arrow forward inactive icon" />
          )}
        </div>
        <small className="title-container">
          <b className="title">{title}</b>
        </small>
      </div>
      <div className={styles.icon_content}>
        <p></p>
        <small className="icon-content">{content}</small>
      </div>
      <style jsx>{`
        .title-container {
          position: relative;
        }

        .icon-image {
          position: relative;
        }

        .title-container .title {
          position: absolute;
          left: 0;
          bottom: 3px;
          transition: all 0.35s ease-in;
        }

        .icon-item:hover .title {
          bottom: 5px;
        }

        .icon-item:hover .icon-header,
        .icon-item:active .icon-header {
          color: #ff7700;
        }

        .icon-content {
          opacity: 0;
          transform: translateY(7px);
          transition: all 0.45s ease-in-out;
        }

        .icon-item:hover .icon-content,
        .icon-item:active .icon-content {
          transform: translateY(0px);
          opacity: 1;
        }

        @media only screen and (max-width: 1130px) and (pointer: coarse) {
          .icon-content {
            opacity: 1;
            transition: all 0.45s ease-in-out;
            transform: translateY(0px);
          }

          .icon-item .icon-header,
          .icon-item .icon-header {
            color: #ff7700;
          }
        }
      `}</style>
    </div>
  );
}

export default DeepWideIcon;
