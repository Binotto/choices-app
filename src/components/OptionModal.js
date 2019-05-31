import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleCloseModal}
        content="Selected Option"
        closeTimeoutMS={200}
        className="option_modal"
    >
        <h2 className="modal__title">Selected</h2>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button onClick={props.handleCloseModal}>Okay</button>

    </Modal>
);

export default OptionModal;