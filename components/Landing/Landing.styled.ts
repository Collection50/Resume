import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    transform: translateY(20%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const LandingContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  width: 100%;
  height: 100%;
`;

export const Text = styled.div`
  color: #171717;

  display: flex;
  gap: 10px;

  text-align: center;
  font-size: 3em;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.975px;

  animation:
    ${slideIn} 1s ease-in-out,
    ${fadeIn} 1s ease-in-out;
`;

export const Hilight = styled.p<{ $color: string }>`
  color: ${({ $color }) => $color};
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
