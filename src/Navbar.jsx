import React from 'react'
import { NavLink } from 'react-router-dom';
import pic from '../src/Images/Icon.png';

const Navbar = () => {
    return (
        <>
        <div className="container-fluid nav_heading ">
          <div className="row">
            <div className="col-lg-12 col-10 mx-auto ">
              <nav className="navbar navbar-expand-lg navbar-dark ">
                  <img src={pic} className="mx-4 nav_img"></img>
                      <h1 className="navbar-brand  ">Carrier Selection Institute pvt ltd.</h1>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                        </button>
                  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
         <NavLink exact activeClassName="menu_style" className="nav-link active" aria-current="page" to="/">HOME</NavLink>
        </li>
        <li className="nav-item">
         <NavLink exact activeClassName="menu_style" className="nav-link" to="/about">ABOUT</NavLink>
        </li>
        <li className="nav-item">
         <NavLink exact activeClassName="menu_style" className="nav-link" to="/courses">COURSES</NavLink>
        </li>
        <li className="nav-item">
         <NavLink exact  activeClassName="menu_style"className="nav-link" to="/register">REGISTER</NavLink>
        </li>
       </ul>
               </div>
                </nav>
            </div>
        </div>
      </div>
    
        </>
    )
}

export default Navbar;
