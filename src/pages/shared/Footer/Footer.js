import { Col, Container, Row } from "react-bootstrap";
import facebookIcon from "../../../images/social-icon/fb-300x300.png";
import instragamIcon from "../../../images/social-icon/insta-300x300.png";
import pinterestIcon from "../../../images/social-icon/pin-300x300.png";
import twitterIcon from "../../../images/social-icon/twitter-300x300.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row className="footer_items">
          <Col lg="3" md="6" className="footer_item">
            <h3>Solo</h3>
            <p>Currencies</p>
            <select className="form-control">
              <option>USD</option>
              <option>EUR</option>
              <option>AUD</option>
            </select>
            <div className="social_icon">
              <div>
                <img src={facebookIcon} alt="" />
              </div>
              <div>
                <img src={instragamIcon} alt="" />
              </div>
              <div>
                <img src={pinterestIcon} alt="" />
              </div>
              <div>
                <img src={twitterIcon} alt="" />
              </div>
            </div>
          </Col>
          <Col lg="3" md="6" className="footer_item">
            <h4>TOUR</h4>
            <ul>
              <li>Thailand</li>
              <li>Vietnam</li>
              <li>Cambodia</li>
              <li>Korea</li>
              <li>Japan</li>
            </ul>
          </Col>
          <Col lg="3" md="6" className="footer_item">
            <h4>SUPPORT</h4>
            <ul>
              <li>Account</li>
              <li>Legal</li>
              <li>Contact</li>
              <li>Affiliate Program</li>
              <li>Privacy Policy</li>
            </ul>
          </Col>
          <Col lg="3" md="6" className="footer_item">
            <h4>USEFUL PAGES</h4>
            <ul>
              <li>Deals</li>
              <li>FAQs</li>
              <li>Why Choose Us</li>
              <li>Affiliate Program</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
