import axios from "axios";
import { useEffect, useState } from "react";
import { Table, Button, Container, Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import EditStudentModal from "./EditStudentModal";

function StudentDashboard({ currentUser }) {
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
      const response = await axios.get("http://localhost:5000/api/users");

      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (currentUser.role === "admin") {
      fetchUsers();
    }
  }, []);

  const deleteUser = async (id) => {
    if (!window.confirm("Delete User?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/users/${id}`);

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
      courses: user.courses ? user.courses.split(",") : [],
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
        courses: editUser.courses.filter((course) => course !== value),
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
      await axios.put(`http://localhost:5000/api/users/${editUser.id}`, {
        name: editUser.name,
        email: editUser.email,
        courses: editUser.courses,
      });

      setShowModal(false);

      fetchUsers();

      alert("Student Updated Successfully");
    } catch (error) {
      console.log(error);

      alert("Failed to Update Student");
    }
  };

  return (
    <Container>
      {/* Show Add Student button only for Admin */}

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Student Dashboard</h2>

        {currentUser.role === "admin" && (
          <Link to="/register">
            <Button variant="success">Add Student</Button>
          </Link>
        )}
      </div>

      {/* Only Admin can see Student CRUD */}

      {currentUser.role === "admin" ? (
        <>
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
                  <td colSpan="5" className="text-center">
                    No Students Found
                  </td>
                </tr>
              )}
            </tbody>
          </Table>

          {/* Edit Modal */}

          <EditStudentModal
            show={showModal}
            setShowModal={setShowModal}
            editUser={editUser}
            handleChange={handleChange}
            handleCourseChange={handleCourseChange}
            updateUser={updateUser}
          />
        </>
      ) : (
        <div className="mt-4">
          <h4>Welcome {currentUser.name}</h4>

          <hr />

          <p>
            <strong>Name:</strong> {currentUser.name}
          </p>

          <p>
            <strong>Email:</strong> {currentUser.email}
          </p>

          <p>
            <strong>Courses:</strong> {currentUser.courses}
          </p>
        </div>
      )}
    </Container>
  );
}

export default StudentDashboard;
