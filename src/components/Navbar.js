import React from 'react';
import Nav from 'react-bootstrap/Nav';

class Navbar extends React.Component {
    render () {
        return (
        <div className="NavBar">
           <Nav defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link href="/">Inicio</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/pages/NotesPage">Notas</Nav.Link>
  </Nav.Item>

</Nav>
        </div>
        )
    }
}

export default Navbar;