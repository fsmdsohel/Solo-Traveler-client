import { Container } from "react-bootstrap";
import "./SignMeUp.css";

const SignMeUp = () => {
  return (
    <div className="sign_me_up">
      <Container className="d-flex justify-content-center">
        <div className="d-flex flex-column justify-content-center w-100">
          <label htmlFor="">
            Hot Deals. Awesome Chat. Straight to Your Inbox
          </label>
          <div className="form_group">
            <input
              type="text"
              className="form-control--solo"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="EMAIL"
              className="form-control--solo"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="form-submit">
            <input type="submit" value="Sign Me Up" className="btn-custom" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SignMeUp;
