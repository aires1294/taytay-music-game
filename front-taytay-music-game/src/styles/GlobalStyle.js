import { createGlobalStyle } from 'styled-components';

import styled from 'styled-components';

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 420px; /* 👈 Ajuste conforme seu gosto */
  gap: 16px;
`;


export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(270deg, #f6c1d5, #d9c6f2, #f6c1d5);
    background-size: 600% 600%;
    animation: moveGradient 15s ease infinite;
  }

  @keyframes moveGradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

