import React, { Component } from "react";
import { button, Modal } from "react-bootstrap";

export const Modal_bt = (props) => {
  const [show, setShow] = React.useState(false);
  const [carouselOn, setCarouselOn] = React.useState(false);
  const [fullscreen, setFullscreen] = React.useState(true);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  const handleClose = () => {
    props.closeViewer();
    setCarouselOn(false);
    setShow(false);
  };

  const showCarousel = () => setCarouselOn(true);

  return (
    <div className="row">
      <button
        className="btn-basic btn-blue col-sm-6 mt-3 p-2 center_cl"
        onClick={() => handleShow("md-down")}
      >
        {props.name}
      </button>
      <Modal show={show} onHide={handleClose} size="lg" fullscreen={fullscreen}>
        <Modal.Header>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal_size">
          {carouselOn ? props.content2 : props.content1}
        </Modal.Body>
        <Modal.Footer>
          <button variant="success" onClick={handleClose}>
            Close
          </button>

          <button variant="success" onClick={showCarousel}>
            Open All
          </button>

          {!props.cardSetOn && (
            <button variant="success" onClick={props.closeViewer}>
              {" "}
              Close viewer{" "}
            </button>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
};
