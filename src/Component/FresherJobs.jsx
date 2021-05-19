import React from 'react'
import { Container, Jumbotron } from 'react-bootstrap'
import MainForm from './MainForm'

function FresherJobs() {
  return (
    <Container>
      
        <img className="hieght" src="img/img1.png" alt=" fresh job" />
          <h1 className="container">101 jobs for freshers and remote jobs</h1>
      <MainForm />
    
    </Container>
  )
}

export default FresherJobs
