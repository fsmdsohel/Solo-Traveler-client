import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import BookingCard from "../../shared/BookingCard/BookingCard";
import SectionHeader from "../../shared/SectionHeader/SectionHeader";
import "./Booking.css";

const Booking = () => {
  const [bookingData, setBookingData] = useState([]);
  useEffect(() => {
    axios
      .get("https://solotraveler-server.herokuapp.com/booking-home")
      .then(function (response) {
        // handle success
        setBookingData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  const data = {
    title: "Flash Deals",
    header: "We've Got Some Great Deals",
  };
  return (
    <div className="booking">
      <Container>
        <SectionHeader data={data}></SectionHeader>
        <Row className="g-3 my-4">
          {bookingData?.map((item) => {
            const itm = { ...item, page: "home" };
            return (
              <Col key={item._id} lg="4">
                <BookingCard bookingData={itm}></BookingCard>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Booking;
