import React, { useState } from "react";
// import "./App.css";
import Modal from "react-modal";
// import Search from './Component/Search/AutoComplete'
Modal.setAppElement("#root");
function Search1() {
  const [modalisOpen, setModalIsOpen] = useState(false);
  const ProgLang = ["MBA,Media,Law,Humanities,Architecture,Sales,Mechanical Engineering,Chemical Engineering,ASP.NET Development,Ruby on Rails,Science,Design,Electronics Engineering ,Computer Science,IOS App Developmment,PHP Developmment,Python/Django Developmment,Front End Developmment,Full Stack Developmment,Informaton Technology,Engineering,Civil Engineering,Javascript Development"];
  return (
    <div className="App">
      <input
        onFocus={() => setModalIsOpen(true)}
        type="text"
        className="container"
        placeholder="What are you looking for?"
      />

      <button className="cont1" onClick={() => setModalIsOpen(true)}>
        search
      </button>
      {/* <AutoComplete/> */}

      <Modal
        isOpen={modalisOpen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <div className="modal-body-header"> </div>
        <div className="looking_for_container">
          <h6>I am looking for </h6>
          <select class="from-control" id="looking_for" name="looking_for">
            <option value="internship">Internship</option>
            <option value="training">Online training</option>
            <option value="fresher-job">fresher Job</option>
          </select>
          <h6>in</h6>
          <i data-dismiss="modal" class="ic-24-cross"></i>
          <Search1 lang={ProgLang} />

          <button className="cont1" onClick={() => setModalIsOpen(true)}>
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
          {/* <button onClick={() => setModalIsOpen(false)}>close</button> */}
        </div>
      </Modal>
    </div>
  );
}

export default Search1;
