import Image from 'next/image';

function ContentImage({ images }) {
  return (
    <ul className="image-container">
      {images.map((image) => {
        return (
          <li className="image-item" key={image.description}>
            <Image src={image.src} alt={image.description} />
            <span className="caption">{image.description}</span>
          </li>
        );
      })}
      <style jsx>
        {`
          .image-container {
            display: grid;
            grid-template-columns: repeat(${images.length}, 1fr);
            grid-gap: 16px;
            margin: 32px 0;
          }

          @media screen and (max-width: 1130px) {
            .image-container {
              grid-template-columns: repeat(2, auto);
            }
          }

          @media screen and (max-width: 768px) {
            .image-container {
              grid-template-columns: auto;
            }
          }
        `}
      </style>
    </ul>
  );
}

export default ContentImage;
