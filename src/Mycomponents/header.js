import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link, animateScroll as scroll} from 'react-scroll';
import Typed from "react-typed";

const header = () => {
    return (
      <section id="header">
<div className="container-fluid">
<nav className="navbar navbar-expand-lg  navbar-dark">
<div className="container">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon = {faBars} style ={{color :"white"}}/>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
     
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link className="nav-link" to="aboutme" smooth={true} duration={340} activeClass="active" spy={true} offset={0}>
           About me </Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="knowme" smooth={true} duration={500} activeClass="active" spy={true} offset={0 }>
          Know me </Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="projects" smooth={true} duration={500} activeClass="active" spy={true} offset={0}>
           Projects</Link>
      </li>
      </ul>
      <h1 className="name mx-auto">Yukti Kholiwal </h1>


      <ul className="navbar-nav ms-auto">
      <li className="nav-item">
      <Link className="nav-link" to="resume" smooth={true} duration={500} activeClass="active" spy={true} offset={0}>
          Resume</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="" smooth={true} duration={500} activeClass="active" spy={true} offset={0}>
           Blog</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="footer" smooth={true} duration={500} activeClass="active" spy={true} offset={0}>
           Contact me</Link>
      </li>
    </ul>

  </div>
  </div>
</nav>
</div>





</section>


    )
}

export default header

