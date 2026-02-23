import { Accordion, Container } from "react-bootstrap";
import { useState } from "react";

const RBAccordion = () => {
    const [activeKey, setActiveKey] = useState("0");

    const handleSelect = (eventKey) => {
        setActiveKey(eventKey === activeKey ? null : eventKey);
    };

    const items = [
        { key: "0", question: "What is the cost of an online course?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo hendrerit interdum. Pellentesque id elit ac lorem feugiat congue. Nam odio leo, viverra vitae libero quis, porttitor egestas ex." },
        { key: "1", question: "Do I need to visit any physical location?", answer: "No physical visit is required. All courses are conducted online." },
        { key: "2", question: "What are the technology requirements?", answer: "You need a stable internet connection and a device like a laptop or mobile." },
        { key: "3", question: "How can I ask questions or clear doubts?", answer: "You can ask questions during live sessions or through discussion forums." },
    ];

    return (
        <Container className="mt-5">
            <Accordion activeKey={activeKey} onSelect={handleSelect}>
                {items.map(({ key, question, answer }) => (
                    <Accordion.Item eventKey={key} key={key}>
                        <Accordion.Header>
                            <span className="fw-bold text-dark">{question}</span>
                        </Accordion.Header>
                        <Accordion.Body>{answer}</Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
        </Container>
    );
};

export default RBAccordion;