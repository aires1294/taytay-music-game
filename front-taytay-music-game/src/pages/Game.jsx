import React from 'react';
import MusicPlayer from '../components/MusicPlayer';
import InputField from '../components/InputField';
import ScoreDisplay from '../components/ScoreDisplay';
import styled, { keyframes } from 'styled-components';
import { MainContent } from '../styles/GlobalStyle';


const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
`;



const neonGradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;


const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;



const Logo = styled.h1`
  font-size: 4.5rem;
  font-family: 'Playfair Display', serif;
  background: linear-gradient(90deg, #a02652, #5e1c76, #832d91);
  background-size: 300% 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${neonGradient} 6s ease infinite;
  text-shadow: 0 0 12px rgba(160, 38, 82, 0.4);
  margin-top: 40px;
  text-align: center;
  width: 100%;
`;





export default function Game() {
  return (
<GameContainer>
  <Logo>TayTay Music Game</Logo>

  <MainContent>
    <ScoreDisplay score={120} />
    <MusicPlayer />
    <InputField />
  </MainContent>
</GameContainer>
  );
}



