import React from 'react';
import CompanyLogo from "../img/companyLogo.png";
import { Card} from 'react-bootstrap';


function MainCard(props) {
   
        return(
      
        
    
        <Card className="p-3 my-3">
        <div className="d-flex justify-content-between align-items-center">
            <Card.Title className="w-50">{props.title}</Card.Title>
     
            <div class="logo_container">Content</div>
                <div class="individual_internship_details">
                    <div class="body-main sub_heading_less_margin price_with_icon"></div>
                        <div class="price_with_icons_item">
                            <img src="img/mi.svg"alt="price"></img>
                            <span >₹&nbsp;35,000/-</span>

                        </div>
                        <div class="price_with_icons_item">
                            <img src="img/mi1.svg"alt="price"></img>
                            <span >₹&nbsp;20,000/-</span>

                        </div>

                        <div class="price_with_icons_item">
                            <img src="img/mi1.svg"alt="price"></img>
                            <span >₹&nbsp;10,000/-</span>

                        </div>
                        
                   


                    </div>

                </div>
                        <div class="sub_heading timer_container" >
            <i class="ic-16-clock"></i>
            <span class="timer_heading"> Registration ends in</span>
            <span class="timer" id="native_ad_countdown"></span>
            </div>
            <div class="body-main">
                 Choose from Web Development, Digital Marketing, Programming with Python, Ethical Hacking, Machine Learning, & more
            </div>
         {/* <img src={CompanyLogo} style={{ height: 100, width: 100 }} /> */}
        
        {/* <span style={{ marginTop: -25, marginBottom: 30 }}>Snapdeal</span> */}
        {/* <div className="d-flex justify-content-around align-items-center" style={{ width: "80%" }}>
            <div> */}
            {/* <div>
                <p>DURATION</p>
                <p>4 Weeks</p>
            </div> */}
                {/* <div>
                  <p>STIPEND</p>
                  <p>Unpaid</p>
                </div> */}
            
            {/* <div>
                <p>APPLY BY</p>
                <p>22 May 21</p>
            </div> */}
        {/* </div> */}
        {/* <div className="d-flex justify-content-around align-items-center" style={{ width: "45%" }}>
            <p>Internship</p>
            <p>Part Time allowed</p>
        </div> */}
    </Card>
    
    )
}

export default MainCard
