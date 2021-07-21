import React, { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Dropdown1 from './Dropdown';
import { Link } from "react-router-dom";



  const Myfun = () =>{
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  // const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
    return (
        <>
            <div class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/"><span className="text-primary font-weight-bold">INTERN<span className="text-dark">SHALA</span></span></a>

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
    <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to="/"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Internships <i className="fas fa-caret-down" />
            </Link>
            {dropdown && <Dropdown1 />}
          </li>
      <li class="nav-item">
        <a class="nav-link" href="/OnlineTrainings">Online Trainings</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/FresherJobs">Fresher Jobs</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/Login">Login</a>
      </li>
        
      <li class="nav-item">
        <a class="nav-link" href="/Register">Register</a>
      </li>
    </ul>
  </div>
</div>
        </>
    )
}

export default Myfun ;
