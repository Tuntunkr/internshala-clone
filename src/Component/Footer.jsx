import React from "react";

function Footer() {
  return (
    <div className="main-footer">
      <div className="row">
        {/* column1 */}
        <div className="col">
          <h5>Internships by places</h5>
          <ul>
            <li>
              <a href="#">Internship in India</a>
            </li>
            <li>
              <a href="#">Internship in Bangalore</a>
            </li>
            <li>
              <a href="#">Internship in Hyderabad</a>
            </li>
            <li>
              <a href="#">Internship in Mumbai</a>
            </li>
            <li>
              <a href="#">Internship in Chennai</a>
            </li>
            <li>
              <a href="#">Internship in Gurgaon</a>
            </li>
            <li>
              <a href="#">Internship in Kolkata</a>
            </li>
            <li>
              <a href="#">Virtual internship</a>
            </li>
          </ul>
        </div>
        {/* column2 */}
        <div className="col">
          <h5>Internship by Stream</h5>
          <ul>
            <li><a href="#">Computer Science Internship</a></li>
            <li><a  href="#">Electronics Internship</a></li>
            <li><a  href="#">Mechanical Internship</a></li>
            <li><a  href="#">Civil Internship</a></li>
            <li><a  href="#">Marketing Internship</a></li>
            <li><a  href="#">Chemical Internship</a></li>
            <li><a  href="#">Finance Internship</a></li>
            <li><a  href="#">Summer Research Fellowship</a></li>
            <li><a  href="#">Campus Ambassador Programs</a></li>
          </ul>
        </div>
        {/* column3 */}
        <div className="col">
          <h5>Online Trainigs</h5>
          <ul>
            <li> <a href="#">Web Development</a></li>
            <li><a href="#">Android App Development</a></li>
            <li> <a href="#">Programming with Python</a></li>
            <li><a href="#">Data Science</a></li>
            <li> <a href="#">Ethical Hacking</a></li>
            <li><a href="#">Core Java</a></li>
            <li><a href="#">Digital Marketing</a></li>
            <li><a href="#">Advanced Excel</a></li>
            <li><a href="#">Programming with C & c++</a></li>
          </ul>
        </div>

        <div className="col">
          <h5>About Internshala</h5>
          <ul>
            <li> <a href="#">About us</a></li>
            <li><a href="#">We're hiring</a></li>
            <li> <a href="#">Hire interns for your company</a></li>
            <li><a href="#">Team Diary</a></li>
            <li> <a href="#">Blog</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
