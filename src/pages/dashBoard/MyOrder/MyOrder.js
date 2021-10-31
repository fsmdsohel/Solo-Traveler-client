import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import "./MyOrder.css";

const MyOrder = () => {
  const [myOrder, setMyOrder] = useState([]);
  const { allContext } = useAuth();
  const { user } = allContext;

  useEffect(() => {
    let uri = `https://solotraveler-server.herokuapp.com/order/${user.email}`;
    axios.get(uri).then((result) => {
      setMyOrder(result.data.reverse());
    });
  }, []);

  return (
    <div className="my_order px-3">
      <Container>
        <div className="row gy-4">
          {myOrder.map((item) => {
            console.log(myOrder.length);
            return (
              <div
                key={item._id + "ofd"}
                className={
                  myOrder.length <= 1 ? "col col-lg-12" : "col col-lg-4"
                }
              >
                <div
                  className="card"
                  style={
                    myOrder.length <= 1
                      ? { maxWidth: "350px", width: "100%" }
                      : {}
                  }
                >
                  <img src={item.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{item.place}</h5>
                    <p className="card-text">{item.title}</p>
                    <div className="my_btn_div">
                      <button className="btn-custom my_booking_btn1">
                        View Details
                      </button>
                      <button className="btn-custom my_booking_btn">
                        Delete Booking
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default MyOrder;
