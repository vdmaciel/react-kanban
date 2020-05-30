import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
      outline: 0;
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }

    html, body, #root {
      height: 100%;
    }

    body, input, textarea {
      font-family: Roboto, sans-serif;
    }

    #root {
      display: flex;
    }

    ul {
      list-style: none;
    }

    button {
      cursor: pointer;
      &:hover { opacity: 0.9 }
      &:active { opacity: 0.8 }
      &:disabled {
        background-color: #ccc;
        color: #555;
        cursor: not-allowed;
      }
    }
`;