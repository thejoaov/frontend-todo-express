import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
export default props => (
  <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
    <Container>
      <Navbar.Brand className='navbar-brand' href='/'>
        <i className='fa fa-calendar-check-o' />
        TodoApp
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='navbar'>
        <Nav className='mr-auto'>
          <Nav.Link href='/todos'>Tarefas</Nav.Link>
          <Nav.Link href='/about'>Sobre</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)
