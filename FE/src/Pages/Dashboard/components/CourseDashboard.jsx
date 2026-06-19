import { useEffect, useState } from "react";
import { Nav, Card } from "react-bootstrap";

import Abacus from "../courses/Abacus";
import Phonix from "../courses/Phonix";
import VaidikMaths from "../courses/VaidikMaths";
const courseComponents = {
  Abacus: Abacus,
  Phonix: Phonix,
  "Vaidik Maths": VaidikMaths,
};

function CourseDashboard({ currentUser }) {
  const allCourses = ["Abacus", "Phonix", "Vaidik Maths"];

  console.log("Current User:", currentUser);
  console.log("Courses:", currentUser.courses);
  console.log("Type:", typeof currentUser.courses);
  console.log("Is Array:", Array.isArray(currentUser.courses));

  const availableCourses =
  currentUser.role === "admin"
    ? allCourses
    : currentUser.courses || [];

  const [activeCourse, setActiveCourse] = useState("");
  const SelectedCourse = courseComponents[activeCourse];

  useEffect(() => {
    if (availableCourses.length > 0) {
      setActiveCourse(availableCourses[0]);
    }
  }, []);

  return (
    <div>
      <h2 className="mb-4">Courses Dashboard</h2>

      {/* Course Navigation */}

      <Nav variant="pills" className="mb-4">
        {availableCourses.map((course) => (
          <Nav.Item key={course}>
            <Nav.Link
              active={activeCourse === course}
              onClick={() => setActiveCourse(course)}
            >
              {course}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>

      {/* Selected Course */}

      <Card>
        <Card.Body>{SelectedCourse && <SelectedCourse />}</Card.Body>
      </Card>
    </div>
  );
}

export default CourseDashboard;
