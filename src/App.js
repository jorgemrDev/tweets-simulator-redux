import { Container } from "react-bootstrap";
import Menu from "./components/Menu";

function App() {
  return (
    <>
      <Menu />
      <Container className="mt-5">
        <h1 className="text-center">Tweets</h1>
      </Container>
    </>
  );
}

export default App;
