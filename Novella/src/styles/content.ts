import styled from "styled-components";

type PropsMessage = {
  $right?: boolean;
}

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 500px;
  overflow: auto;
`

export const Message = styled.div<PropsMessage>`
  align-self: ${props => props.$right ? 'flex-end' : 'flex-start'};
  margin-top: auto;
  padding: 10px;
  width: 70%;
  border: 2px solid #333;

  & p {
    margin: 0;
    margin-bottom: 5px;
  }

  @media (max-width: 766px) {
    width: 100%;
  }
`