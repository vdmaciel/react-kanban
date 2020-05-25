import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }

    html, body, #root {
      height: 100%;
    }

    body {
      font-family: Roboto, sans-serif;
    }

    #root {
      display: flex;
    }

    ul {
      list-style: none;
    }
`;