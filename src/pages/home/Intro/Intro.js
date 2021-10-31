import { Container } from "react-bootstrap";
import "./Intro.css";

const Intro = () => {
  return (
    <div className="intro">
      <Container className="intro_wrapper">
        <div className="intro_text">
          <h1>
            Greate Trip <br /> for Solo Travellers
          </h1>
          <p>
            Since 2014, we’ve helped more than 500,000 people of all ages enjoy
            the best outdoor experience.
          </p>
          <div className="btn_div">
            <button className="btn-custom">EXPLORE TOURS</button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Intro;
