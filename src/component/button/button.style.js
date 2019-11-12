import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 0 24px;
  border-radius: 20px;
  height: 40px;
  line-height: 40px;
  justify-self: center;
  border: 0;
  background-color: rgb(92, 32, 213);
  color: white;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  
  &::after {
    content: '${({ label }) => label}';
    color: rgb(92, 32, 213);
    background-color: white;
    position: absolute;
    top: 20px;
    left: 0;
    width: 100%;
    height: 100%;
    transition: 100ms;
  }

  &:hover::after {
    ${({ label }) => label ? 'top: 0;' : ''}
  }

  & > span:last-child{
    padding-left: 8px;
  }
  & > span:empty{
    display: none;
  }
`
