import styled from 'styled-components';
import { motion } from 'framer-motion';

export const TitleContainer = styled.div`
  line-height: 150%;

  display: flex;
  gap: 8px;

  margin-top: 48px;
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -0.36px;

  color: #fd853a;
`;

export const Date = styled.div`
  color: #845f5f;

  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.24px;
`;

export const Contribution = styled.div`
  font-size: 24px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.36px;

  margin-top: 57px;
  margin-bottom: 43px;
`;

export const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SubTitle = styled(motion.div)`
  font-size: 20px;
  font-weight: 600;
  line-height: 180%;
  letter-spacing: -0.3px;

  margin-bottom: 40px;
`;

export const Ul = styled.ul`
  margin-bottom: 50px;
`;

export const Element = styled(motion.li)`
  font-size: 20px;
  font-weight: 500;
  line-height: 1.8;

  margin-left: 20px;
`;
