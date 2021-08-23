import {
Navbar, Container,
Nav, NavDropdown,
Carousel,
Row, Col,
Image,Form,
Button,
InputGroup,
FormGroup, Card} 
from 'react-bootstrap/'

function App() {
  return (
    <>
      <header>
      <Navbar bg="primary" expand="mg" variant="dark">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Productos" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Ropa</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Accesorios</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Miembros</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://picsum.photos/800/450"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://picsum.photos/800/450"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://picsum.photos/800/450"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </header>

      <main>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={4} className="d-flex justify-content-center aling-items-center">
            <Image src="https://picsum.photos/150" roundedCircle/>
          </Col>
          <Col xs={12} sm={12} md={8} className="text-center">
            <div className="text-center m-4">
              <h2 className= "display-4 my-4">Hola soy el main 💃</h2>
              <p className= "lead">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
            </div>
          </Col>  
        </Row>
      </Container>
      <Form className="m-5 border border-primary">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" className="">
          Submit
        </Button>
      </Form>

      <Row xs={2} sm={3} md={4} className="g-4 m-5">
        {Array.from({ length: 8 }).map((_, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src="https://picsum.photos/200" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit longer.
                </Card.Text>
                <Button variant="primary">Primary</Button>{' '}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>  
      </main>

      <footer> 
      <Container fluid className="bg-primary text-center text-light p-5 ">
        <Row>
          <Col>
            <p>Lorem impsun dolor sit amet.</p>
          </Col>
          <Col>
          <ul style={{ listStyleType: 'none'}}>
            <li>Inicio</li>
            <li>Quiénes somos</li>
            <li>Bolsa de trabajo</li>
            <li>Contacto</li>
          </ul>
          </Col>
          <Col>
          <ul style={{ listStyleType: 'none'}}>
            <li>Inicio</li>
            <li>Quiénes somos</li>
            <li>Bolsa de trabajo</li>
            <li>Contacto</li>
          </ul>
          </Col>
        </Row>
      </Container>
      </footer>
    </>
  );
}

export default App;
