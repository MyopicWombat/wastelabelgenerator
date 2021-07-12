import React from 'react';
import './Navbar.css';
import Paginator from '../Paginator/Paginator';

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <button className="nav-button">New Waste</button>
        <Paginator />
      </div>
    </>
  );
}