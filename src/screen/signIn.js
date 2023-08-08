import { Container } from "react-bootstrap";
import DefaultTemplate from "../template/DefaultTemplate";
import { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
const SignIn = () => {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter the email and Password");
    } else {
      // Thực hiện kiểm tra dữ liệu tại đây (ví dụ: gọi API để xác thực)

      // Nếu kiểm tra thành công
      setError("");
      alert("Login success");
      setLoggedIn(true);
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  return (
    <DefaultTemplate className="container" title="">
      <div className="container">
        <div>
          <h3 className="title text-center">LOGIN</h3>
        </div>
        <div className="row mb-5 pb-5">
          <div className="col-md-12 container-login">
            <div className="col-md-6 " style={{margin: "0 auto"}}>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleLogin}>
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Button className="mt-2" variant="primary" type="submit">
                  Login
                </Button><br/>
                <a href="/SignUp"><i>Register</i></a>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </DefaultTemplate>
  );
};
export default SignIn;
