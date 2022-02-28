import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";

const Header = ({ count }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          Simple Counter App{" "}
          <Badge pill bg="primary" bg={`${count !== 0 ? "primary" : "danger"}`}>
            {count}
          </Badge>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
