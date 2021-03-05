import { useState } from "react";
import { Form, Button, FormGroup, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { validationFormAddTweetAction } from "../actions/validationsActions";
import { addTweetAction } from "../actions/tweetsActions";
import uuid from "uuid/dist/v4";
import moment from "moment";
import { opencloseAddTweetmodalAction } from "../actions/modalsActions";

export default function FormAddTweet() {
  const [formValue, setFormValue] = useState({
    name: "",
    tweet: "",
  });

  const dispatch = useDispatch();
  const errorForm = (state) => dispatch(validationFormAddTweetAction(state));
  const addTweet = (state) => dispatch(addTweetAction(state));
  const closeModal = (state) => dispatch(opencloseAddTweetmodalAction(state));
  const errorFormValue = useSelector(
    (state) => state.validations.errorFormAddTweet
  );

  const onChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, tweet } = formValue;
    if (!name || !tweet) {
      errorForm(true);
    } else {
      errorForm(false);
      addTweet({
        id: uuid(),
        name,
        tweet,
        date: moment(),
      });
      closeModal(false);
    }
  };

  return (
    <Form className="m-3" onChange={onChange} onSubmit={onSubmit}>
      <Form.Group>
        <h1>Nuevo tweet</h1>
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          name="name"
          placeholder="Escribe tu nombre"
        ></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Control
          as="textarea"
          type="text"
          name="tweet"
          row="3"
          placeholder="Qué estás pensando"
        ></Form.Control>
        <Button variant="primary" type="submit">
          Enviar Tweet
        </Button>
      </Form.Group>

      {errorFormValue && (
        <Alert variant="danger" className="mt-4">
          Todos los campos son obligatorios
        </Alert>
      )}
    </Form>
  );
}
