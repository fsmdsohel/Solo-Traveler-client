import PageHeader from "../shared/PageHeader/PageHeader";
import bgImg from "../../images/Group-232.png";
import ContactForm from "./ContactForm/ContactForm";

const ContactUs = () => {
  return (
    <>
      <PageHeader
        image={bgImg}
        header="Feel Free to Contact Us"
        title="Contact Us"
      ></PageHeader>
      <ContactForm></ContactForm>
    </>
  );
};

export default ContactUs;
