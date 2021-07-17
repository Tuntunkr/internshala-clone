import React, { useState } from "react";
// import './Component/Search/App1.css'
import Modal from "react-modal";
import Search from './AutoComplete'
Modal.setAppElement("#root");
function App1() {
  const [modalisOpen, setModalIsOpen] = useState(false);
  const ProgLang = ["MBA","Media","Law","Humanities","Architecture","Sales","Mechanical Engineering","Chemical Engineering","ASP.NET Development","Ruby on Rails","Science,Design","Electronics Engineering" ,"Computer Science","IOS App Developmment","PHP Developmment","Python/Django Developmment","Front End Developmment","Full Stack Developmment","Informaton Technology","Engineering","Civil Engineering","Javascript Development","Biotechnology Engineering","Metallugical Engineering","Navan Architecture and Ocean Engineering","Physics","Angular.js Development","Node.js Development","Subject Matter Expert(SME)","Journalism","Film Meking","Digital Marketing","Social Media Marketing","Marketing","Backend Development","Video Marketing/Editing","Merket Business/Research","Social Work","Blockchain Develoment","UI/Ux Design","Creative Writing","Biology","Public Relations(PR)","Database Building","Web Development","Mobile App Development","Automobile Engineering","Content Writing","Copywriting","software Development","Software Testing","Wordpress Development","Photography","Psychology","Analytics","Customer Service"];
  return (
    <div id="search_bar">
        <div class="input-group has_cross_and_button" id="search">
            <input onFocus={()=>setModalIsOpen(true)} type="text" class="form-control focus-visible" placeholder="What are you looking for?" id="" autocomplete="off" aria-invalid="false" data-focus-visible-added=""/>
            <span class="input-group-btn search_btn_container"><button class="btn btn-input btn-primary" type="button"><i class="icon_search ic-24-search" onFocus={()=>setModalIsOpen(true)}></i>search</button></span>
        </div>


      <Modal
        isOpen={modalisOpen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <div className="modal-body-header"> 
        <div className="looking_for_container">
          {/* <h6 className="heading">I am looking for </h6>
           */}
           
          <select className="from-container" id="looking_for" name="looking_for">
            <option value="internship">Internship</option>
            <option value="training">Online training</option>
            <option value="fresher-job">fresher Job</option>
          </select>
          <h className="heading1">in</h>
          </div>
          <Search lang={ProgLang} />

          <button className="cont2" onClick={() => setModalIsOpen(true)}>
            search
          </button>
          <div class="chosen-container" title id="looking_for_chosen"></div>
        </div>

        <div class="popular_heading"> Popular Cities</div>
        <div class="popular_body">
          <a href="/" class="normal">
            Work from Home{" "}
          </a>
          <a href="/" class="normal">
            Delhi/NCR{" "}
          </a>
          <a href="/" class="normal">
            Bangalore{" "}
          </a>
          <a href="/" class="normal">
            Mumbai{" "}
          </a>
          <a href="/" class="normal">
            Hyderabad{" "}
          </a>
          <a href="/" class="normal">
            Channai{" "}
          </a>
          <a href="/" class="normal">
            Kolkata{" "}
          </a>
        </div>
        <div class="popular_heading">Popular Categories</div>
        <a href="/" class="normal">
          Part-time{" "}
        </a>
        <a href="/" class="normal">
          Engineering{" "}
        </a>
        <a href="/" class="normal">
          MBA{" "}
        </a>
        <a href="/" class="normal">
          NGO{" "}
        </a>
        <a href="/" class="normal">
          Design{" "}
        </a>
        <a href="/" class="normal">
          Science{" "}
        </a>
        <a href="/" class="normal">
          Media{" "}
        </a>
        <a href="/" class="normal">
          Humanities{" "}
        </a>
        <div>
          <button onClick={() => setModalIsOpen(false)}>close</button>
        </div>
      </Modal>
    </div>
  );
}

export default App1;
