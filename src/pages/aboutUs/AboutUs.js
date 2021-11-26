import bgImg from "../../images/Group-230-1.png";
import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";
import PageHeader from "../shared/PageHeader/PageHeader";
import SignMeUp from "../shared/SignMeUp/SignMeUp";

const AboutUs = () => {
  return (
    <>
      <Navbar></Navbar>
      <PageHeader
        image={bgImg}
        header="We're Solo Agency"
        title="About Us"
      ></PageHeader>
      <SignMeUp></SignMeUp>
      <Footer></Footer>
    </>
  );
};

export default AboutUs;
