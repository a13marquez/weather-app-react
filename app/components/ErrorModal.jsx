import React, {Component, PropTypes} from 'react';
import { Modal } from 'react-bootstrap';

class ErrorModal extends Component {
  constructor(props) {
    super(props);

  }
  render(){
    var {title, message} = this.props;
    return (
      <Modal
          show={this.state.show}
          onHide={close}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
             <p>{message}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={close}>Close</Button>
          </Modal.Footer>
        </Modal>
    );
  }
}

ErrorModal.propTypes = {
    title: PropTypes.string,
    message: PropTypes.string .isRequired
};

ErrorModal.defaultProps = {
  title: 'Error'
}

export default ErrorModal;
