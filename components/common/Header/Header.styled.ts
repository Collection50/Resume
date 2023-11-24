import Link from 'next/link';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
`;

export const Headers = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-bottom: 87px;
`;

export const Header = styled.section`
  display: flex;
  justify-content: flex-start;
`;

export const HeaderText = styled.div`
  color: #171717;

  display: flex;
  gap: 10px;

  text-align: center;
  font-size: 3em;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.975px;
`;

export const Text = styled.article`
  font-size: 18px;
  line-height: 1.75;

  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;

  margin-top: 5px;
`;

export const ContactContainer = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;

  height: 40px;

  border-radius: 50px;
  border: 1px solid #e4e7ec;
  padding: 0 10px 0 10px;

  margin-top: 30px;
  backdrop-filter: blur(7.5px);
`;

export const Contact = styled(Link)`
  font-weight: 600;

  display: flex;
  gap: 5px;
  align-items: center;

  color: black;
`;

export const ImageContainer = styled.div`
  width: 300px;
  height: 300px;

  border-radius: 50%;

  overflow: hidden;
`;
