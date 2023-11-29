import { Button, Image, Modal } from "react-bootstrap";

const ProfileModal = ({ show, onHide, authData }) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Your profile
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex justify-content-center">
          <Image
            id="profileModal"
            src={authData.profilePic}
            alt="Profile image"
            draggable="false"
            roundedCircle
          />
        </div>
        <h4 className="text-center mt-3">{authData.name}</h4>
        <h4 className="text-center">Email: {authData.email}</h4>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProfileModal;
