import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(){
  
  return (
    <div className="header">
      <div className="header-icon"></div>
      <h1>SHELFIE</h1>
      <Link to="/dashboard"><button className="header-btn dashboard-btn">Dashboard</button></Link>
      <Link to="/add"><button className="header-btn">Add Inventory</button></Link>
    </div>
  )
}