import { useState } from "react";
import { Modal, Button, Form, InputGroup } from "react-bootstrap";
import { EnvelopeFill } from "react-bootstrap-icons";

const SubscribeModal = () => {
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubscribe = () => {
        if (email.trim()) {
            alert(`Subscribed with: ${email}`);
            setEmail("");
            handleClose();
        }
    };

    return (
        <div
            style={{
                backgroundColor: "#808080",
                minHeight: "100vh",
                padding: "20px",
            }}
        >
            {/* Subscribe Button */}
            <Button
                variant="primary"
                onClick={handleShow}
                className="d-flex align-items-center gap-2"
                style={{
                    backgroundColor: "#1a3a6b",
                    border: "none",
                    borderRadius: "6px",
                    fontWeight: 500,
                }}
            >
                <EnvelopeFill size={15} />
                Subscribe
            </Button>

            {/* Modal */}
            <Modal
                show={show}
                onHide={handleClose}
                centered
                backdrop="static"
                style={{ backdropFilter: "none" }}
            >
                <Modal.Header
                    closeButton
                    style={{ borderBottom: "1px solid #e5e7eb", paddingBottom: "12px" }}
                >
                    <Modal.Title style={{ fontSize: "22px", fontWeight: 700, color: "#111" }}>
                        Don't miss out
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body style={{ paddingTop: "16px", paddingBottom: "24px" }}>
                    <p style={{ color: "#444", fontSize: "14px", marginBottom: "16px" }}>
                        Signup for our newsletter to stay upto date.
                    </p>

                    <InputGroup>
                        <Form.Control
                            type="email"
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                            style={{
                                borderRadius: "6px 0 0 6px",
                                fontSize: "14px",
                                color: "#555",
                            }}
                        />
                        <Button
                            variant="outline-secondary"
                            onClick={handleSubscribe}
                            style={{
                                borderRadius: "0 6px 6px 0",
                                fontSize: "14px",
                                fontWeight: 500,
                                color: "#333",
                                borderColor: "#ced4da",
                            }}
                        >
                            Subscribe
                        </Button>
                    </InputGroup>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default SubscribeModal;