import { useState } from "react";
import { Container } from "react-bootstrap";

import DashboardNavbar from "../components/DashboardNavbar";
import StudentDashboard from "../components/StudentDashboard";
import CourseDashboard from "../components/CourseDashboard";

function Dashboard() {
  const [activeTab, setActiveTab] = useState("students");

  const currentUser = JSON.parse(localStorage.getItem("user"));

  return (
    <Container className="mt-4">
      <DashboardNavbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === "students" ? (
        <StudentDashboard currentUser={currentUser} />
      ) : (
        <CourseDashboard currentUser={currentUser} />
      )}
    </Container>
  );
}

export default Dashboard;
