import React from "react";
import { Jumbotron, Button } from "react-dom";
import "./Job.css";
import MainCard from "./MainCard";
function Job() {
  return (
    <>
    <section>
      <div class="container py-5"></div>
      <h2 class="section-heading">Training Highlights</h2>
      <div class="row-max ">
        <div class="col-12  ">
          <div class="item-container d-flex align-items-center">
            <div class="image-container">
              <img src="img/learn.png" alt="learn" class="image"></img>
            </div>
            <div class="content-container">
              <h3 class="title"> Learn from home</h3>
              <p class="description">Stay safe indoors</p>
            </div>
          </div>
        </div>
        {/* 3rd */}
        <div class="class=" col-13 col-lg-4>
          <div class="item-container "></div>
          <div class="image-container">
            <img src="img/certi.png" alt="learn"></img>
          </div>
          <div class="content-container">
            <h3 class="title">Certificate of Training</h3>
            <p class="description">From Internshala Trainings</p>
          </div>
        </div>

        <div class="class=" col-12 col-lg-4>
          <div class="item-container d-flex align-items-center"></div>
          <div class="image-container">
            <img src="img/placement.png" alt="learn"></img>
          </div>
          <div class="content-container">
            <h3 class="title">Placement assistance</h3>
            <p class="description">To build your career</p>
          </div>
        </div>
        {/* 4th */}
        <div class="class=" col-12 col-lg-4>
          <div class="item-container d-flex align-items-center"></div>
          <div class="image-container">
            <img src="img/video.png" alt="learn"></img>
          </div>
          <div class="content-container">
            <h3 class="title">100 video tutorials</h3>
            <p class="description">Learn anytime, anywhere</p>
          </div>
        </div>
        {/* 5th */}
        <div class="class=" col-12 col-lg-4>
          <div class="item-container d-flex align-items-center"></div>
          <div class="image-container">
            <img src="img/projects.png" alt="learn"></img>
          </div>
          <div class="content-container">
            <h3 class="title">5 projects</h3>
            <p class="description">For hands-on practice</p>
          </div>
        </div>
        {/* 6th */}
        <div class="class=" col-12 col-lg-4>
          <div class="item-container d-flex align-items-center"></div>
          <div class="image-container">
            <img src="img/doubt_clearing.png" alt="learn"></img>
          </div>
          <div class="content-container">
            <h3 class="title">Doubt clearing</h3>
            <p class="description">Through Q&A forum</p>
          </div>
        </div>
        {/* 7th */}
        <div class="class=" col-12 col-lg-4>
          <div class="item-container d-flex align-items-center"></div>
          <div class="image-container">
            <img src="img/beginner.png" alt="learn"></img>
          </div>
          <div class="content-container">
            <h3 class="title">Beginner friendly</h3>
            <p class="description">No prior knowledge required</p>
          </div>
        </div>
        {/* 8th */}
        <div class="class=" col-12 col-lg-4>
          <div class="item-container d-flex align-items-center"></div>
          <div class="image-container">
            <img src="img/weeks.png" alt="learn"></img>
          </div>
          <div class="content-container">
            <h3 class="title">6 weeks access</h3>
            <p class="description">FTo the platform</p>
          </div>
        </div>
        {/* 9th */}
        <div class="class=" col-12 col-lg-4>
          <div class="item-container d-flex align-items-center"></div>
          <div class="image-container">
            <img src="img/downloadable_content.png" alt="learn"></img>
          </div>
          <div class="content-container">
            <h3 class="title">Downloadable content</h3>
            <p class="description">With lifetime access</p>
          </div>
        </div>
        
      </div>
     </section>
    </>
  );
}

export default Job;
