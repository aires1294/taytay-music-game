import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Input = styled.input`
  padding: 10px;
  width: 260px;
  border: none;
  border-radius: 20px;
  background: #2b2b2b;
  color: white;
  font-size: 1rem;
  text-align: center;
  outline: none;
`;

const Button = styled.button`
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

export default function InputField() {
  return (
    <Container>
      <Input placeholder="Type the song name..." />
      <Button>Confirmar</Button>
    </Container>
  );
}

