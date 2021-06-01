import React from 'react'
import { Container, Jumbotron } from 'react-bootstrap'
import WorkFromHome from './WorkFromHome'

function FresherJobs() {
  return (
    <Container>
      
        {/* <img className="hieght" src="img/img1.png" alt=" fresh job" /> */}
        
        <img src="img/img4.png"  className="doc1" alt="fresh job"></img>
          {/* <h1 className="container">101 jobs for freshers and remote jobs</h1> */}
      <WorkFromHome/>
    
    </Container>
  )
}

export default FresherJobs
