// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { css } from '@linaria/core';
import {
  Contact,
  Github,
  KeyRound,
  Mail,
} from 'lucide-react';

const details = [
  {
    name: 'Business Card',
    icon: Contact,
    href: '/contact/contact.vcf',
  },
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:jack@toumey.io',
  },
  {
    name: 'Github Profile',
    icon: Github,
    href: 'https://github.com/miloofcroton',
  },
  {
    name: 'Public Key',
    icon: KeyRound,
    href: '/contact/public.key',
  },
];

const IconCard = ({ detail }: {
  detail: typeof details[0]
}) => {
  return (
    <li className={css`
      display: inline;
      margin: 5px;
      list-style: none;
      font-size: 24px;
    `}>
      <a
        href={detail.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={detail.name}
        className={css`
          a {
            color: black;
            svg {
              height: 24px;
            }
          }
        `}
      >
        <detail.icon color="black" />
        <span className={css`
          display: none;
        `}>
          {detail.name}
        </span>
      </a>
    </li>
  );
};

const IconList = () => {
  const icons = details.map(detail => (
    <IconCard key={detail.name} detail={detail} />
  ));

  return (
    <ul className={css`
      padding: 0px;
    `}>
      {icons}
    </ul>
  );
};

export default IconList;
