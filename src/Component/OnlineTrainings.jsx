import React from 'react'
import { Carousel,Card,Button } from 'react-bootstrap'
// import "./node_modules/bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer"


function OnlineTrainings() {
  return (
    <div className="ceter">
    
       {/* <img src="img/img4.png"  className="doc1" alt="fresh job"></img> */}
       <Carousel fade className="training">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="img/img4.png"
      alt="First slide"
    />
    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="img/year-specific.gif"
      alt="Second slide"
    />

    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  
</Carousel>
       <h1 className="ce">Online Trainings we offer:</h1>

       <h2 className="cee">Most Popular (3)</h2>
        <div id="courses-container">
          <div className="category-container">
          <div className="custom-carousel">
            <div className="slider">
                <div className="slider-item " style={{left:61 +"px"}}>
                    
                    <a href="/web-development-training/?tracking_source=trainings-cards">
                        <div className="course-card">
                                                                                                                                                    <div class="course-image">
                                <img className="img-responsive" src="img/web.jpg" alt="Web Development" />
                            </div>
                            <div className="course-block">
                                <h4 className="course-title">Web Development</h4>
                                <p className="course-caption">Learn how to create a website from scratch</p>
                                <hr />
                                <div className="course-block-footer-treatment">
                                    <div className="duration-view">
                                        Duration:
                                        6                                                    weeks
                                    </div>
                                    <div className="know-more-button">
                                        <div className="underline-animate">
                                            <div className="line-container" style={{paddingTop:10+"px",paddingLeft: 10 + "px", paddingBottom:10+"px"}}>
                                <span className="hover hover-1 line-span">
                                    KNOW MORE
                                    <i className="fa fa-chevron-right" aria-hidden="true" style={{paddingLeft: 5+"px", fontSize: 10+"px"}}></i>
                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="slider-item " style={{left:61 +"px"}}>
                    
                    <a href="/web-development-training/?tracking_source=trainings-cards">
                        <div className="course-card">
                                                                                                                                                    <div class="course-image">
                                <img className="img-responsive" src="img/digital-marketing.jpg" alt="Web Development" />
                            </div>
                            <div className="course-block">
                                <h4 className="course-title">Digital Marketing</h4>
                                <p className="course-caption">Learn SEO,Search Engine Marketing web analytics and more!</p>
                                <hr />
                                <div className="course-block-footer-treatment">
                                    <div className="duration-view">
                                        Duration:
                                        6                                                    weeks
                                    </div>
                                    <div className="know-more-button">
                                        <div className="underline-animate">
                                            <div className="line-container" style={{paddingTop:10+"px",paddingLeft: 10 + "px", paddingBottom:10+"px"}}>
                                <span className="hover hover-1 line-span">
                                    KNOW MORE
                                    <i className="fa fa-chevron-right" aria-hidden="true" style={{paddingLeft: 5+"px", fontSize: 10+"px"}}></i>
                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>   
                <div className="slider-item " style={{left:61 +"px"}}>
                    
                    <a href="/web-development-training/?tracking_source=trainings-cards">
                        <div className="course-card">
                                                                                                                                                    <div class="course-image">
                                <img className="img-responsive" src="img/autocad.jpg" alt="Web Development" />
                            </div>
                            <div className="course-block">
                                <h4 className="course-title">AutoCAD</h4>
                                <p className="course-caption">Learn to build 2D drafts and 3D models in AutoCAD</p>
                                <hr />
                                <div className="course-block-footer-treatment">
                                    <div className="duration-view">
                                        Duration:
                                        6                                                    weeks
                                    </div>
                                    <div className="know-more-button">
                                        <div className="underline-animate">
                                            <div className="line-container" style={{paddingTop:10+"px",paddingLeft: 10 + "px", paddingBottom:10+"px"}}>
                                <span className="hover hover-1 line-span">
                                    KNOW MORE
                                    <i className="fa fa-chevron-right" aria-hidden="true" style={{paddingLeft: 5+"px", fontSize: 10+"px"}}></i>
                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
        </div>
          </div>
          </div>
        </div>
{/* Second row */}
        <h2 className="cee">Programming (3)</h2>
        <div id="courses-container">
          <div className="category-container">
          <div className="custom-carousel">
            <div className="slider">
                <div className="slider-item " style={{left:61 +"px"}}>
                    
                    <a href="/web-development-training/?tracking_source=trainings-cards">
                        <div className="course-card">
                                                                                                                                                    <div class="course-image">
                                <img className="img-responsive" src="img/hacking.jpg" alt="Web Development" />
                            </div>
                            <div className="course-block">
                                <h4 className="course-title">Ethical Hacking</h4>
                                <p className="course-caption">Learn to how and secure web applications</p>
                                <hr />
                                <div className="course-block-footer-treatment">
                                    <div className="duration-view">
                                        Duration:
                                        6                                                    weeks
                                    </div>
                                    <div className="know-more-button">
                                        <div className="underline-animate">
                                            <div className="line-container" style={{paddingTop:10+"px",paddingLeft: 10 + "px", paddingBottom:10+"px"}}>
                                <span className="hover hover-1 line-span">
                                    KNOW MORE
                                    <i className="fa fa-chevron-right" aria-hidden="true" style={{paddingLeft: 5+"px", fontSize: 10+"px"}}></i>
                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="slider-item " style={{left:61 +"px"}}>
                    
                    <a href="/web-development-training/?tracking_source=trainings-cards">
                        <div className="course-card">
                                                                                                                                                    <div class="course-image">
                                <img className="img-responsive" src="img/java.jpg" alt="Web Development" />
                            </div>
                            <div className="course-block">
                                <h4 className="course-title">Core Java</h4>
                                <p className="course-caption">Develop system application from scratch</p>
                                <hr />
                                <div className="course-block-footer-treatment">
                                    <div className="duration-view">
                                        Duration:
                                        6                                                    weeks
                                    </div>
                                    <div className="know-more-button">
                                        <div className="underline-animate">
                                            <div className="line-container" style={{paddingTop:10+"px",paddingLeft: 10 + "px", paddingBottom:10+"px"}}>
                                <span className="hover hover-1 line-span">
                                    KNOW MORE
                                    <i className="fa fa-chevron-right" aria-hidden="true" style={{paddingLeft: 5+"px", fontSize: 10+"px"}}></i>
                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>   
                <div className="slider-item " style={{left:61 +"px"}}>
                    
                    <a href="/web-development-training/?tracking_source=trainings-cards">
                        <div className="course-card">
                                                                                                                                                    <div class="course-image">
                                <img className="img-responsive" src="img/react.jpg" alt="Web Development" />
                            </div>
                            <div className="course-block">
                                <h4 className="course-title">React</h4>
                                <p className="course-caption">Master the front-end powerhouse used to build seamless application!</p>
                                <hr />
                                <div className="course-block-footer-treatment">
                                    <div className="duration-view">
                                        Duration:
                                        6                                                    weeks
                                    </div>
                                    <div className="know-more-button">
                                        <div className="underline-animate">
                                            <div className="line-container" style={{paddingTop:10+"px",paddingLeft: 10 + "px", paddingBottom:10+"px"}}>
                                <span className="hover hover-1 line-span">
                                    KNOW MORE
                                    <i className="fa fa-chevron-right" aria-hidden="true" style={{paddingLeft: 5+"px", fontSize: 10+"px"}}></i>
                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
        </div>
          </div>
          </div>
        </div>
{/* Third Row  */}
<h2 className="cee">Business & Management (3)</h2>
<div id="courses-container">
          <div className="category-container">
          <div className="custom-carousel">
            <div className="slider">
                <div className="slider-item " style={{left:61 +"px"}}>
                    
                    <a href="/web-development-training/?tracking_source=trainings-cards">
                        <div className="course-card">
                                                                                                                                                    <div class="course-image">
                                <img className="img-responsive" src="img/how-to-startup.jpg" alt="Web Development" />
                            </div>
                            <div className="course-block">
                                <h4 className="course-title">How-to-Startup</h4>
                                <p className="course-caption">Learn how to create a website from scratch</p>
                                <hr />
                                <div className="course-block-footer-treatment">
                                    <div className="duration-view">
                                        Duration:
                                        6                                                    weeks
                                    </div>
                                    <div className="know-more-button">
                                        <div className="underline-animate">
                                            <div className="line-container" style={{paddingTop:10+"px",paddingLeft: 10 + "px", paddingBottom:10+"px"}}>
                                <span className="hover hover-1 line-span">
                                    KNOW MORE
                                    <i className="fa fa-chevron-right" aria-hidden="true" style={{paddingLeft: 5+"px", fontSize: 10+"px"}}></i>
                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="slider-item " style={{left:61 +"px"}}>
                    
                    <a href="/web-development-training/?tracking_source=trainings-cards">
                        <div className="course-card">
                                                                                                                                                    <div class="course-image">
                                <img className="img-responsive" src="img/digital-marketing.jpg" alt="Web Development" />
                            </div>
                            <div className="course-block">
                                <h4 className="course-title">Digital Marketing</h4>
                                <p className="course-caption">Learn SEO,Search Engine Marketing web analytics</p>
                                <hr />
                                <div className="course-block-footer-treatment">
                                    <div className="duration-view">
                                        Duration:
                                        6                                                    weeks
                                    </div>
                                    <div className="know-more-button">
                                        <div className="underline-animate">
                                            <div className="line-container" style={{paddingTop:10+"px",paddingLeft: 10 + "px", paddingBottom:10+"px"}}>
                                <span className="hover hover-1 line-span">
                                    KNOW MORE
                                    <i className="fa fa-chevron-right" aria-hidden="true" style={{paddingLeft: 5+"px", fontSize: 10+"px"}}></i>
                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>   
                <div className="slider-item " style={{left:61 +"px"}}>
                    
                    <a href="/web-development-training/?tracking_source=trainings-cards">
                        <div className="course-card">
                                                                                                                                                    <div class="course-image">
                                <img className="img-responsive" src="img/tally.jpg" alt="Web Development" />
                            </div>
                            <div className="course-block">
                                <h4 className="course-title">Tally</h4>
                                <p className="course-caption">Learn to build 2D drafts and 3D models in AutoCAD</p>
                                <hr />
                                <div className="course-block-footer-treatment">
                                    <div className="duration-view">
                                        Duration:
                                        6                                                    weeks
                                    </div>
                                    <div className="know-more-button">
                                        <div className="underline-animate">
                                            <div className="line-container" style={{paddingTop:10+"px",paddingLeft: 10 + "px", paddingBottom:10+"px"}}>
                                <span className="hover hover-1 line-span">
                                    KNOW MORE
                                    <i className="fa fa-chevron-right" aria-hidden="true" style={{paddingLeft: 5+"px", fontSize: 10+"px"}}></i>
                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
        </div>
          </div>
          </div>
        </div>
    {/* Fourth row card  */}
    <h2 className="cee">Core Engineering (4)</h2>
    <div id="courses-container">
          <div className="category-container">
          <div className="custom-carousel">
            <div className="slider">
                <div className="slider-item " style={{left:61 +"px"}}>
                    
                    <a href="/web-development-training/?tracking_source=trainings-cards">
                        <div className="course-card">
                                                                                                                                                    <div class="course-image">
                                <img className="img-responsive" src="img/autocad.jpg" alt="Web Development" />
                            </div>
                            <div className="course-block">
                                <h4 className="course-title">AutoCAD</h4>
                                <p className="course-caption">Learn to build 2D draft and 3D models in AutoCAD</p>
                                <hr />
                                <div className="course-block-footer-treatment">
                                    <div className="duration-view">
                                        Duration:
                                        6                                                    weeks
                                    </div>
                                    <div className="know-more-button">
                                        <div className="underline-animate">
                                            <div className="line-container" style={{paddingTop:10+"px",paddingLeft: 10 + "px", paddingBottom:10+"px"}}>
                                <span className="hover hover-1 line-span">
                                    KNOW MORE
                                    <i className="fa fa-chevron-right" aria-hidden="true" style={{paddingLeft: 5+"px", fontSize: 10+"px"}}></i>
                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="slider-item " style={{left:61 +"px"}}>
                    
                    <a href="/web-development-training/?tracking_source=trainings-cards">
                        <div className="course-card">
                                                                                                                                                    <div class="course-image">
                                <img className="img-responsive" src="img/autocad-3D.jpg" alt="Web Development" />
                            </div>
                            <div className="course-block">
                                <h4 className="course-title">AutoCAD 3D</h4>
                                <p className="course-caption">Master the art of 3D modeling in AutoCAD!</p>
                                <hr />
                                <div className="course-block-footer-treatment">
                                    <div className="duration-view">
                                        Duration:
                                        6                                                    weeks
                                    </div>
                                    <div className="know-more-button">
                                        <div className="underline-animate">
                                            <div className="line-container" style={{paddingTop:10+"px",paddingLeft: 10 + "px", paddingBottom:10+"px"}}>
                                <span className="hover hover-1 line-span">
                                    KNOW MORE
                                    <i className="fa fa-chevron-right" aria-hidden="true" style={{paddingLeft: 5+"px", fontSize: 10+"px"}}></i>
                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>   
                <div className="slider-item " style={{left:61 +"px"}}>
                    
                    <a href="/web-development-training/?tracking_source=trainings-cards">
                        <div className="course-card">
                                                                                                                                                    <div class="course-image">
                                <img className="img-responsive" src="img/solidworks.jpg" alt="Web Development" />
                            </div>
                            <div className="course-block">
                                <h4 className="course-title">SOLIDWORKS</h4>
                                <p className="course-caption">Begin your journey as 3D Design Engineer</p>
                                <hr />
                                <div className="course-block-footer-treatment">
                                    <div className="duration-view">
                                        Duration:
                                        6                                                    weeks
                                    </div>
                                    <div className="know-more-button">
                                        <div className="underline-animate">
                                            <div className="line-container" style={{paddingTop:10+"px",paddingLeft: 10 + "px", paddingBottom:10+"px"}}>
                                <span className="hover hover-1 line-span">
                                    KNOW MORE
                                    <i className="fa fa-chevron-right" aria-hidden="true" style={{paddingLeft: 5+"px", fontSize: 10+"px"}}></i>
                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
        </div>
          </div>
          </div>
        </div>
    {/* Fifth row card  */}
    <h2 className="cee">Data Science(4)</h2>
    
    <div id="courses-container">
          <div className="category-container">
          <div className="custom-carousel">
            <div className="slider">
                <div className="slider-item " style={{left:61 +"px"}}>
                    
                    <a href="/web-development-training/?tracking_source=trainings-cards">
                        <div className="course-card">
                                                                                                                                                    <div class="course-image">
                                <img className="img-responsive" src="img/machine-learning.jpg" alt="Web Development" />
                            </div>
                            <div className="course-block">
                                <h4 className="course-title">Machine Learning</h4>
                                <p className="course-caption">Learn machine Learning from scratch and take  the first step toward AI</p>
                                <hr />
                                <div className="course-block-footer-treatment">
                                    <div className="duration-view">
                                        Duration:
                                        6                                                    weeks
                                    </div>
                                    <div className="know-more-button">
                                        <div className="underline-animate">
                                            <div className="line-container" style={{paddingTop:10+"px",paddingLeft: 10 + "px", paddingBottom:10+"px"}}>
                                <span className="hover hover-1 line-span">
                                    KNOW MORE
                                    <i className="fa fa-chevron-right" aria-hidden="true" style={{paddingLeft: 5+"px", fontSize: 10+"px"}}></i>
                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="slider-item " style={{left:61 +"px"}}>
                    
                    <a href="/web-development-training/?tracking_source=trainings-cards">
                        <div className="course-card">
                                                                                                                                                    <div class="course-image">
                                <img className="img-responsive" src="img/data-science.jpg" alt="Web Development" />
                            </div>
                            <div className="course-block">
                                <h4 className="course-title">Data Science</h4>
                                <p className="course-caption">Learn the ABCs of Data Science</p>
                                <hr />
                                <div className="course-block-footer-treatment">
                                    <div className="duration-view">
                                        Duration:
                                        6                                                    weeks
                                    </div>
                                    <div className="know-more-button">
                                        <div className="underline-animate">
                                            <div className="line-container" style={{paddingTop:10+"px",paddingLeft: 10 + "px", paddingBottom:10+"px"}}>
                                <span className="hover hover-1 line-span">
                                    KNOW MORE
                                    <i className="fa fa-chevron-right" aria-hidden="true" style={{paddingLeft: 5+"px", fontSize: 10+"px"}}></i>
                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>   
                <div className="slider-item " style={{left:61 +"px"}}>
                    
                    <a href="/web-development-training/?tracking_source=trainings-cards">
                        <div className="course-card">
                                                                                                                                                    <div class="course-image">
                                <img className="img-responsive" src="img/tableau.jpg" alt="Web Development" />
                            </div>
                            <div className="course-block">
                                <h4 className="course-title">Tableau</h4>
                                <p className="course-caption">Master the industry learning tool used to analyze data & cleate actionable insights</p>
                                <hr />
                                <div className="course-block-footer-treatment">
                                    <div className="duration-view">
                                        Duration:
                                        6                                                    weeks
                                    </div>
                                    <div className="know-more-button">
                                        <div className="underline-animate">
                                            <div className="line-container" style={{paddingTop:10+"px",paddingLeft: 10 + "px", paddingBottom:10+"px"}}>
                                <span className="hover hover-1 line-span">
                                    KNOW MORE
                                    <i className="fa fa-chevron-right" aria-hidden="true" style={{paddingLeft: 5+"px", fontSize: 10+"px"}}></i>
                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
        </div>
          </div>
          </div>
        </div>


    {/* Fifth row card  */}
    <h2 className="cee">Design (5)</h2>


    
    <div id="courses-container">
          <div className="category-container">
          <div className="custom-carousel">
            <div className="slider">
                <div className="slider-item " style={{left:61 +"px"}}>
                    
                    <a href="/web-development-training/?tracking_source=trainings-cards">
                        <div className="course-card">
                                                                                                                                                    <div class="course-image">
                                <img className="img-responsive" src="img/graphic-design.jpg" alt="Web Development" />
                            </div>
                            <div className="course-block">
                                <h4 className="course-title">Graphic  Design</h4>
                                <p className="course-caption">Design stunning graphic using Adobe Photoshop</p>
                                <hr />
                                <div className="course-block-footer-treatment">
                                    <div className="duration-view">
                                        Duration:
                                        6                                                    weeks
                                    </div>
                                    <div className="know-more-button">
                                        <div className="underline-animate">
                                            <div className="line-container" style={{paddingTop:10+"px",paddingLeft: 10 + "px", paddingBottom:10+"px"}}>
                                <span className="hover hover-1 line-span">
                                    KNOW MORE
                                    <i className="fa fa-chevron-right" aria-hidden="true" style={{paddingLeft: 5+"px", fontSize: 10+"px"}}></i>
                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="slider-item " style={{left:61 +"px"}}>
                    
                    <a href="/web-development-training/?tracking_source=trainings-cards">
                        <div className="course-card">
                                                                                                                                                    <div class="course-image">
                                <img className="img-responsive" src="img/ui-ux-design.jpg" alt="Web Development" />
                            </div>
                            <div className="course-block">
                                <h4 className="course-title">UI/UX Design</h4>
                                <p className="course-caption">Master Typography,colour wireframing and more to become a pro UI/UX designer</p>
                                <hr />
                                <div className="course-block-footer-treatment">
                                    <div className="duration-view">
                                        Duration:
                                        6                                                    weeks
                                    </div>
                                    <div className="know-more-button">
                                        <div className="underline-animate">
                                            <div className="line-container" style={{paddingTop:10+"px",paddingLeft: 10 + "px", paddingBottom:10+"px"}}>
                                <span className="hover hover-1 line-span">
                                    KNOW MORE
                                    <i className="fa fa-chevron-right" aria-hidden="true" style={{paddingLeft: 5+"px", fontSize: 10+"px"}}></i>
                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>   
                <div className="slider-item " style={{left:61 +"px"}}>
                    
                    <a href="/web-development-training/?tracking_source=trainings-cards">
                        <div className="course-card">
                                                                                                                                                    <div class="course-image">
                                <img className="img-responsive" src="img/video-editing.jpg" alt="Web Development" />
                            </div>
                            <div className="course-block">
                                <h4 className="course-title">Video Editing</h4>
                                <p className="course-caption">Master transitions.visual effects</p>
                                <hr />
                                <div className="course-block-footer-treatment">
                                    <div className="duration-view">
                                        Duration:
                                        6                                                    weeks
                                    </div>
                                    <div className="know-more-button">
                                        <div className="underline-animate">
                                            <div className="line-container" style={{paddingTop:10+"px",paddingLeft: 10 + "px", paddingBottom:10+"px"}}>
                                <span className="hover hover-1 line-span">
                                    KNOW MORE
                                    <i className="fa fa-chevron-right" aria-hidden="true" style={{paddingLeft: 5+"px", fontSize: 10+"px"}}></i>
                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
        </div>
          </div>
          </div>
        </div>
{/* seventh row card  */}
<h2 className="cee">Creative Arts (3)</h2>

<div id="courses-container">
          <div className="category-container">
          <div className="custom-carousel">
            <div className="slider">
                <div className="slider-item " style={{left:61 +"px"}}>
                    
                    <a href="/web-development-training/?tracking_source=trainings-cards">
                        <div className="course-card">
                                                                                                                                                    <div class="course-image">
                                <img className="img-responsive" src="img/Crative Writing.jpg" alt="Web Development" />
                            </div>
                            <div className="course-block">
                                <h4 className="course-title">Crative Writing</h4>
                                <p className="course-caption">Learn the craft of Creative Writing from a published author</p>
                                <hr />
                                <div className="course-block-footer-treatment">
                                    <div className="duration-view">
                                        Duration:
                                        6                                                    weeks
                                    </div>
                                    <div className="know-more-button">
                                        <div className="underline-animate">
                                            <div className="line-container" style={{paddingTop:10+"px",paddingLeft: 10 + "px", paddingBottom:10+"px"}}>
                                <span className="hover hover-1 line-span">
                                    KNOW MORE
                                    <i className="fa fa-chevron-right" aria-hidden="true" style={{paddingLeft: 5+"px", fontSize: 10+"px"}}></i>
                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="slider-item " style={{left:61 +"px"}}>
                    
                    <a href="/web-development-training/?tracking_source=trainings-cards">
                        <div className="course-card">
                                                                                                                                                    <div class="course-image">
                                <img className="img-responsive" src="img/guitar.jpg" alt="Web Development" />
                            </div>
                            <div className="course-block">
                                <h4 className="course-title">Guitar</h4>
                                <p className="course-caption">Master major& minor chords,strumming techniques</p>
                                <hr />
                                <div className="course-block-footer-treatment">
                                    <div className="duration-view">
                                        Duration:
                                        6                                                    weeks
                                    </div>
                                    <div className="know-more-button">
                                        <div className="underline-animate">
                                            <div className="line-container" style={{paddingTop:10+"px",paddingLeft: 10 + "px", paddingBottom:10+"px"}}>
                                <span className="hover hover-1 line-span">
                                    KNOW MORE
                                    <i className="fa fa-chevron-right" aria-hidden="true" style={{paddingLeft: 5+"px", fontSize: 10+"px"}}></i>
                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>   
                <div className="slider-item " style={{left:61 +"px"}}>
                    
                    <a href="/web-development-training/?tracking_source=trainings-cards">
                        <div className="course-card">
                                                                                                                                                    <div class="course-image">
                                <img className="img-responsive" src="img/photography.jpg" alt="Web Development" />
                            </div>
                            <div className="course-block">
                                <h4 className="course-title">Photography</h4>
                                <p className="course-caption">Learn about cameras.shooting techniques editing and more!</p>
                                <hr />
                                <div className="course-block-footer-treatment">
                                    <div className="duration-view">
                                        Duration:
                                        6                                                    weeks
                                    </div>
                                    <div className="know-more-button">
                                        <div className="underline-animate">
                                            <div className="line-container" style={{paddingTop:10+"px",paddingLeft: 10 + "px", paddingBottom:10+"px"}}>
                                <span className="hover hover-1 line-span">
                                    KNOW MORE
                                    <i className="fa fa-chevron-right" aria-hidden="true" style={{paddingLeft: 5+"px", fontSize: 10+"px"}}></i>
                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
        </div>
          </div>
          </div>
        </div>

{/* seventh row card  */}
<h2 className="cee">Language (1)</h2>


<div id="courses-container">
          <div className="category-container">
          <div className="custom-carousel">
            <div className="slider">
                <div className="slider-item " style={{left:61 +"px"}}>
                    
                    <a href="/web-development-training/?tracking_source=trainings-cards">
                        <div className="course-card">
                                                                                                                                                    <div class="course-image">
                                <img className="img-responsive" src="img/french.jpg" alt="Web Development" />
                            </div>
                            <div className="course-block">
                                <h4 className="course-title">French Language</h4>
                                <p className="course-caption">Learn how to read.write.and converse in french .from an expert</p>
                                <hr />
                                <div className="course-block-footer-treatment">
                                    <div className="duration-view">
                                        Duration:
                                        6                                                    weeks
                                    </div>
                                    <div className="know-more-button">
                                        <div className="underline-animate">
                                            <div className="line-container" style={{paddingTop:10+"px",paddingLeft: 10 + "px", paddingBottom:10+"px"}}>
                                <span className="hover hover-1 line-span">
                                    KNOW MORE
                                    <i className="fa fa-chevron-right" aria-hidden="true" style={{paddingLeft: 5+"px", fontSize: 10+"px"}}></i>
                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="slider-item " style={{left:61 +"px"}}>
                    
                    <a href="/web-development-training/?tracking_source=trainings-cards">
                        <div className="course-card">
                                                                                                                                                    <div class="course-image">
                                <img className="img-responsive" src="img/business.jpg" alt="Web Development" />
                            </div>
                            <div className="course-block">
                                <h4 className="course-title">Business Communications Skills</h4>
                                <p className="course-caption">Develop effective Communication Skill for the workplace</p>
                                <hr />
                                <div className="course-block-footer-treatment">
                                    <div className="duration-view">
                                        Duration:
                                        6                                                    weeks
                                    </div>
                                    <div className="know-more-button">
                                        <div className="underline-animate">
                                            <div className="line-container" style={{paddingTop:10+"px",paddingLeft: 10 + "px", paddingBottom:10+"px"}}>
                                <span className="hover hover-1 line-span">
                                    KNOW MORE
                                    <i className="fa fa-chevron-right" aria-hidden="true" style={{paddingLeft: 5+"px", fontSize: 10+"px"}}></i>
                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>   
                <div className="slider-item " style={{left:61 +"px"}}>
                    
                    <a href="/web-development-training/?tracking_source=trainings-cards">
                        <div className="course-card">
                                                                                                                                                    <div class="course-image">
                                <img className="img-responsive" src="img/ppt.jpg" alt="Web Development" />
                            </div>
                            <div className="course-block">
                                <h4 className="course-title">Internhip & Job Preparation</h4>
                                <p className="course-caption">Learn how to make a great application,ace interviews and more!</p>
                                <hr />
                                <div className="course-block-footer-treatment">
                                    <div className="duration-view">
                                        Duration:
                                        6                                                    weeks
                                    </div>
                                    <div className="know-more-button">
                                        <div className="underline-animate">
                                            <div className="line-container" style={{paddingTop:10+"px",paddingLeft: 10 + "px", paddingBottom:10+"px"}}>
                                <span className="hover hover-1 line-span">
                                    KNOW MORE
                                    <i className="fa fa-chevron-right" aria-hidden="true" style={{paddingLeft: 5+"px", fontSize: 10+"px"}}></i>
                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
        </div>
          </div>
          </div>
        </div>
{/* seventh row card  */}
<h2 className="cee">Career Development (3)</h2>

<div id="courses-container">
          <div className="category-container">
          <div className="custom-carousel">
            <div className="slider">
                <div className="slider-item " style={{left:61 +"px"}}>
                    
                    <a href="/web-development-training/?tracking_source=trainings-cards">
                        <div className="course-card">
                                                                                                                                                    <div class="course-image">
                                <img className="img-responsive" src="img/how-to-ace-.jpg" alt="Web Development" />
                            </div>
                            <div className="course-block">
                                <h4 className="course-title">How to Ace Coding Interviews</h4>
                                <p className="course-caption">Build the fundamentals of data structures and more!</p>
                                <hr />
                                <div className="course-block-footer-treatment">
                                    <div className="duration-view">
                                        Duration:
                                        6                                                    weeks
                                    </div>
                                    <div className="know-more-button">
                                        <div className="underline-animate">
                                            <div className="line-container" style={{paddingTop:10+"px",paddingLeft: 10 + "px", paddingBottom:10+"px"}}>
                                <span className="hover hover-1 line-span">
                                    KNOW MORE
                                    <i className="fa fa-chevron-right" aria-hidden="true" style={{paddingLeft: 5+"px", fontSize: 10+"px"}}></i>
                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="slider-item " style={{left:61 +"px"}}>
                    
                    <a href="/web-development-training/?tracking_source=trainings-cards">
                        <div className="course-card">
                                                                                                                                                    <div class="course-image">
                                <img className="img-responsive" src="img/autocad.jpg" alt="Web Development" />
                            </div>
                            <div className="course-block">
                                <h4 className="course-title">AutoCAD</h4>
                                <p className="course-caption">Learn to build 2D drafts and 3D models in AutoCAD</p>
                                <hr />
                                <div className="course-block-footer-treatment">
                                    <div className="duration-view">
                                        Duration:
                                        6                                                    weeks
                                    </div>
                                    <div className="know-more-button">
                                        <div className="underline-animate">
                                            <div className="line-container" style={{paddingTop:10+"px",paddingLeft: 10 + "px", paddingBottom:10+"px"}}>
                                <span className="hover hover-1 line-span">
                                    KNOW MORE
                                    <i className="fa fa-chevron-right" aria-hidden="true" style={{paddingLeft: 5+"px", fontSize: 10+"px"}}></i>
                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>   
                <div className="slider-item " style={{left:61 +"px"}}>
                    
                    <a href="/web-development-training/?tracking_source=trainings-cards">
                        <div className="course-card">
                                                                                                                                                    <div class="course-image">
                                <img className="img-responsive" src="img/autocad-3D.jpg" alt="Web Development" />
                            </div>
                            <div className="course-block">
                                <h4 className="course-title">AutoCAD 3D</h4>
                                <p className="course-caption">Master the art of 3D modeling in AutoCAD!</p>
                                <hr />
                                <div className="course-block-footer-treatment">
                                    <div className="duration-view">
                                        Duration:
                                        6                                                    weeks
                                    </div>
                                    <div className="know-more-button">
                                        <div className="underline-animate">
                                            <div className="line-container" style={{paddingTop:10+"px",paddingLeft: 10 + "px", paddingBottom:10+"px"}}>
                                <span className="hover hover-1 line-span">
                                    KNOW MORE
                                    <i className="fa fa-chevron-right" aria-hidden="true" style={{paddingLeft: 5+"px", fontSize: 10+"px"}}></i>
                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
        </div>
          </div>
          </div>
        </div>

{/* Eight row card  */}
<h2 className="ce">Specializations we offer</h2>


<div id="courses-container">
          <div className="category-container">
          <div className="custom-carousel">
            <div className="slider">
                <div className="slider-item " style={{left:61 +"px"}}>
                    
                    <a href="/web-development-training/?tracking_source=trainings-cards">
                        <div className="course-card">
                                                                                                                                                    <div class="course-image">
                                <img className="img-responsive" src="img/wondering.png" alt="Web Development" />
                            </div>
                            <div className="course-block">
                                <h4 className="course-title">How to Ace Coding Interviews</h4>
                                <p className="course-caption">Build the fundamentals of data structures and more!</p>
                                <hr />
                                <div className="course-block-footer-treatment">
                                    <div className="duration-view">
                                        Duration:
                                        6 weeks
                                    </div>
                                    <div className="know-more-button">
                                        <div className="underline-animate">
                                            <div className="line-container" style={{paddingTop:10+"px",paddingLeft: 10 + "px", paddingBottom:10+"px"}}>
                                <span className="hover hover-1 line-span">
                                    KNOW MORE
                                    <i className="fa fa-chevron-right" aria-hidden="true" style={{paddingLeft: 5+"px", fontSize: 10+"px"}}></i>
                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="slider-item " style={{left:61 +"px"}}>
                    
                    <a href="">
                        <div className="course-card">
                                                                                                                                                    <div class="course-image">
                                <img className="img-responsive" src="img/images.jpeg" alt="Web Development" />
                            </div>
                            <div className="course-block">
                                <h4 className="course-title">AutoCAD</h4>
                                <p className="course-caption">Learn to build 2D drafts and 3D models in AutoCAD</p>
                                <hr />
                                <div className="course-block-footer-treatment">
                                    <div className="duration-view">
                                        Duration:
                                        6                                                    weeks
                                    </div>
                                    <div className="know-more-button">
                                        <div className="underline-animate">
                                            <div className="line-container" style={{paddingTop:10+"px",paddingLeft: 10 + "px", paddingBottom:10+"px"}}>
                                <span className="hover hover-1 line-span">
                                    KNOW MORE
                                    <i className="fa fa-chevron-right" aria-hidden="true" style={{paddingLeft: 5+"px", fontSize: 10+"px"}}></i>
                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>   
                <div className="slider-item " style={{left:61 +"px"}}>
                    
                    {/* <a href="/web-development-training/?tracking_source=trainings-cards">
                        <div className="course-card">
                                                                                                                                                    <div class="course-image">
                                <img className="img-responsive" src="img/autocad-3D.jpg" alt="Web Development" />
                            </div>
                            <div className="course-block">
                                <h4 className="course-title">AutoCAD 3D</h4>
                                <p className="course-caption">Master the art of 3D modeling in AutoCAD!</p>
                                <hr />
                                <div className="course-block-footer-treatment">
                                    <div className="duration-view">
                                        Duration:
                                        6                                                    weeks
                                    </div>
                                    <div className="know-more-button">
                                        <div className="underline-animate">
                                            <div className="line-container" style={{paddingTop:10+"px",paddingLeft: 10 + "px", paddingBottom:10+"px"}}>
                                <span className="hover hover-1 line-span">
                                    KNOW MORE
                                    <i className="fa fa-chevron-right" aria-hidden="true" style={{paddingLeft: 5+"px", fontSize: 10+"px"}}></i>
                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a> */}
                </div>
        </div>
          </div>
          </div>
        </div>
        <Footer/>
</div>


  
  )
}

export default OnlineTrainings
