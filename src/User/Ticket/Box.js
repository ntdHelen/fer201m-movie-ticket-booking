import DefaultTemplate from "../../template/DefaultTemplate";
import { Container } from "react-bootstrap";

const Box = () => {
  return (
    <DefaultTemplate className="container" title="">
      <Container>
        <div className="title text-center">
          <h1>Hello User</h1>
        </div>
      </Container>
    </DefaultTemplate>
  );
};
export default Box;
