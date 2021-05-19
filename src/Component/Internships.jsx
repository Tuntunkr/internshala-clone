import React from 'react'
import { Jumbotron ,Carousel} from 'react-bootstrap'
import Flexbox from './Flexbox'
import Search from './Search'
import programming from "./city/programming.svg"
import digital_marketing from "./city/digital_marketing.svg"
import web_development from "./city/web_development.svg"
import machine_learning from "./city/machine_learning.svg"
import advanced_excel from "./city/advanced_excel.svg"
import ethical_hacking from "./city/ethical_hacking.svg"
import autocad from "./city/autocad.svg"
import ctc from "./city/ctc.svg"
import dream from "./city/dream.svg"
import verified from "./city/verified.svg"
import Footer from "./Footer"
import '../main.css';

function Internships() {
    return (
        <>
      
        <Search />
     
        <Carousel>
        <Carousel.Item>
          <img
            className="w-100 m-30"
            src="img/img4.png"
            alt="First slide"
          />
          <Carousel.Caption>
          
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 m-30"
            src="img/img4.png"
            alt="Second slide"
          />

          <Carousel.Caption>
          
          
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/img4.png"
            alt="Third slide"
          />

          <Carousel.Caption>
          
          
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>


<Flexbox />

        <h3>Internshala Trainings</h3>

        <p>Learn new-age skills on the go</p>
        <div class="cont">
          <div class="scrollable_cards">
                    <a class="programming" href="/Programming">
                    <div class="img">
                        <img src={programming} alt="programming" />
                    </div>
                    <div class="text">Programming</div>
                    </a> 


                    <a class="digital_marketing" href="/Programming">
                    <div class="img">
                        <img src={digital_marketing} alt="digital_marketing" />
                    </div>
                    <div class="text">Digital Marketing</div>
                    </a> 

                    <a class="web_development" href="/Programming">
                    <div class="img">
                        <img src={web_development} alt="web_development" />
                    </div>
                    <div class="text">Web Development</div>
                    </a> 

                    <a class="machine_learning" href="/Programming">
                    <div class="img">
                        <img src={machine_learning} alt="machine_learning" />
                    </div>
                    <div class="text">Machine Learning</div>
                    </a> 

                    <a class="advanced_excel" href="/Programming">
                    <div class="img">
                        <img src={advanced_excel} alt="advanced_excel" />
                    </div>
                    <div class="text">Advanced Excel</div>
                    </a> 

                    <a class="ethical_hacking" href="/Programming">
                    <div class="img">
                        <img src={ethical_hacking} alt="ethical_hacking" />
                    </div>
                    <div class="text">Ethical Hacking</div>
                    </a> 

                    <a class="autocad" href="/Programming">
                    <div class="img">
                        <img src={autocad} alt="autocad" />
                    </div>
                    <div class="text">Autocad</div>
                    </a> 

                   
          </div>
        </div>
        <h3>Fresher Jobs </h3>
        <p>Premium fresher jobs on your fingertips</p>
        <div class="abc">
                    <a class="ctc" href="">
                    <div class="img">
                        <img src={ctc} alt="ctc" />
                    </div>
                    <div class="text">CTC</div>
                    </a> 

                    <a class="dream" href="">
                    <div class="img">
                        <img src={dream} alt="dream" />
                    </div>
                    <div class="text">Dream</div>
                    </a> 

                    <a class="verified" href="">
                    <div class="img">
                        <img src={verified} alt="verified" />
                    </div>
                    <div class="text">Verified</div>
                    </a> 
        </div>



<Footer />

             
          
</>


           
      
        
    )
}

export default Internships
