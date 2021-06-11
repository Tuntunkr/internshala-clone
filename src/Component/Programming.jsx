import React from 'react';
import { Navbar,Nav, NavDropdown ,Form,FormControl,Button, Container , Row ,Col} from 'react-bootstrap';
import MainForm from "./MainForm";
import BG from "../img/bg.jpg";
import WorkFromHome from './WorkFromHome'

function Programming() {
  return (
    <Row className="m-0 p-0" style={{height:"100vh",width:"100vw",background:"url("+ BG +")"}}>
    <div className="col-md-6">
    <div className="d-flex justify-content-center align-items-center flex-column" id="div_main">
      <h1 className="text-white" style={{fontWeight:1000,fontSize:50,}}>Learn Python</h1>
      <hr className="line"></hr>
      <h4 class="text-white font-weight-bold" id="text">Master one of the most popular programming languages of the 21st century!</h4>

      <div className="container_box">
        <div className="circular_box">4.2</div>
        <div className="circular_box">44,913 Enrolled</div>
        <div className="circular_box">6 Weeks</div>
        <div className="circular_box">Placement Assistance</div>
      </div>

    </div>
    </div>
    <div className="col-md-5">
        <MainForm/>
    </div>
    {/* <WorkFromHome/> */}
    
</Row>

  )
}

export default Programming
