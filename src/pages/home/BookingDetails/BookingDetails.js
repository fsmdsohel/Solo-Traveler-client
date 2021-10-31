import { useHistory } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import "./BookingDetails.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import swal from "sweetalert";

const BookingDetails = () => {
  const { allContext } = useAuth();
  const { user } = allContext;
  const [booking, setBooking] = useState({});
  const history = useHistory();
  const { id, page } = useParams();

  console.log(user);

  useEffect(() => {
    let uri = `https://solotraveler-server.herokuapp.com/booking/${id}`;
    axios.get(uri).then((result) => {
      setBooking(result.data);
    });
  }, []);

  const handleBookNow = ({ _id, ...rest }) => {
    const bookingData = { ...rest, userEmail: user.email };
    console.log(bookingData);
    let uri = "https://solotraveler-server.herokuapp.com/order";
    axios.post(uri, bookingData).then((result) => {
      if (page === "home") {
        history.push("/home");
      } else {
        history.push("/listing");
      }
      swal("Congrats!", "Successfully Booking Added!", "success");
    });
  };

  return (
    <>
      <div className="booking_header">
        <Container>
          <Row>
            <Col lg="10" className="booking_header_content">
              <small>{booking?.place}</small>
              <h4>
                Sapa Trekking Tours – {booking.durationDetails?.time}{" "}
                {booking.durationDetails?.timeStatus}{" "}
                {booking.durationDetails?.time} Night Stay At Homestay
              </h4>
              <div>
                <span>Home</span> <i className="fas fa-circle"></i>
                <p>
                  Sapa Trekking Tours – {booking.durationDetails?.time}{" "}
                  {booking.durationDetails?.timeStatus}{" "}
                  {booking.durationDetails?.time} Night Stay At Homestay
                </p>
              </div>
            </Col>
            <Col
              lg="2"
              className="d-flex flex-row justify-content-end booking_header_content"
            >
              <div className="fav_icon me-3">
                <i className="far fa-heart"></i>
              </div>
              <div className="fav_icon">
                <i className="fas fa-share"></i>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="booking_Details_details">
        <Container>
          <Row>
            <Col lg="4" className="booking_details_card">
              <h4>Overview</h4>
              <p className="mb-5">{booking.description}</p>
              <div className="w-75">
                <Row>
                  <Col lg="12" className="d-flex justify-content-between">
                    <div className="d-flex booking_details_i">
                      <i className="far fa-calendar-alt"></i>
                      <div>
                        <p>Duration</p>
                        <small>
                          {booking.durationDetails?.time}{" "}
                          {booking.durationDetails?.timeStatus}
                        </small>
                      </div>
                    </div>
                    <div className="d-flex booking_details_i">
                      <i className="far fa-calendar-alt"></i>
                      <div>
                        <p>Tour Type</p>
                        <small>Daily Tour</small>
                      </div>
                    </div>
                  </Col>
                  <Col lg="12" className="d-flex justify-content-between">
                    <div className="d-flex booking_details_i">
                      <i className="fas fa-microphone"></i>
                      <div>
                        <p>Language</p>
                        <small>English</small>
                      </div>
                    </div>
                    <div className="d-flex booking_details_i">
                      <i className="far fa-calendar-alt"></i>
                      <div>
                        <p>Group Size</p>
                        <small>{booking.groupSize} people</small>
                      </div>
                    </div>
                  </Col>
                  <h4>Price: $100</h4>
                  <Col lg="12" className="d-flex book_Now_btn my-3">
                    <button
                      onClick={() => handleBookNow(booking)}
                      className="btn-custom"
                    >
                      BOOK NOW
                    </button>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg="8">
              <div className="booking_image_div">
                <img src={booking.image} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default BookingDetails;
