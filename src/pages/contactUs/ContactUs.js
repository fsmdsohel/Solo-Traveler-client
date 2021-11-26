import bgImg from "../../images/Group-232.png";
import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";
import PageHeader from "../shared/PageHeader/PageHeader";
import SignMeUp from "../shared/SignMeUp/SignMeUp";
import ContactForm from "./ContactForm/ContactForm";

const ContactUs = () => {
  return (
    <>
      <Navbar></Navbar>
      <PageHeader
        image={bgImg}
        header="Feel Free to Contact Us"
        title="Contact Us"
      ></PageHeader>
      <ContactForm></ContactForm>
      <SignMeUp></SignMeUp>
      <Footer></Footer>
    </>
  );
};

export default ContactUs;
