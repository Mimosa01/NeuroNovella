import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  & h3 {
    margin: 0;
    margin-bottom: 20px;
  }
`

export const Container = styled.div`
  display: flex;
  gap: 30px;
  margin: 0 auto;
  padding: 0 30px;
  max-width: 1440px;
  width: 100%;

  @media (max-width: 766px) {
    flex-direction: column;
    padding: 0 10px;
  }
`
