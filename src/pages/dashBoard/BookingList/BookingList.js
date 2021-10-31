import axios from "axios";
import { useEffect, useState } from "react";
import { Container, OverlayTrigger, Popover, Button } from "react-bootstrap";
import swal from "sweetalert";
import useAuth from "../../../hooks/useAuth";
import "./BookingList.css";

const BookingList = () => {
  const [myOrder, setMyOrder] = useState([]);
  const { allContext } = useAuth();
  const { user } = allContext;

  useEffect(() => {
    let uri = "https://solotraveler-server.herokuapp.com/order";
    axios.get(uri).then((result) => {
      setMyOrder(result.data.reverse());
    });
  }, []);
  console.log(myOrder);

  const handleDeleteBookingList = (id) => {
    let uri = `https://solotraveler-server.herokuapp.com/order/${id}`;
    axios.delete(uri).then(() => {
      const filteredOrder = myOrder.filter((item) => item._id !== id);
      setMyOrder(filteredOrder);
      swal("Successfull!", "Booking Deleted Successfully!", "success");
    });
  };
  // const popover = (
  //   <Popover id="popover-basic">
  //     <Popover.Header as="h3">Popover right</Popover.Header>
  //     <Popover.Body>
  //       And here's some <strong>amazing</strong> content. It's very engaging.
  //       right?
  //     </Popover.Body>
  //   </Popover>
  // );

  // const Example = ({ id }) => (
  //   <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
  //     <Button
  //       onClick={() => handleDeleteBookingList(id)}
  //       size="sm"
  //       variant="success"
  //     >
  //       Delete
  //     </Button>
  //   </OverlayTrigger>
  // );

  return (
    <div className="my_order">
      <Container>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Email</th>
              <th scope="col">Place</th>
              <th scope="col">Tour Cost</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {myOrder.map((item) => {
              return (
                <tr key={item._id + "fsdf"}>
                  <th scope="row">1</th>
                  <td>{item.userEmail}</td>
                  <td>{item.place}</td>
                  <td>
                    {item.priceDetails.usd.amount}
                    {item.priceDetails.usd.symble}
                  </td>
                  <td>
                    {/* <Example id={item._id}></Example> */}
                    <Button
                      onClick={() => handleDeleteBookingList(item._id)}
                      size="sm"
                      variant="success"
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Container>
    </div>
  );
};

export default BookingList;
