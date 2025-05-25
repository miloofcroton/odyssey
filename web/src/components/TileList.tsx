import { Fragment } from 'react';
import { Link } from 'react-router';
import { css } from '@linaria/core';

type TileDetails = {
  to: string;
  src: string;
  alt: string;
  text: string;
}

const tileDetails: Array<TileDetails> = [
  {
    to: '/work',
    src: '/categories/code.jpg',
    alt: 'code',
    text: 'Work',
  },
  {
    to: '/play',
    src: '/categories/nature.jpg',
    alt: 'nature',
    text: 'Play',
  },
  {
    to: '/thoughts',
    src: '/categories/thinker.jpg',
    alt: 'thinker',
    text: 'Thoughts',
  },
];

const TileCard = ({ details }: {
  details: TileDetails
}) => {
  return (
    <div className={css`
      margin: 10px;
      border: 1px solid black;
      box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
      height: 100%;

      a {
        position: relative;
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        font-size: 50px;

        img {
          position: absolute;
          top: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: left;
          z-index: -1;
        }

        span {
          display: none;
          color: black;
        }

        &:hover {
          img {
            opacity: 0.5;
          }
          span {
            display: inline-block;
          }
        }
      }
    `}>
      <Link to={details.to}>
        <img src={details.src} alt={details.alt} />
        <span>{details.text}</span>
      </Link>
    </div>
  );
};

const TileList = () => {

  const tiles = tileDetails.map(details => <TileCard key={details.text} details={details} />);

  return (
    <Fragment>
      {tiles}
    </Fragment>
  );
};

export default TileList;
