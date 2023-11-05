import styled from 'styled-components';

export const LandingContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  width: 100%;
  height: 100%;
`;

export const Text = styled.div<{ $hilight?: boolean }>`
  color: #171717;

  text-align: center;
  font-size: 65px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.975px;

  color: ${({ $hilight }) => ($hilight ? '#fd853a' : '#171717')};
`;

export const HalfCircle = styled.div`
  position: absolute;

  left: 50%;
  transform: translate(-50%, 0);
  bottom: 0;

  width: 432px;
  height: 140px;

  border-top-right-radius: 1000px;
  border-top-left-radius: 1000px;

  background: #feb273;
`;
