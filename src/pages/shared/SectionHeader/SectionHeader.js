import "./SectionHeader.css";
import line from "../../../images/header-line.svg";

const SectionHeader = ({ data }) => {
  const { title, header } = data;
  return (
    <div className="d-flex flex-column align-items-center justify-content-center section_header">
      <p>{title}</p>
      <h1>{header}</h1>
      <img src={line} alt="" />
    </div>
  );
};

export default SectionHeader;
