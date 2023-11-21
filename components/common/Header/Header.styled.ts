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

export const Text = styled.article`
  font-size: 1em;
  line-height: 1.75;

  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
`;

export const ImageContainer = styled.div`
  width: 300px;
  height: 300px;

  border-radius: 50%;

  overflow: hidden;
`;
