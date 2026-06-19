import { Modal, Form, Button } from "react-bootstrap";

function EditStudentModal({
  show,
  setShowModal,
  editUser,
  handleChange,
  handleCourseChange,
  updateUser,
}) {
  return (
    <Modal
      show={show}
      onHide={() => setShowModal(false)}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Edit Student</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>

          <Form.Group className="mb-3">

            <Form.Label>
              Student Name
            </Form.Label>

            <Form.Control
              type="text"
              name="name"
              value={editUser.name}
              onChange={handleChange}
            />

          </Form.Group>

          <Form.Group>

            <Form.Label>
              Email Address
            </Form.Label>

            <Form.Control
              type="email"
              name="email"
              value={editUser.email}
              onChange={handleChange}
            />

          </Form.Group>

          <Form.Group className="mt-3">

            <Form.Label>
              Courses
            </Form.Label>

            <Form.Check
              type="checkbox"
              label="Abacus"
              value="Abacus"
              checked={editUser.courses.includes("Abacus")}
              onChange={handleCourseChange}
            />

            <Form.Check
              type="checkbox"
              label="Phonix"
              value="Phonix"
              checked={editUser.courses.includes("Phonix")}
              onChange={handleCourseChange}
            />

            <Form.Check
              type="checkbox"
              label="Vaidik Maths"
              value="Vaidik Maths"
              checked={editUser.courses.includes("Vaidik Maths")}
              onChange={handleCourseChange}
            />

          </Form.Group>

        </Form>
      </Modal.Body>

      <Modal.Footer>

        <Button
          variant="secondary"
          onClick={() => setShowModal(false)}
        >
          Cancel
        </Button>

        <Button
          variant="primary"
          onClick={updateUser}
        >
          Update Student
        </Button>

      </Modal.Footer>

    </Modal>
  );
}

export default EditStudentModal;