import axios from "axios";
import { useEffect, useState } from "react";
import {
  Table,
  Button,
  Container,
  Modal,
  Form,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function Dashboard() {
  const [users, setUsers] = useState([]);

  const [showModal, setShowModal] = useState(false);

  const [editUser, setEditUser] = useState({
    id: "",
    name: "",
    email: "",
    courses: [],
  });

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/users"
      );

      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  console.log('====================================');
  console.log(fetchUsers);
  console.log('====================================');

  const deleteUser = async (id) => {
    if (!window.confirm("Delete User?")) return;

    try {
      await axios.delete(
        `http://localhost:5000/api/users/${id}`
      );

      fetchUsers();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (user) => {
    setEditUser({
      id: user.id,
      name: user.name,
      email: user.email,
      courses: user.courses
        ? user.courses.split(",")
        : [],
    });

    setShowModal(true);
  };

  const handleCourseChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setEditUser({
        ...editUser,
        courses: [...editUser.courses, value],
      });
    } else {
      setEditUser({
        ...editUser,
        courses: editUser.courses.filter(
          (course) => course !== value
        ),
      });
    }
  };

  const handleChange = (e) => {
    setEditUser({
      ...editUser,
      [e.target.name]: e.target.value,
    });
  };

  const updateUser = async () => {
    try {
      await axios.put(
        `http://localhost:5000/api/users/${editUser.id}`,
        {
          name: editUser.name,
          email: editUser.email,
          courses: editUser.courses,

        }
      );

      setShowModal(false);

      fetchUsers();

      alert("Student Updated Successfully");
    } catch (error) {
      console.log(error);
      alert("Failed to Update Student");
    }
  };

  return (
    <Container className="mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Student Dashboard</h2>

        <Link to="/register">
          <Button variant="success">
            Add Student
          </Button>
        </Link>
      </div>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Courses</th>
            <th width="180">Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>

                <td>{user.name}</td>

                <td>{user.email}</td>
                <td>{user.courses}</td>

                <td>
                  <Button
                    size="sm"
                    variant="warning"
                    className="me-2"
                    onClick={() => handleEdit(user)}
                  >
                    Edit
                  </Button>

                  <Button
                    size="sm"
                    variant="danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="4"
                className="text-center"
              >
                No Students Found
              </td>
            </tr>
          )}
        </tbody>
      </Table>

      {/* Edit Student Modal */}

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Edit Student
          </Modal.Title>
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
              <Form.Label>Courses</Form.Label>

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
    </Container>
  );
}

export default Dashboard;