import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AboutUs from "./pages/aboutUs/AboutUs";
import ContactUs from "./pages/contactUs/ContactUs";
import DashBoard from "./pages/dashBoard/DashBoard";
import BookingDetails from "./pages/home/BookingDetails/BookingDetails";
import Home from "./pages/home/Home";
import Listing from "./pages/Listing/Listing";
import Login from "./pages/login/Login";
import NotFound from "./pages/NotFound/NotFound";
import PrivateRoute from "./pages/shared/PrivateRoute/PrivateRoute";
import SignUp from "./pages/signUp/SignUp";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <PrivateRoute path="/booking-details/:page/:id">
          <BookingDetails></BookingDetails>
        </PrivateRoute>
        <Route path="/about">
          <AboutUs></AboutUs>
        </Route>
        <PrivateRoute path="/listing">
          <Listing></Listing>
        </PrivateRoute>
        <Route path="/contact-us">
          <ContactUs></ContactUs>
        </Route>
        <PrivateRoute path="/dashboard">
          <DashBoard></DashBoard>
        </PrivateRoute>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/sign-up">
          <SignUp></SignUp>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
