import { Container, Navbar, Button } from "react-bootstrap";
import Logo from "../assets/img/redux.png";

export default function Menu() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <img
            src={Logo}
            alt="Tewwts simulator redux"
            width="30"
            height="30"
            className="d-inline-block align-top mr-4"
          ></img>
          Tweets Simulator Redux
        </Navbar.Brand>
        <Button variant="outline-success">Nuevo Tweet</Button>
      </Container>
    </Navbar>
  );
}
