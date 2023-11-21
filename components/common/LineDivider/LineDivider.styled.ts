import styled from 'styled-components';

export const Hr = styled.hr<{ color: string }>`
  width: 100%;
  height: 1px;
  border: 0;
  background: ${({ color }) => color};
`;
