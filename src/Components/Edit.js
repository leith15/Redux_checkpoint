import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editTask } from "../Redux/Action/Action";

import "bootstrap/dist/css/bootstrap.css";
const Edit = (props) => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  function handleChangeName(e) {
    setName(e.target.value);
  }
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit your Task Here</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label> TaskName : </label>
          <input type="text" value={name} onChange={handleChangeName} />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              handleClose();
              setName("");
            }}
          >
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              let a = name;
              if (a !== "") {
                dispatch(editTask({ name: name, id: props.task.id }));
                setName("");
                handleClose();
              } else alert("you should enter the task name ");
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Edit;
