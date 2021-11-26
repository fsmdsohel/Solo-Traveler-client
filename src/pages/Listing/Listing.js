import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import bgImg from "../../images/Bg-2.png";
import BookingCard from "../shared/BookingCard/BookingCard";
import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";
import PageHeader from "../shared/PageHeader/PageHeader";
import SignMeUp from "../shared/SignMeUp/SignMeUp";
import "./Listing.css";

const Listing = () => {
  const [bookingData, setBookingData] = useState([]);
  useEffect(() => {
    axios
      .get("https://solotraveler-server.herokuapp.com/booking")
      .then(function (response) {
        // handle success
        setBookingData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);
  return (
    <>
      <Navbar></Navbar>
      <PageHeader
        image={bgImg}
        header="Pick Your Best Experience"
        title="Tour listing"
      ></PageHeader>
      <Container>
        <div className="listing_search my-5">
          <input
            type="text"
            className="search_location"
            placeholder="Search location... e.x(Vietnam, Indonesia)"
          />
          <button className="btn-custom search_btn">Search</button>
        </div>
        <Row>
          <Col lg="9" className="listing_card">
            <h3>{bookingData.length} Tours Found</h3>
            <Row className="g-3 my-4 position-relative overflow-hidden">
              <div className="loader_wrapper d-none">
                <div className="loader"></div>
              </div>
              {bookingData?.map((item) => {
                const itm = { ...item, page: "listing" };
                return (
                  <Col key={item._id} lg="6">
                    <BookingCard bookingData={itm}></BookingCard>
                  </Col>
                );
              })}
            </Row>
          </Col>
          <Col lg="3" className="listing_filter">
            <h4>Filter By</h4>
            <div className="filter_item">
              <div className="filter_title">
                <h4>Filter Price</h4>
                <i className="fa fa-angle-up"></i>
              </div>
              <div className="filter_content">
                <div className="filter_price">
                  <input className="me-2" type="number" name="" id="" />
                  <span>To</span>
                  <input className="ms-2" type="number" name="" id="" />
                </div>
              </div>
            </div>
            <div className="filter_item">
              <div className="filter_title">
                <h4>Filter Price</h4>
                <i className="fa fa-angle-up"></i>
              </div>
              <div className="filter_content">
                <ul>
                  <li className=" st-icheck-item">
                    <label>
                      <input
                        data-tax="taxonomy"
                        data-type="tour-length"
                        value="51"
                        type="checkbox"
                        name="taxonomy"
                        className="filter-tax"
                      />
                      1 - 2 weeks
                    </label>
                  </li>
                  <li className=" st-icheck-item">
                    <label>
                      <input
                        data-tax="taxonomy"
                        data-type="tour-length"
                        value="52"
                        type="checkbox"
                        name="taxonomy"
                        className="filter-tax"
                      />
                      2- 3 weeks
                    </label>
                  </li>
                  <li className=" st-icheck-item">
                    <label>
                      <input
                        data-tax="taxonomy"
                        data-type="tour-length"
                        value="53"
                        type="checkbox"
                        name="taxonomy"
                        className="filter-tax"
                      />
                      3 - 4 weeks
                    </label>
                  </li>
                  <li className="hidden st-icheck-item">
                    <label>
                      <input
                        data-tax="taxonomy"
                        data-type="tour-length"
                        value="54"
                        type="checkbox"
                        name="taxonomy"
                        className="filter-tax"
                      />
                      Over 4 weeks
                    </label>
                  </li>
                </ul>
              </div>
            </div>
            <div className="filter_item">
              <div className="filter_title">
                <h4>Group Size</h4>
                <i className="fa fa-angle-up"></i>
              </div>
              <div className="filter_content">
                <ul>
                  <li className=" st-icheck-item">
                    <label>
                      <input
                        data-tax="taxonomy"
                        data-type="group-size"
                        value="55"
                        type="checkbox"
                        name="taxonomy"
                        className="filter-tax"
                      />
                      10 - 15
                    </label>
                  </li>
                  <li className=" st-icheck-item">
                    <label>
                      <input
                        data-tax="taxonomy"
                        data-type="group-size"
                        value="56"
                        type="checkbox"
                        name="taxonomy"
                        className="filter-tax"
                      />
                      15 - 20
                    </label>
                  </li>
                  <li className=" st-icheck-item">
                    <label>
                      <input
                        data-tax="taxonomy"
                        data-type="group-size"
                        value="57"
                        type="checkbox"
                        name="taxonomy"
                        className="filter-tax"
                      />
                      20 - 25
                    </label>
                  </li>
                  <li className="hidden st-icheck-item">
                    <label>
                      <input
                        data-tax="taxonomy"
                        data-type="group-size"
                        value="58"
                        type="checkbox"
                        name="taxonomy"
                        className="filter-tax"
                      />
                      Over 25
                    </label>
                  </li>
                </ul>
              </div>
            </div>
            <div className="filter_item">
              <div className="filter_title">
                <h4>Tour Type</h4>
                <i className="fa fa-angle-up"></i>
              </div>
              <div className="filter_content">
                <ul>
                  <li className=" st-icheck-item">
                    <label>
                      <input
                        data-tax="taxonomy"
                        data-type="tour-type"
                        value="60"
                        type="checkbox"
                        name="taxonomy"
                        className="filter-tax"
                      />
                      Mutil Tours
                    </label>
                  </li>
                  <li className=" st-icheck-item">
                    <label>
                      <input
                        data-tax="taxonomy"
                        data-type="tour-type"
                        value="59"
                        type="checkbox"
                        name="taxonomy"
                        className="filter-tax"
                      />
                      Single tour
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <SignMeUp></SignMeUp>
      <Footer></Footer>
    </>
  );
};

export default Listing;
