import { Route } from "react-router-dom";
import "./DashBoard.css";
import Sidebar from "./SideBar/Sidebar";
import useAuth from "../../hooks/useAuth";
import DashBoardNav from "./DashBoardNav/DashBoardNav";
import Profile from "./Profile/Profile";
import CheckOut from "./CheckOut/CheckOut";
import BookingList from "./BookingList/BookingList";
import ManageBooking from "./ManageBooking/ManageBooking";
import AddBooking from "./AddBooking/AddBooking";
import MyOrder from "./MyOrder/MyOrder";

const DashBoard = () => {
  const { dashboard, navToggle } = useAuth();

  const asideStyle = dashboard
    ? {
        maxWidth: "250px",
        width: "100%",
        color: "#fff",
      }
    : {};

  return (
    <div className={dashboard ? "dashboard_container" : ""}>
      {dashboard ? <Sidebar styles={asideStyle}></Sidebar> : ""}
      <div className="dashboard_content">
        {dashboard ? <DashBoardNav></DashBoardNav> : ""}
        <Route path="/dashboard/profile">
          <div
            className={navToggle ? "dashboard_item " : "dashboard_item active"}
          >
            <Profile></Profile>
          </div>
        </Route>
        <Route path="/dashboard/my-order">
          <div
            className={navToggle ? "dashboard_item " : "dashboard_item active"}
          >
            <MyOrder></MyOrder>
          </div>
        </Route>
        <Route path="/dashboard/check-out">
          <div
            className={navToggle ? "dashboard_item " : "dashboard_item active"}
          >
            <CheckOut></CheckOut>
          </div>
        </Route>
        <Route path="/dashboard/booking-list">
          <div
            className={navToggle ? "dashboard_item " : "dashboard_item active"}
          >
            <BookingList></BookingList>
          </div>
        </Route>
        <Route path="/dashboard/manage-booking">
          <div
            className={navToggle ? "dashboard_item" : "dashboard_item active"}
          >
            <ManageBooking></ManageBooking>
          </div>
        </Route>
        <Route path="/dashboard/add-booking">
          <div
            className={navToggle ? "dashboard_item" : "dashboard_item active"}
          >
            <AddBooking></AddBooking>
          </div>
        </Route>
      </div>
    </div>
  );
};

export default DashBoard;
