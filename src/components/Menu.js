import { Container, Navbar, Button } from "react-bootstrap";
import Logo from "../assets/img/redux.png";
import { useDispatch } from "react-redux";
import { opencloseAddTweetmodalAction } from "../actions/modalsActions";

export default function Menu() {
  const dispatch = useDispatch();
  const openCloseAddTweetmodal = (state) => {
    dispatch(opencloseAddTweetmodalAction(state));
  };

  const openModal = () => {
    openCloseAddTweetmodal(true);
  };

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
        <Button variant="outline-success" onClick={openModal}>
          Nuevo Tweet
        </Button>
      </Container>
    </Navbar>
  );
}
