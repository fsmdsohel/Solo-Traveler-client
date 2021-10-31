import { useHistory } from "react-router";
import "./BookingCard.css";
import { Link } from "react-router-dom";

const BookingCard = ({ bookingData }) => {
  const history = useHistory();

  const handleBookBow = (id) => {
    if (bookingData.page === "home") {
      history.push(`/booking-details/home/${id}`);
    } else {
      history.push(`/booking-details/listing/${id}`);
    }
  };

  return (
    <div className="booking_card_wrapper">
      <div className="booking_img_wrapper">
        <div className="thumb">
          <a href="/">
            <img src={bookingData.image} alt="" />
          </a>
        </div>
        <span>{bookingData.place}</span>
      </div>
      <h4>
        <a href="/">{bookingData.title}</a>
      </h4>
      <div className="booking_description">
        <p>{bookingData.description}</p>
      </div>
      <div className="d-flex justify-content-between booking_details">
        <div className="d-flex">
          <div>
            <i className="fas fa-calendar-alt"></i>
          </div>
          <div>
            <h4>Duration</h4>
            <p>
              {bookingData.durationDetails.time}
              {bookingData.durationDetails.timeStatus}
            </p>
          </div>
        </div>
        <div className="d-flex">
          <div>
            <i className="fas fa-users"></i>
          </div>
          <div>
            <h4>Group Size</h4>
            <p>{bookingData.groupSize}</p>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between align-bookingDatas-center booking_bottom">
        <div>
          <span>
            {bookingData.priceDetails.usd.symble}
            {bookingData.priceDetails.usd.amount}
          </span>
        </div>
        <div className="booking_btn">
          <button
            onClick={() => handleBookBow(bookingData._id)}
            className="btn-custom"
            to="/booking-details"
          >
            BOOK NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
