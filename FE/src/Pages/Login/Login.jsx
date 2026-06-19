
import axios from "axios";
import { useState } from "react";
import { Container, Row, Col, Card, Form, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData
      );

      localStorage.setItem("token", response.data.token);

      alert("🎉 Login Successful!");

      navigate("/dashboard");
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Login failed. Please try again."
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

              <Card.Body className="p-5">

                <div className="text-center mb-4">

                  <div className="abacus-icon">
                    🧮
                  </div>

                  <h2 className="login-title">
                    Welcome Back!
                  </h2>

                  <p className="login-subtitle">
                    Let's continue your Math Adventure 🚀
                  </p>

                </div>

                {error && (
                  <Alert variant="danger">
                    {error}
                  </Alert>
                )}

                <Form onSubmit={handleLogin}>

                  <Form.Group className="mb-3">
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="📧 Enter Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="🔒 Enter Password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Button
                    type="submit"
                    className="login-btn w-100"
                    disabled={loading}
                  >
                    {loading
                      ? "Loading..."
                      : "🚀 Start Learning"}
                  </Button>

                </Form>

                <div className="text-center mt-4">

                  <span>
                    New Student? Contact With Teacher for Credentials !!
                  </span>


                </div>

              </Card.Body>

            </Card>

          </Col>

        </Row>
      </Container>
    </div>
  );
}

export default Login;
