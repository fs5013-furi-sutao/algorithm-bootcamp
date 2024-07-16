import styled, { css, up, down } from '@xstyled/styled-components'

export const Article = styled.article`
  .anchor {
    margin-left: calc(-1em - 4px);
    > svg {
      fill: on-background;
      width: 1em;
      height: 1em;
      display: inline;
      vertical-align: -15%;
    }
  }

  code {
    background-color: background-light;
    color: on-background-primary;
    border-radius: base;
    padding: 0 1;
  }

  mark {
    background-color: background-mark;
  }

  > p {
    margin: 3 0;
    font-size: 16;
    line-height: 1.6;
    max-width: 52em;
  }

  /* Intro */
  > h1 + p {
    font-size: 18;
    font-weight: 300;
    color: on-background-light;
    margin: 2 0 !important;

    ${up(
      'xl',
      css`
        font-size: 22;
        line-height: 1.2;
      `,
    )};

    a,
    strong {
      font-weight: 400;
    }
  }

  > hr {
    margin: 0;
    height: 0;
    border: 0;
    border-top: 1;
    border-color: layout-border;
    margin: 4 0;

    &:first-child {
      margin-top: 0;
    }
  }

  > h1 {
    font-size: 32;
    line-height: 1.1;
    font-weight: 600;
    margin: 40 0 2;
  }

  > h2 {
    font-size: 24;
    line-height: 1.2;
    font-weight: 600;
    margin: 4 0;
    padding-top: 3;
    border-top: 1;
    border-color: layout-border;
  }

  > h1 + h2,
  > h2:first-child {
    border-top: 0;
    margin-top: 0;
    padding-top: 0;
  }

  > h3 {
    font-size: 18;
    line-height: 1.2;
    font-weight: 600;
    margin: 4 0 3;

    ${down(
      'sm',
      css`
        overflow-wrap: break-word;
        word-break: break-word;
      `,
    )}
  }

  > h4 {
    font-weight: 500;
    font-size: 16;
    line-height: 1.2;
    margin: 3 0;
  }

  > h4 + p {
    margin-top: 3;
  }

  > ul + p {
    margin-top: 2;
  }

  .editor {
    background-color: editor-background;
    color: editor-text;
    padding: 3 4;
    margin: 4 -3;
    overflow: auto;
    font-size: 14;
    line-height: 1.45;
    border-radius: base;

    ${down(
      'sm',
      css`
        margin-left: -4;
        margin-right: -4;
        border-radius: 0;
      `,
    )}
  }

  > code {
    background-color: editor-background;
    border-radius: base;
    color: inherit;
    font-family: SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono,
      Courier New, monospace;
    font-size: 85%;
    padding: 1 2;
  }

  img {
    max-width: 100%;
    background-color: img-background-color;
    border: 5px solid;
    border-color: img-background-color;
  }

  details {
    background-color: answer-background-color;
    //border-radius: 10px;
    border: 1px solid #999;
    padding: 0.5em 0.5em 0;
    margin-top:0.5em;
  }

  details summary {
    font-size: 18;
    padding: 0.5em;
    margin: -0.5em -0.5em 0;
    padding: 0.5em;
    display: block;
    background-color: question-header-color;
    color:#fff;
    font-weight:400;
    cursor:pointer;
  }

  details img {
    background-color: answer-background-color;
    border:solid 5px;
    border-color: answer-background-color;
  }

  details summary::before {
    content: "Q.";
    color: #FFF6E9;
    margin-right: 0.5em;
    margin-left: 0.1em;
  }

  details summary[open]::after {
    content: '\f068';
  }

  details[open] {
    padding: 0.5em;
  }

  details[open] summary {
    border-bottom: 1px solid #999;
    margin-bottom: 0.5em;
  }

  details pre{
    margin-top:0em;
    border-radius:0 0 5px 5px;
  }

  p.goal {
    position: relative;
    color: #333;
    font-weight:400;
    background: #fdf7e5;
    line-height: 1.4;
    padding: 1em 1em;
    margin: 3em 0 2em !important;
    border-radius: 0 5px 5px 5px;
  }

  p.goal:after {
    /*タブ*/
    position: absolute;
    content: 'この項目のゴール';
    background: #9966cc;
    color: #fff;
    left: 0px;
    bottom: 100%;
    border-radius: 5px 5px 0 0;
    padding: 7px 10px;
    /*font-size: 0.7em;*/
    font-size: 16;
    line-height: 1;
    letter-spacing: 0.05em;
  }
  
  div.answerHeader {
    width:100%;
    background-color:#666;
    margin-top:10px;
    color:white;
    padding:5px;
    text-align:center;
    border-radius:5px 5px 0 0;
  }

  div.flowchartImg {
    width:100%;
    color:white;
    padding:15px 0;
    display:flex;
    justify-content:center;
  }

  ol,
  ul {
    margin-top: 0;
    font-size: 16;
    padding-left: 4;

    p,
    p:first-of-type {
      font-size: 16;
      margin-top: 0;
      line-height: 1.2;
    }

    li {
      margin-top: 2;
    }

    ol,
    ul {
      margin-left: 4;
      margin-top: 2;
    }
  }

  ol {
    list-style: decimal;
  }

  ul {
    list-style: disc;
  }

  > blockquote {
    font-size: 16;
    background-color: blockquote-background;
    border-left: 7;
    border-color: blockquote-border;
    padding: 1;
    margin: 3 -2;
    border-radius: blockquote;

    code {
      background-color: rgba(255, 255, 255, 0.1);
      background-blend-mode: color;
      color: on-background;
      border-radius: base;
      padding: 0 1;
    }

    p {
      margin-top: 3;

      &:first-of-type {
        margin-top: 0;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }

    a {
      transition: fast;
      color: blockquote-link;
      text-decoration: underline;

      &:hover {
        color: on-background;
      }
    }
  }

  a {
    transition: fast;
    text-decoration: underline;
    color: on-background-primary;

    &:hover {
      color: on-background-primary-dark;
    }
  }
`
