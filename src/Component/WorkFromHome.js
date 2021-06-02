import React from 'react';
import { Card, Form, Row, Dropdown, DropdownButton, InputGroup } from 'react-bootstrap';
import "../App.css";
import titleData from './titleData';
import MainCard from './MainCard';

function Search() {
    const titledataComponent = titleData.map(maincard => <MainCard key={maincard.id} title={maincard.title} />)
    return (
        <div className='container99'>
            <Row className="mainContainer">
                <div className="col-md-4">
                    <Card style={{ height: "90%", overflow: "auto", }}>
                        <Card.Title className="font-weight-bold text-center w-100 my-3">Filters</Card.Title>
                        <Card.Body>
                            <Form>
                                <Form.Group controlId="category">
                                    <Form.Label>Category :</Form.Label>
                                    <Form.Control type="text" placeholder="e.g. Marketing" />
                                </Form.Group>
 
                                <Form.Group controlId="location">
                                    <Form.Label>Location :</Form.Label>
                                 <Form.Control type="text" placeholder="e.g. Delhi" />
                                </Form.Group>
                                <Form.Group controlId="wfh" className="d-flex justify-content-between align-items-center">
                                    <Form.Label>Work From Home </Form.Label>
                                    <Form.Switch
                                        type="switch"
                                        id="wfhSwitch"
                                    />
                                </Form.Group>
                                <Form.Group controlId="partTime" className="d-flex justify-content-between align-items-center">
                                    <Form.Label>Part-Time</Form.Label>
                                    <Form.Switch
                                        type="switch"
                                        id="partTimeSwitch"
                                    />
                                </Form.Group>
                                <Form.Group controlId="price">
                                    <Form.Label>Desired minimum monthly stipend (Rs)</Form.Label>
                                    <Form.Control type="range" custom list="tick-list" max="6" step="1" />
                                </Form.Group>
                                <Form.Group controlId="startingfrom">
                                    <Form.Label>Starting from ( or after) :</Form.Label>
                                    <Form.Control type="date" placeholder="Choose date" />
                                </Form.Group>
                                <Form.Group controlId="maxDuration">
                                    <Form.Label>Max. duration :</Form.Label>
                                    <Form.Control type="date" placeholder="e.g. Delhi" />
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-md-8">
                    <div className="w-100 d-flex justify-content-center align-items-center">
                        {/* <DropdownButton
                            variant="light"
                            title="6046 work from home jobs/internships"
                            id="input-group-dropdown-1"
                            
                        >
                        
                            
                        </DropdownButton> */}
                    </div>
                    <div style={{ height: "85vh", overflow: "auto" }}>
                        {titledataComponent}
                    </div>
                </div>
            </Row>
        </div>
    )
}

export default Search
