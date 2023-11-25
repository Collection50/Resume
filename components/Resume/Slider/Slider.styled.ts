import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrapper = styled(motion.div)`
  display: flex;

  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 600px;
  background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);
`;

export const SlideWrap = styled.div`
  width: 300px;
  height: 340px;
`;

export const Box = styled(motion.img)`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  width: 300px;
  height: 300px;

  background-color: white;
  border-radius: 20px;
  box-shadow:
    0 2px 3px rgba(0, 0, 0, 0.1),
    0 10px 20px rgba(0, 0, 0, 0.06);
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: 600;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  margin-bottom: 10px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;

  margin-top: 20px;
`;

export const Button = styled.button`
  all: unset;

  font-weight: 600;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 60px;
  height: 30px;

  border-radius: 6px;
  background: white;
  cursor: pointer;

  transition: color 0.3s ease-in-out;

  &:hover {
    color: #fd853a;
  }
`;

export const boxVariants = {
  entry: (back: boolean) => ({
    x: back ? -500 : 500,
    opacity: 0,
    scale: 0,
  }),
  center: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.5 },
  },
  exit: (back: boolean) => ({
    x: back ? 500 : -500,
    opacity: 0,
    scale: 0,
    transition: { duration: 0.5 },
  }),
};
