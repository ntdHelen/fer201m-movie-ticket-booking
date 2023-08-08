import { Container } from "react-bootstrap";
import DefaultTemplate from "../template/DefaultTemplate";
import { useState } from "react";

const SignUp = () => {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  return (
    <DefaultTemplate className="container" title="">
      <Container>
        <div>
          <h3 className="title text-center">SIGN UP</h3>
        </div>

      </Container>
    </DefaultTemplate>
  );
};
export default SignUp;
