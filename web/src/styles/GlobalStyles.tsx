import { css } from '@linaria/core';

export const globals = css`

  @import url('https://fonts.googleapis.com/css?family=Roboto|Roboto+Mono');

  :global() {

    tab-size: 4;

    :root {
      --dark-mode-background: rgb(3, 7, 18);
      --light-mode-background: #fdfdfd;
      --dark-mode-text: #fdfdfd;
      --light-mode-text: rgb(3, 7, 18);
    }

    *,
    *:before,
    *:after {
      box-sizing: border-box;
      border-width: 0;
      border-style: solid;
      border-color: #e5e7eb;

      /* font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; */
      font-family: 'Roboto Mono', monospace;
      font-feature-settings: normal;
      font-variation-settings: normal;
      line-height: inherit;
    }

    /* color scheme */
    html {
      background-color: var(--light-mode-background);
      color: var(--light-mode-text);
    }

    /* @media (prefers-color-scheme: dark) {
      color-scheme: dark;

      html {
        background-color: var(--dark-mode-background);
        color: var(--dark-mode-text);
      }
    } */

    /* top level */
    html {
      box-sizing: border-box;
      font-size: 10px;
    }

    body {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

      padding: 0px;
      margin: 0px;
      height: 100vh;

      display: flex;
      flex-direction: column;
      justify-content: space-between;

      font-size: 1.5rem;
      line-height: 2;
      text-align: center;
    }

    /* component-specific */
    a {
      text-decoration: none;
    }

    ol, ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
  }
`;
