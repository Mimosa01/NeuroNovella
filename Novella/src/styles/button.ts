import styled from "styled-components";

type PropsButton = {
  $long?: boolean;
}

export const Button = styled.button<PropsButton>`
  padding: ${props => props.$long ? '10px' : '5px'};
  ${props => props.$long && 'width: 60%'};
  border: 1px solid #333;
  background-color: white;
  cursor: pointer;

  @media (max-width: 766px) {
    ${props => props.$long && 'width: 100%'};
  }
`
