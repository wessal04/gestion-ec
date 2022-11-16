import Container from 'react-bootstrap/Container';
import {Nav,Navbar,NavDropdown} from 'react-bootstrap';
import {MdCardGiftcard} from 'react-icons/md';
import { Link } from 'react-router-dom';
function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark">
      <Container>
        <Navbar.Brand href="#home"><h1>logo</h1></Navbar.Brand>
       
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link  to="/"className='lin1' >Home</Link></Nav.Link>
            <Nav.Link ><Link  to="/About"className='lin1' >produit</Link></Nav.Link>
            <Nav.Link ><Link  to="/Contact" className='lin1'>Contact</Link></Nav.Link>
           
          </Nav>
          < MdCardGiftcard style={{color:'white'}}/>
          </Navbar.Collapse>
      
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;