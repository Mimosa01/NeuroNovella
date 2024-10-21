import { Content } from "./components/Content/Content";
import { Settings } from "./components/Settings/Settings";
import { GlobalStyled } from "./styles/global";
import { Container } from "./styles/wrapper";

const TEST_TEXT = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum voluptates ipsa dolores. Officia enim magnam molestiae cum voluptas. A earum dolores perspiciatis neque culpa itaque est pariatur voluptate quae porro?';

function handleGenre(value: string): void {
  console.log(value);
}

function handleAnswer(value: string): void {
  console.log(value);
}

function handleRestart(): void {
  console.log('Restart');
}

function App() {

  return (
    <>
      <GlobalStyled />
      <Container>
        <Settings 
          onGenre={handleGenre}
          onRestart={handleRestart}
        />
        <Content 
          text={TEST_TEXT}
          onClick={handleAnswer}
        />
      </Container>
    </>
  )
}

export default App
