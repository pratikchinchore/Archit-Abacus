import axios from "axios";
import { useState } from "react";
import { Container, Row, Col, Card, Form, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    courses: []
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCourseChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setFormData({
        ...formData,
        courses: [...formData.courses, value]
      });
    } else {
      setFormData({
        ...formData,
        courses: formData.courses.filter(
          (course) => course !== value
        )
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (formData.password !== formData.confirmPassword) {
      return setError("Passwords do not match");
    }

    try {
      setLoading(true);

      await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          courses: formData.courses

        }
      );

      setSuccess("🎉 Registration Successful!");

      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);

    } catch (error) {
      setError(
        error.response?.data?.message ||
        "Registration failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">

      <div className="bubble bubble1"></div>
      <div className="bubble bubble2"></div>
      <div className="bubble bubble3"></div>
      <div className="bubble bubble4"></div>

      <Container>
        <Row className="justify-content-center align-items-center min-vh-100">

          <Col lg={5} md={7} sm={10}>

            <Card className="login-card">

              <Card.Body className="px-5">

                <div className="text-center mb-4">

                  <div className="abacus-icon">
                    🎓
                  </div>

                  <h3 className="login-title">
                    Join Our Learning Family!
                  </h3>

                  <p className="login-subtitle">
                    Start your exciting Math Journey today 🚀
                  </p>

                </div>

                {error && (
                  <Alert variant="danger">
                    {error}
                  </Alert>
                )}

                {success && (
                  <Alert variant="success">
                    {success}
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>

                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="👦 Student Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="📧 Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="🔒 Create Password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Control
                      type="password"
                      name="confirmPassword"
                      placeholder="🔐 Confirm Password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Courses</Form.Label>

                    <Form.Check
                      type="checkbox"
                      label="Abacus"
                      value="Abacus"
                      onChange={handleCourseChange}
                    />

                    <Form.Check
                      type="checkbox"
                      label="Phonix"
                      value="Phonix"
                      onChange={handleCourseChange}
                    />

                    <Form.Check
                      type="checkbox"
                      label="Vaidik Maths"
                      value="Vaidik Maths"
                      onChange={handleCourseChange}
                    />
                  </Form.Group>

                  <Button
                    type="submit"
                    className="login-btn w-100"
                    disabled={loading}
                  >
                    {loading
                      ? "Creating Account..."
                      : "🌟 Create Account"}
                  </Button>

                </Form>


              </Card.Body>

            </Card>

          </Col>

        </Row>
      </Container>

    </div>
  );
}

export default Register;
