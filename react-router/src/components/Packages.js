import React from "react"
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Packages(props){

    const displayPackages = props.packages.map((eachPackage, i) => (
        <Col key={i}>
            <Card border='info'>
                <Card.Title>   
                    {eachPackage}
                </Card.Title>
            </Card>
        </Col>))

    return (
        <Container className="packages">
            <Container>
                <h1>Our Packages</h1>
            </Container>
            <Card className="packages">
                <Card.Body className="packagesHeader">
                    <Card.Text style={{fontSize:'20px'}}>
                        Take a look at some of our packages!
                    </Card.Text>
                </Card.Body>
                <Row xs={1} md={2} className="g-4" style={{padding:'20px'}}>
                    {displayPackages}
                </Row>
            </Card>
        </Container>
    )
}
