import React from 'react';
import styled from 'styled-components';

const Player = styled.div`
  background: white;
  padding: 1rem 2rem;
  border-radius: 20px;
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.1);
  width: 320px;
  text-align: center;
`;

const Button = styled.button`
  margin-top: 10px;
  background: linear-gradient(145deg, #f6c1d5, #e8c3b9);
  color: white;
  font-weight: bold;
  border: none;
  padding: 10px 24px;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: scale(1.05);
  }
`;

export default function MusicPlayer() {
  return (
    <Player>
      🎵 Tocando trecho da música...
      <br />
      <Button>▶️ Play</Button>
    </Player>
  );
}

