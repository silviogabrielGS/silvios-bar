import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Menu() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary " bg='primary' data-bs-theme="light">
      <Container id='menu' className='justify-content-between '>
        <Navbar.Brand href="#home">Silvio's Bar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Cardápio</Nav.Link>
            <Nav.Link href="#link">Quem Somos</Nav.Link>
            <Nav.Link href="#link">Onde Estamos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;