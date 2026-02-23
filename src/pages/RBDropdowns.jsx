import { Container, Row, Col, Dropdown } from "react-bootstrap";
import {
    PersonCircle,
    Speedometer2,
    Bell,
    GearWide,
    BoxArrowRight,
    ChevronDown,
} from "react-bootstrap-icons";

// ─── Shared Dropdown Menu Items ───────────────────────────────────────────────
const ProfileMenu = () => (
    <Dropdown.Menu style={{ minWidth: "200px", padding: "8px 0", borderRadius: "10px", boxShadow: "0 4px 16px rgba(0,0,0,0.12)" }}>
        <Dropdown.Item href="#dashboard" className="d-flex align-items-center gap-2 py-2 px-3">
            <Speedometer2 size={16} /> Dashboard
        </Dropdown.Item>
        <Dropdown.Item href="#notification" className="d-flex align-items-center gap-2 py-2 px-3">
            <Bell size={16} /> Notification
        </Dropdown.Item>
        <Dropdown.Item href="#settings" className="d-flex align-items-center gap-2 py-2 px-3">
            <GearWide size={16} /> Settings
        </Dropdown.Item>
        <Dropdown.Item href="#logout" className="d-flex align-items-center gap-2 py-2 px-3">
            <BoxArrowRight size={16} /> Logout
        </Dropdown.Item>
    </Dropdown.Menu>
);

// ─── Variant 1: Filled Blue Button ────────────────────────────────────────────
const FilledDropdown = () => (
    <Dropdown>
        <Dropdown.Toggle
            variant="primary"
            id="filled-dropdown"
            className="d-flex align-items-center gap-2"
            style={{ borderRadius: "8px", padding: "8px 16px", fontWeight: 500 }}
        >
            <PersonCircle size={18} />
            Profile
        </Dropdown.Toggle>
        <ProfileMenu />
    </Dropdown>
);

// ─── Variant 2: Outlined Button ───────────────────────────────────────────────
const OutlinedDropdown = () => (
    <Dropdown>
        <Dropdown.Toggle
            variant="outline-primary"
            id="outlined-dropdown"
            className="d-flex align-items-center gap-2"
            style={{ borderRadius: "8px", padding: "8px 16px", fontWeight: 500 }}
        >
            <PersonCircle size={18} />
            Profile
            <ChevronDown size={14} className="ms-1" />
        </Dropdown.Toggle>
        <ProfileMenu />
    </Dropdown>
);

// ─── Variant 3: Avatar Image ──────────────────────────────────────────────────
const AvatarDropdown = () => (
    <Dropdown align="end">
        <Dropdown.Toggle
            as="div"
            id="avatar-dropdown"
            style={{ cursor: "pointer", display: "inline-block" }}
            bsPrefix="custom-toggle" // removes default caret
        >
            <img
                src="https://api.dicebear.com/7.x/adventurer/svg?seed=Felix&backgroundColor=b91c1c"
                alt="avatar"
                style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    border: "2px solid #dc3545",
                    backgroundColor: "#dc3545",
                    objectFit: "cover",
                }}
            />
        </Dropdown.Toggle>
        <ProfileMenu />
    </Dropdown>
);

// ─── Main Component ───────────────────────────────────────────────────────────
const ProfileDropdowns = () => {
    return (
        <Container className="mt-5">
            <Row className="align-items-start g-5">
                {/* Variant 1 */}
                <Col xs={12} md={4} className="d-flex justify-content-center">
                    <FilledDropdown />
                </Col>

                {/* Variant 2 */}
                <Col xs={12} md={4} className="d-flex justify-content-center">
                    <OutlinedDropdown />
                </Col>

                {/* Variant 3 */}
                <Col xs={12} md={4} className="d-flex justify-content-end">
                    <AvatarDropdown />
                </Col>
            </Row>
        </Container>
    );
};

export default ProfileDropdowns;