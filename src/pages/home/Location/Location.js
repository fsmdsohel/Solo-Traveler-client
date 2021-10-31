import { Col, Container, Row } from "react-bootstrap";
import SectionHeader from "../../shared/SectionHeader/SectionHeader";
import image1 from "../../../images/location/ammie-ngo-vcu-OZBxxRk-unsplash-scaled-270x360.jpg";
import image2 from "../../../images/location/Rectangle-84-270x360.png";
import image3 from "../../../images/location/Rectangle-86-270x360.png";
import image4 from "../../../images/location/Rectangle-87-270x360.png";
import "./Location.css";
import { Link } from "react-router-dom";

const Location = () => {
  const data = {
    title: "Location",
    header: "Where Do You Want to Travel?",
  };

  const destinationData = [
    {
      img: image1,
      location: "Thailand",
    },
    {
      img: image2,
      location: "Bali",
    },
    {
      img: image3,
      location: "Vietnam",
    },
    {
      img: image4,
      location: "Cambodia",
    },
  ];

  return (
    <div className="location">
      <Container>
        <SectionHeader data={data}></SectionHeader>
        <Row className="my-5">
          {destinationData.map((item, ind) => (
            <Col key={ind + "location"} lg="3" md="6">
              <div className="destination-item">
                <div className="image">
                  <img src={item.img} alt="" />
                </div>
                <div className="location_link">
                  <Link to="/">{item.location}</Link>
                  <i className="fas fa-arrow-right"></i>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Location;
