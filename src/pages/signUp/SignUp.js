import { Col, Container, Row } from "react-bootstrap";
import { useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import bgImg from "../../images/faq.png";
import PageHeader from "../shared/PageHeader/PageHeader";
import googleLogo from "../../images/Google__G__Logo.svg.png";
import githubLogo from "../../images/github-icon.png";
import twitterLogo from "../../images/twitter.png";
import "./SignUp.css";
import SectionHeader from "../shared/SectionHeader/SectionHeader";

function SignUp() {
  const location = useLocation();
  const history = useHistory();
  const { allContext } = useAuth();
  const {
    setError,
    setUser,
    signInWithGoogle,
    signInWithGithub,
    userRegistration,
    handleInput,
  } = allContext;

  const redirect_uri = location.state?.from || "/home";
  console.log(redirect_uri);

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((res) => {
        setUser(data.user);
        history.push(redirect_uri);
        setError("");
        setUser(res.user);
      })
      .catch((error) => {
        setError(error);
      });
  };
  const handleGithubSignIn = () => {
    signInWithGithub()
      .then((res) => {
        setUser(data.user);
        history.push(redirect_uri);
        setError("");
        setUser(res.user);
      })
      .catch((error) => {
        setError(error);
      });
  };

  const data = {
    title: "Sign Up",
    header: "Register Form",
  };

  return (
    <>
      <PageHeader
        image={bgImg}
        header="Sign up and enjoy our service"
        title="Sign Up"
      ></PageHeader>
      <Container className="position-relative overflow-hidden">
        <div className="loader_wrapper d-none">
          <div className="loader"></div>
        </div>
        <div className="form_wrapper">
          <SectionHeader data={data}></SectionHeader>
          <Row className="mt-5">
            <Col className="form_item border_right" lg="7" md="6">
              <div className="form">
                <form onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="text"
                    name="username"
                    className="input_field"
                    placeholder="User Name *"
                    value={userRegistration.username}
                    onChange={handleInput}
                  />
                  <input
                    type="text"
                    name="fullname"
                    className="input_field"
                    placeholder="Full Name"
                    value={userRegistration.fullname}
                    onChange={handleInput}
                  />
                  <input
                    type="text"
                    name="email"
                    className="input_field"
                    placeholder="Email *"
                    value={userRegistration.email}
                    onChange={handleInput}
                  />
                  <input
                    type="password"
                    name="password"
                    className="input_field"
                    placeholder="Password *"
                    value={userRegistration.password}
                    onChange={handleInput}
                  />
                  <div className="forgot">
                    <div>
                      <input type="checkbox" id="termandprivicy" />
                      <label
                        className="form-check-label"
                        htmlFor="termandprivicy"
                      >
                        I have read and accept the
                      </label>
                    </div>
                  </div>
                  <input
                    className="input_btn btn-custom"
                    type="button"
                    value="LOG IN"
                  />
                </form>
              </div>
            </Col>
            <Col className="form_item sign" lg="5" md="6">
              <div onClick={handleGoogleSignIn} className="input_field">
                <img src={googleLogo} alt="" />
                CONTINUE WITH GOOGLE
              </div>
              <div onClick={handleGithubSignIn} className="input_field">
                <img src={githubLogo} alt="" />
                CONTINUE WITH GITHUB
              </div>
              <div className="input_field">
                <img src={twitterLogo} alt="" />
                CONTINUE WITH TWITTER
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}

export default SignUp;
