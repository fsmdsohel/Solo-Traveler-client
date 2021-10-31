import { Col, Container, Row } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import bgImg from "../../images/faq.png";
import googleLogo from "../../images/Google__G__Logo.svg.png";
import PageHeader from "../shared/PageHeader/PageHeader";
import githubLogo from "../../images/github-icon.png";
import twitterLogo from "../../images/twitter.png";
import SectionHeader from "../shared/SectionHeader/SectionHeader";
import swal from "sweetalert";

const Login = () => {
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

  const data = {
    title: "Login",
    header: "Login Form",
  };
  const redirect_uri = location.state?.from || "/home";

  const alertMessage = () => {
    swal("Oh yeah!", "Successfully Log In!", "success");
  };

  const handleGoogleSignIn = () => {
    console.log("handle sing in");
    signInWithGoogle()
      .then((result) => {
        setUser(result.user);
        alertMessage();
        setError({});
        history.push(redirect_uri);
      })
      .catch((error) => {
        setError(error);
      });
  };
  const handleGithubSignIn = () => {
    signInWithGithub()
      .then((result) => {
        setUser(result.user);
        alertMessage();
        setError({});
        history.push(redirect_uri);
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <>
      <PageHeader
        image={bgImg}
        header="Login and enjoy our service"
        title="Login"
      ></PageHeader>
      <Container className="position-relative overflow-hidden">
        <div className="loader_wrapper d-none">
          <div className="loader"></div>
        </div>
        <div className="form_wrapper">
          <SectionHeader data={data}></SectionHeader>
          <Row className="mt-5">
            <Col className="form_item sign border_right" lg="5" md="6">
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
            <Col className="form_item" lg="7" md="6">
              <div className="form">
                <form onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="text"
                    name="email"
                    className="input_field"
                    placeholder="Email"
                    value={userRegistration.email}
                    onChange={handleInput}
                  />
                  <input
                    type="password"
                    name="password"
                    className="input_field"
                    placeholder="Password"
                    value={userRegistration.password}
                    onChange={handleInput}
                  />
                  <div className="forgot">
                    <div>
                      <input type="checkbox" id="flexCheckIndeterminate" />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckIndeterminate"
                      >
                        Remember me
                      </label>
                    </div>
                    <Link to="/forgot-password">Forgot Password?</Link>
                  </div>
                  <input
                    className="input_btn btn-custom"
                    type="button"
                    value="LOG IN"
                  />
                </form>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Login;
