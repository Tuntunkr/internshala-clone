import React from 'react';
import CompanyLogo from "../img/companyLogo.png";
import { Card} from 'react-bootstrap';

function MainCard(props) {
   
        return(
      
        
    
        <Card className="p-3 my-3">
        <div className="d-flex justify-content-between align-items-center">
            <Card.Title className="w-50">{props.title}</Card.Title>
     )

            <img src={CompanyLogo} style={{ height: 100, width: 100 }} />
        </div>
        <span style={{ marginTop: -25, marginBottom: 30 }}>Snapdeal</span>
        <div className="d-flex justify-content-around align-items-center" style={{ width: "80%" }}>
            <div>
                <p>START DATE</p>
                <p>Immediately</p>
            </div>
            <div>
                <p>DURATION</p>
                <p>4 Weeks</p>
            </div>
            <div>
                <p>STIPEND</p>
                <p>Unpaid</p>
            </div>
            {/* <div>
                <p>APPLY BY</p>
                <p>22 May 21</p>
            </div> */}
        </div>
        <div className="d-flex justify-content-around align-items-center" style={{ width: "45%" }}>
            <p>Internship</p>
            <p>Part Time allowed</p>
        </div>
    </Card>
    )
}

export default MainCard
