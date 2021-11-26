import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";
import SignMeUp from "../shared/SignMeUp/SignMeUp";
import Booking from "./Booking/Booking";
// import Expricence from "./Exprience/Exprience";
import Intro from "./Intro/Intro";
import Location from "./Location/Location";

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <Intro></Intro>
      <Booking></Booking>
      <Location></Location>
      {/* <Expricence></Expricence> */}
      <SignMeUp></SignMeUp>
      <Footer></Footer>
    </>
  );
};

export default Home;
