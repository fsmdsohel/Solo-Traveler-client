import { Container } from "react-bootstrap";
import line from "../../../images/header-line.svg";
import "./PageHeader.css";

const PageHeader = ({ children, ...rest }) => {
  const { title, header, image } = rest;

  const style = {
    background: `url(${image})`,
  };

  return (
    <div className="page_header" style={style}>
      <Container className="h-100">
        <div className="header_text">
          <p>{title}</p>
          <h1>{header}</h1>
          <img src={line} alt="" />
        </div>
      </Container>
    </div>
  );
};

export default PageHeader;
