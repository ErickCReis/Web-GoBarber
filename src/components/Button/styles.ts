import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  height: 56px;
  font-weight: 500;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  margin-top: 16px;
  color: #312e38;
  background: #ff9000;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;
