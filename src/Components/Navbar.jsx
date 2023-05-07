import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
import { Button } from '@mui/material';
export default function Navbar() {
  return (
<>
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Spark Shop</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to='/'>Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to='/about'>About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to='/gallery'>Gallery</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to='/contactUs' >Contact Us</Link>
        </li>

        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"  />
        <Button variant='contained' color='success' type="submit">Search</Button>
      </form>
    </div>
  </div>
</nav>

</>
      );
    
}
