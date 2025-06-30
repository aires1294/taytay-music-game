import React from 'react';
import styled from 'styled-components';

const Score = styled.div`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 20px;
`;

export default function ScoreDisplay({ score }) {
  return <Score>Score: ⭐ {score}</Score>;
}
