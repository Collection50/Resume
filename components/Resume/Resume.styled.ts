import styled from 'styled-components';

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;

  padding: 130px;
`;

export const SectionContainer = styled.section`
  width: 80%;
`;

export const Headers = styled.header`
  display: flex;
  justify-content: space-between;

  margin-bottom: 87px;
`;

export const Header = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Text = styled.article`
  font-size: 1em;
  line-height: 1.75;

  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 50%;
`;
