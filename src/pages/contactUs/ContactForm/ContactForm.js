import { Col, Container, Row } from "react-bootstrap";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact_form">
      <Container>
        <Row>
          <Col lg="6">
            <p>
              If you have an inquiry or would like more information about any of
              our tours, please use the contact form below! We will get back to
              you within 24 hours.
            </p>
            <ul>
              <li>
                <span>Phone:</span>+ 12 43223354
              </li>
              <li>
                <span>Mail:</span>solo@traveler.com
              </li>
            </ul>
          </Col>
          <Col lg="6">
            <div className="contact_form">
              <form>
                <h3>Contact Form</h3>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email Address" />
                <textarea placeholder="Message" cols="30" rows="5"></textarea>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactForm;
