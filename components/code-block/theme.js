import { css } from '@emotion/react';

const theme = css`
  code[class*='language-'],
  pre[class*='language-'] {
    color: #ebdbb2; /* fg1 / fg */
    font-family: Consolas, Monaco, 'Andale Mono', monospace;
    direction: ltr;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    line-height: 1.5;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  pre[class*='language-']::-moz-selection,
  pre[class*='language-'] ::-moz-selection,
  code[class*='language-']::-moz-selection,
  code[class*='language-'] ::-moz-selection {
    color: #fbf1c7; /* fg0 */
    background: #7c6f64; /* bg4 */
  }

  pre[class*='language-']::selection,
  pre[class*='language-'] ::selection,
  code[class*='language-']::selection,
  code[class*='language-'] ::selection {
    color: #fbf1c7; /* fg0 */
    background: #7c6f64; /* bg4 */
  }

  /* Code blocks */
  pre[class*='language-'] {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
  }

  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    background: #1d2021; /* bg0_h */
  }

  /* Inline code */
  :not(pre) > code[class*='language-'] {
    padding: 0.1em;
    border-radius: 0.3em;
  }

  .token.comment,
  .token.prolog,
  .token.cdata {
    color: #a89984; /* fg4 / gray1 */
  }

  .token.delimiter,
  .token.boolean,
  .token.keyword,
  .token.selector,
  .token.important,
  .token.atrule {
    color: #fb4934; /* red2 */
  }

  .token.operator,
  .token.punctuation,
  .token.attr-name {
    color: #a89984; /* fg4 / gray1 */
  }

  .token.tag,
  .token.tag .punctuation,
  .token.doctype,
  .token.builtin {
    color: #fabd2f; /* yellow2 */
  }

  .token.entity,
  .token.number,
  .token.symbol {
    color: #d3869b; /* purple2 */
  }

  .token.property,
  .token.constant,
  .token.variable {
    color: #fb4934; /* red2 */
  }

  .token.string,
  .token.char {
    color: #b8bb26; /* green2 */
  }

  .token.attr-value,
  .token.attr-value .punctuation {
    color: #a89984; /* fg4 / gray1 */
  }

  .token.url {
    color: #b8bb26; /* green2 */
    text-decoration: underline;
  }

  .token.function {
    color: #fabd2f; /* yellow2 */
  }

  .token.regex {
    background: #b8bb26; /* green2 */
  }

  .token.bold {
    font-weight: bold;
  }

  .token.italic {
    font-style: italic;
  }

  .token.inserted {
    background: #a89984; /* fg4 / gray1 */
  }

  .token.deleted {
    background: #fb4934; /* red2 */
  }
`;

export default theme;
