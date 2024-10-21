import styled from "styled-components";

type PropsInputContainer = {
  $long?: boolean;
}

export const InputContainer = styled.div<PropsInputContainer>`
  display: flex;

  & input {
    ${props => props.$long && 'width: 100%'};
    padding: 5px;
    border: 1px solid #333;
    border-right: none;
  }

  @media (max-width: 766px) {
    & input {
      width: 100%;
    }
  }
`
