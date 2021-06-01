import React from 'react'
import { Carousel,Card,Button } from 'react-bootstrap'
// import "./node_modules/bootstrap/dist/css/bootstrap.min.css";


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
        <div className="conti">
          <div className="row">
            <div className="col-sm">
              <div className="card">
                <img className="card-img-top" src="img/and new.jpg" alt="dfgs"/>
                <div className="card-body">
                  <h5 className="card-title">Web Development</h5>
                  <p className="card-text">tuntun kumar yadavsatqybriqrtcqrytbcqorq or t    </p>
                  {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="card">
                <img className="card-img-top" src="img/digital-marketing.jpg" alt="Card image cap"/>
                <div className="card-body">
                  <h5 className="card-title">Digital Marketing</h5>
                  <p className="card-text">Learn SEO,Search Engine Marketing web analytics</p>
                  {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="card">
                <img className="card-img-top" src="img/autocad.jpg" alt="Card image cap"/>
                <div className="card-body">
                  <h5 className="card-title">AutoCAD</h5>
                  <p className="card-text">Learn to build 2D drafts and 3D models in AutoCAD </p>
                  <a href="#" className="btn btn-primary">know more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
{/* Second row */}
        <h2 className="cee">Programming (3)</h2>
        <div className="conti2">
          <div className="row">
            <div className="col-sm">
              <div className="card">
                <img className="card-img-top" src="img/hacking.jpg" alt="dfgs"/>
                <div className="card-body">
                  <h5 className="card-title">Ethical Hacking</h5>
                  <p className="card-text">Learn to how and secure web applications </p>
                  {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="card">
                <img className="card-img-top" src="img/java.jpg" alt="Card image cap"/>
                <div className="card-body">
                  <h5 className="card-title">Core Java</h5>
                  <p className="card-text">Develop system application from scratch</p>
                  {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="card">
                <img className="card-img-top" src="img/react.jpg" alt="Card image cap"/>
                <div className="card-body">
                  <h5 className="card-title">React</h5>
                  <p className="card-text">Master the front-end powerhouse used to build seamless application! </p>
                  <a href="#" className="btn btn-primary">know more</a>
                </div>
              </div>
            </div>
          </div>
        </div>

{/* Third Row  */}
<h2 className="cee">Business & Management (3)</h2>
<div className="conti">
        <div className="row">
         <div className="col-sm"> <div className="card">
         <img className="card-img-top" src="img/how-to-startup.jpg" alt="dfgs"/>
          <div className="card-body">
         <h5 className="card-title">Web Development</h5>
            <p className="card-text">Learn how to create a website from scratch</p>
       {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
      </div>
</div></div>
    <div className="col-sm"> <div className="card">
  <img className="card-img-top" src="img/digital-marketing.jpg" alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Digital Marketing</h5>
    <p className="card-text">Learn SEO,Search Engine Marketing web analytics</p>
    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
  </div>
</div></div>
    <div className="col-sm"> <div className="card">
  <img className="card-img-top" src="img/tally.jpg" alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Tally</h5>
    <p className="card-text">Learn to build 2D drafts and 3D models in AutoCAD </p>
    <a href="#" className="btn btn-primary">know more</a>
  </div>
</div></div>


    </div>
    </div>

    {/* Fourth row card  */}
    <h2 className="cee">Core Engineering (4)</h2>

    <div className="conti">
        <div className="row">
         <div className="col-sm"> <div className="card">
         <img className="card-img-top" src="img/autocad.jpg" alt="dfgs"/>
          <div className="card-body">
         <h5 className="card-title">AutuCAD</h5>
            <p className="card-text">Learn to build 2D draft and 3D models in AutoCAD</p>
       {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
      </div>
</div></div>
    <div className="col-sm"> <div className="card">
  <img className="card-img-top" src="img/autocad-3D.jpg" alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">AutoCAD 3D</h5>
    <p className="card-text">Master the art of 3D modeling in AutoCAD!</p>
    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
  </div>
</div></div>
    <div className="col-sm"> <div className="card">
  <img className="card-img-top" src="img/solidworks.jpg" alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">SOLIDWORKS</h5>
    <p className="card-text"> Begin your journey as 3D Design Engineer </p>
    <a href="#" className="btn btn-primary">know more</a>
  </div>
</div></div>


    </div>
    </div>

    {/* Fifth row card  */}
    <h2 className="cee">Data Science(4)</h2>
    
    <div className="conti">
        <div className="row">
         <div className="col-sm"> <div className="card">
         <img className="card-img-top" src="img/machine-learning.jpg" alt="dfgs"/>
          <div className="card-body">
         <h5 className="card-title">Machine Learning</h5>
            <p className="card-text">Learn machine Learning from scratch and take  the first step toward AI</p>
       {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
      </div>
</div></div>
    <div className="col-sm"> <div className="card">
  <img className="card-img-top" src="img/data-science.jpg" alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Data Science </h5>
    <p className="card-text">Learn the ABCs of Data Science</p>
    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
  </div>
</div></div>
    <div className="col-sm"> <div className="card">
  <img className="card-img-top" src="img/tableau.jpg" alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Tableau</h5>
    <p className="card-text">Master the industry learning tool used to analyze data & cleate actionable insights   </p>
    <a href="#" className="btn btn-primary">know more</a>
  </div>
</div></div>


    </div>
    </div>



    {/* Fifth row card  */}
    <h2 className="cee">Design (5)</h2>


    
    <div className="conti">
        <div className="row">
         <div className="col-sm"> <div className="card">
         <img className="card-img-top" src="img/graphic-design.jpg" alt="dfgs"/>
          <div className="card-body">
         <h5 className="card-title">Graphic  Design </h5>
            <p className="card-text">Design stunning graphic using Adobe Photoshop</p>
       {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
      </div>
</div></div>
    <div className="col-sm"> <div className="card">
  <img className="card-img-top" src="img/ui-ux-design.jpg" alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">UI/UX Design </h5>
    <p className="card-text">Master Typography,colour wireframing and more to become a pro UI/UX designer </p>
    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
  </div>
</div></div>
    <div className="col-sm"> <div className="card">
  <img className="card-img-top" src="img/video-editing.jpg" alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Video Editing</h5>
    <p className="card-text">Master transitions.visual effects  </p>
    <a href="#" className="btn btn-primary">know more</a>
  </div>
</div></div>


    </div>
    </div>

{/* seventh row card  */}
<h2 className="cee">Creative Arts (3)</h2>

<div className="conti">
        <div className="row">
         <div className="col-sm"> <div className="card">
         <img className="card-img-top" src="img/Crative Writing.jpg" alt="dfgs"/>
          <div className="card-body">
         <h5 className="card-title">Creative Writing </h5>
            <p className="card-text">Learn the craft of Creative Writing from a published author</p>
       {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
      </div>
</div></div>
    <div className="col-sm"> <div className="card">
  <img className="card-img-top" src="img/guitar.jpg" alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Guitar</h5>
    <p className="card-text">Master major& minor chords,strumming techniques </p>
    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
  </div>
</div></div>
    <div className="col-sm"> <div className="card">
  <img className="card-img-top" src="img/photography.jpg" alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Photography </h5>
    <p className="card-text">Learn about cameras.shooting techniques editing and more! </p>
    <a href="#" className="btn btn-primary">know more</a>
  </div>
</div></div>


    </div>
    </div>



{/* seventh row card  */}
<h2 className="cee">Language (1)</h2>


        <div className="row">
         <div className="col-sm"> <div className="card">
         <img className="card-img-top" src="img/french.jpg" alt="dfgs"/>
          <div className="card-body">
         <h5 className="card-title">French Language </h5>
            <p className="card-text">Learn how to read.write.and converse in french .from an expert</p>
       {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
      </div>
</div></div>
</div>

{/* seventh row card  */}
<h2 className="cee">Career Development (3)</h2>


<div className="conti">
        <div className="row">
         <div className="col-sm"> <div className="card">
         <img className="card-img-top" src="img/business.jpg" alt="dfgs"/>
          <div className="card-body">
         <h5 className="card-title">Business Communications Skills </h5>
            <p className="card-text">Develop effective Communication Skill for the workplace </p>
       {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
      </div>
</div></div>
    <div className="col-sm"> <div className="card">
  <img className="card-img-top" src="img/ppt.jpg" alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Internhip & Job Preparation</h5>
    <p className="card-text">Learn how to make a great application,ace interviews and more!</p>
    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
  </div>
</div></div>
    <div className="col-sm"> <div className="card">
  <img className="card-img-top" src="img/how-to-ace.jpg" alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">How to Ace Coding Interviews</h5>
    <p className="card-text">Build the fundamentals of data structures and more! </p>
    <a href="#" className="btn btn-primary">know more</a>
  </div>
</div></div>


    </div>
    </div>

{/* seventh row card  */}
<h2 className="cee">Architecture (3)</h2>

<div className="conti">
        <div className="row">
         <div className="col-sm"> <div className="card">
         <img className="card-img-top" src="img/autocad.jpg" alt="dfgs"/>
          <div className="card-body">
         <h5 className="card-title">AutoCAD</h5>
            <p className="card-text">Learn to build 2D drafts and 3D models in AutoCAD</p>
       {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
      </div>
</div></div>
    <div className="col-sm"> <div className="card">
  <img className="card-img-top" src="img/revit.jpg" alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Revit </h5>
    <p className="card-text">Master the designing,planning,construction</p>
    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
  </div>
</div></div>
    <div className="col-sm"> <div className="card">
  <img className="card-img-top" src="img/autocad-3D.jpg" alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">AutoCAD 3D</h5>
    <p className="card-text">Master the art of 3D modeling in AutoCAD! </p>
    <a href="#" className="btn btn-primary">know more</a>
  </div>
</div></div>


    </div>
    </div>
    {/* seventh row card  */}
<h1 class="ce">Specializations we offer</h1>


<div className="conti">
        <div className="row">
         <div className="col-sm"> <div className="card">
         <img className="card-img-top" src="img/images.jpeg" alt="dfgs"/>
          <div className="card-body">
         <h5 className="card-title">Web Development</h5>
            <p className="card-text">Learn how to create a website from scratch</p>
       {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
      </div>
</div></div>
    <div className="col-sm"> <div className="card">
  <img className="card-img-top" src="img/wondering.png" alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Digital Marketing</h5>
    <p className="card-text">Learn SEO,Search Engine Marketing web analytics</p>
    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
  </div>
</div></div>
</div></div>


</div>


  
  )
}

export default OnlineTrainings
