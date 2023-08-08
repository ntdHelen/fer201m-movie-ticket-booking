import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">G-03</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="">About us</Nav.Link>
            <Nav.Link href="/Movies/All">All Movie</Nav.Link>

            <NavDropdown title="Admin" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Admin/Dashboard">Dashboard</NavDropdown.Item>
              <NavDropdown.Item href="/Admin/movieManagement">Movie Management</NavDropdown.Item>
              <NavDropdown.Item href="/Admin/userManagement">User Management</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="User" id="basic-nav-dropdown">
              <NavDropdown.Item href="/User/Profile">Profile</NavDropdown.Item>
              <NavDropdown.Item href="/Box">Movie Box</NavDropdown.Item>
              <NavDropdown.Item href="/Ticket">Movie Tickets</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {/* <Button href="/Buy/ChooseMovie">Buy Ticket Online</Button> */}
          <Nav>
            {/* <Nav.Link href="/SignIn">Sign in</Nav.Link>
            <Nav.Link href="/SignUp">Sign up</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
