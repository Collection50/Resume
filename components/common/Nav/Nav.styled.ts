import Link from 'next/link';
import styled from 'styled-components';

export const NavContainer = styled.nav`
  position: fixed;

  top: 20px;
  left: 50%;
  transform: translate(-50%, 0);

  z-index: 9999;
`;

export const NavButtonContainer = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 350px;
  height: 56px;

  border-radius: 50px;

  background: #171717;
`;

export const NavButton = styled(Link)<{ selected: boolean }>`
  font-size: 18px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 75px;
  height: 40px;

  background: ${({ selected }) => (selected ? '#FD853A' : '#171717')};
  border-radius: 60px;
  text-decoration: none;
  color: white;

  transition:
    background 0.3s ease-in-out,
    color 0.3s ease-in-out;

  &:hover {
    color: ${({ selected }) => (selected ? 'white' : 'black')};
    background: #fd853a;
  }
`;
