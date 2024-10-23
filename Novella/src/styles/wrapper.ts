import styled, { css } from "styled-components";

type PropsWrapper = {
  $big?: boolean;
}

export const Wrapper = styled.div<PropsWrapper>`
  display: flex;
  flex-direction: column;
  gap: 15px;
  ${props => {
    if (props.$big) {
      return css`
        justify-content: space-between;
        padding-bottom: 30px;
        width: 100%;
        height: 100%;
      `
    }
  }};

  & h3 {
    margin: 0;
    margin-bottom: 20px;
  }

  @media (max-width: 766px) {
    & h3 {
      margin-bottom: 10px;
    }
  }
`

export const Container = styled.div`
  display: flex;
  gap: 30px;
  margin: 0 auto;
  padding: 0 30px;
  max-width: 1440px;
  width: 100%;
  height: 100%;

  @media (max-width: 766px) {
    flex-direction: column;
    padding: 0 10px;
  }
`
