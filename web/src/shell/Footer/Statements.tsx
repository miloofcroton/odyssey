import { Fragment } from 'react';
import { css } from '@linaria/core';

const GithubLink = css`
  font-weight: bolder;
  display: inline-block;
  text-decoration: none;
  color: black;
`;

const Statements = () => {
  const year = new Date().getFullYear();
  return (
    <Fragment>
      <p>Copyright &copy; {year}. All rights reserved.</p>
      <a className={GithubLink} href="https://github.com/miloofcroton/gatsby-homepage">
        This website
      </a>
      {' by '}
      <a className={GithubLink} href="https://github.com/miloofcroton">me</a>.
    </Fragment>
  );
};

export default Statements;
