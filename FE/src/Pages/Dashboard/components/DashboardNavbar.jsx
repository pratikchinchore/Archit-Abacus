import { Nav } from "react-bootstrap";

function DashboardNavbar({
    activeTab,
    setActiveTab,
}) {
    return (
        <Nav
            variant="pills"
            className="mb-4"
        >
            <Nav.Item>

                <Nav.Link
                    active={
                        activeTab === "students"
                    }
                    onClick={() =>
                        setActiveTab(
                            "students"
                        )
                    }
                >
                    Student Dashboard
                </Nav.Link>

            </Nav.Item>

            <Nav.Item>

                <Nav.Link
                    active={
                        activeTab === "courses"
                    }
                    onClick={() =>
                        setActiveTab(
                            "courses"
                        )
                    }
                >
                    Courses
                </Nav.Link>

            </Nav.Item>

        </Nav>
    );
}

export default DashboardNavbar;