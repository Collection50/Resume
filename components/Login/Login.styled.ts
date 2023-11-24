import styled from 'styled-components';

export const Greeting = styled.div`
  font-size: 40px;
  font-weight: 600;

  color: #fd853a;

  width: 25%;
  position: absolute;

  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: center;
`;

export const FormContainer = styled.main`
  width: 25%;
  position: absolute;

  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Form = styled.form`
  width: 100%;
`;

export const InputSection = styled.section`
  width: 100%;
  height: 128px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const InputStyle = styled.input`
  width: 100%;
  height: 56px;
  font-size: 16px;

  ::placeholder {
    color: #94a3b8;
    ${({ placeholder }) => placeholder}
  }

  :focus {
    outline: none;
    border-color: #fd853a;
  }

  padding: 12px;
  border-radius: 12px;
  border: 1px solid #e2e8f0;

  box-sizing: border-box;
  margin-bottom: 13px;
`;

export const Notice = styled.section`
  font-weight: 400;
  font-size: 12px;

  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #64748b;
`;

export const Button = styled.button`
  font-weight: 700;
  font-size: 16px;

  width: 100%;
  height: 52px;

  border: none;
  border-radius: 8px;

  cursor: pointer;
  margin-top: 55px;
  color: white;
  background: #fd853a;
`;
