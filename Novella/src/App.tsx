import { Content } from "./components/Content/Content";
import { Settings } from "./components/Settings/Settings";
import { GlobalStyled } from "./styles/global";
import { Container } from "./styles/wrapper";

function App() {

  return (
    <>
      <GlobalStyled />
      <Container>
        <Settings />
        <Content />
      </Container>
    </>
  )
}

export default App
