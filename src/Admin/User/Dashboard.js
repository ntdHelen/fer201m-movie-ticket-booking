import DefaultTemplate from "../../template/DefaultTemplate";
import { Container } from "react-bootstrap";

const DashBoard = () => {
  return (
    <DefaultTemplate className="container" title="">
      <Container>
        <div className="title text-center">
          <h1>Hello Admin</h1>
        </div>
      </Container>
    </DefaultTemplate>
  );
};
export default DashBoard;
