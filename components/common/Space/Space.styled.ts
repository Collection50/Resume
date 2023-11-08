import styled from 'styled-components';
import type { Margin } from './Space';

export const Space = styled.div<Margin>`
  width: 100%;

  margin-top: ${({ top }) => top}px;
  margin-bottom: ${({ bottom }) => bottom}px;
`;
