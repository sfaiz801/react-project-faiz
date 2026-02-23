import { useState } from "react";
import {
    Navbar, Nav, NavDropdown, Button, Container,
    Offcanvas,
} from "react-bootstrap";
import {
    GlobeAmericas, EnvelopeFill, TelephoneFill,
} from "react-bootstrap-icons";

const RBNavbar = () => {
    const [showContact, setShowContact] = useState(false);

    return (
        <>
            <Navbar bg="white" expand="lg" className="border-bottom shadow-sm px-3 py-2">
                <Container fluid>
                    {/* Brand Logo */}
                    <Navbar.Brand
                        href="#"
                        className="d-flex align-items-center justify-content-center text-white fw-bold me-4"
                        style={{
                            backgroundColor: "#111",
                            width: "40px",
                            height: "40px",
                            borderRadius: "6px",
                            fontSize: "15px",
                            textDecoration: "none",
                        }}
                    >
                        RB
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="main-navbar" />

                    <Navbar.Collapse id="main-navbar">
                        {/* Left Nav Links */}
                        <Nav className="me-auto align-items-lg-center gap-1">
                            <Nav.Link href="#home" className="text-dark fw-medium">Home</Nav.Link>
                            <Nav.Link href="#services" className="text-dark fw-medium">Services</Nav.Link>

                            {/* Company Dropdown */}
                            <NavDropdown title="Company" id="company-dropdown" className="fw-medium">
                                <NavDropdown.Item href="#about">About Us</NavDropdown.Item>
                                <NavDropdown.Item href="#team">Our Team</NavDropdown.Item>
                                <NavDropdown.Item href="#infra">Infrastructure</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#testimonials">Testimonials</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>

                        {/* Right Buttons */}
                        <div className="d-flex align-items-center gap-2 mt-2 mt-lg-0">
                            <Button variant="primary" style={{ borderRadius: "6px", fontWeight: 500, minWidth: "75px" }}>
                                Login
                            </Button>
                            <Button variant="outline-primary" style={{ borderRadius: "6px", fontWeight: 500, minWidth: "75px" }}>
                                Sign Up
                            </Button>
                            <Button
                                variant="dark"
                                style={{ borderRadius: "6px", fontWeight: 500, minWidth: "85px" }}
                                onClick={() => setShowContact(true)}
                            >
                                Contact
                            </Button>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Offcanvas — Contact Panel */}
            <Offcanvas
                show={showContact}
                onHide={() => setShowContact(false)}
                placement="end"
                style={{ width: "320px" }}
            >
                <Offcanvas.Header closeButton style={{ borderBottom: "1px solid #e5e7eb" }}>
                    <Offcanvas.Title style={{ fontSize: "16px", fontWeight: 600, color: "#555" }}>
                        Contact Us
                    </Offcanvas.Title>
                </Offcanvas.Header>

                <Offcanvas.Body style={{ padding: "24px" }}>
                    <h5 className="fw-bold mb-4" style={{ fontSize: "22px" }}>
                        We are here to help you!
                    </h5>

                    <hr className="mb-4" />

                    <p className="fw-semibold mb-3" style={{ fontSize: "16px" }}>Indixpert</p>

                    {/* Offices */}
                    <div className="mb-4">
                        <p className="d-flex align-items-center gap-2 mb-1 fw-medium text-secondary" style={{ fontSize: "14px" }}>
                            <GlobeAmericas size={14} /> Our Offices :
                        </p>
                        <p className="mb-0 ms-4" style={{ fontSize: "13px", color: "#333" }}>1: Hyderabad, Telangana, India</p>
                        <p className="mb-0 ms-4" style={{ fontSize: "13px", color: "#333" }}>2: Gurugram, Haryana, India</p>
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <p className="d-flex align-items-center gap-2 mb-1 fw-medium text-secondary" style={{ fontSize: "14px" }}>
                            <EnvelopeFill size={13} /> Email
                        </p>
                        <p className="mb-0 ms-4" style={{ fontSize: "13px", color: "#333" }}>contact@indixpert.com</p>
                    </div>

                    {/* Phone */}
                    <div className="mb-4">
                        <p className="d-flex align-items-center gap-2 mb-1 fw-medium text-secondary" style={{ fontSize: "14px" }}>
                            <TelephoneFill size={13} /> Phone
                        </p>
                        <p className="mb-0 ms-4" style={{ fontSize: "13px", color: "#333" }}>(+91) 778 899 2897</p>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default RBNavbar;