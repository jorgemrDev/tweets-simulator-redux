import { Modal as ModalB } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { opencloseAddTweetmodalAction } from "../actions/modalsActions";

export default function Modal(props) {
  const { children } = props;
  const dispatch = useDispatch();
  const closeModal = (state) => {
    dispatch(opencloseAddTweetmodalAction(state));
  };

  const isOpenModal = useSelector((state) => state.modals.stateModalAddTweet);
  return (
    <ModalB
      show={isOpenModal}
      size="lg"
      centered
      onHide={() => closeModal(false)}
    >
      {children}
    </ModalB>
  );
}
