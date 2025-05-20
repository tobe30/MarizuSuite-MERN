// src/components/Sidebar.jsx
import React from 'react';
import { Nav } from 'react-bootstrap';
import { House, PlusCircle } from 'react-bootstrap-icons';

const Sidebars = () => {
  return (
    <div className="bg-dark text-white vh-100 p-3" style={{ width: '250px' }}>
      <h4 className="text-white mb-4">Admin Panel</h4>
      <Nav className="flex-column">
        <Nav.Link href="#" className="text-white"><House className="me-2" />Dashboard</Nav.Link>
        <Nav.Link href="#" className="text-white"><PlusCircle className="me-2" />Add Room</Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebars;
