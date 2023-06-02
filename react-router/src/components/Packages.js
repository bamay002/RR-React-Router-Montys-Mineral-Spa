import React from "react"
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'

export default function Packages(props){
    const displayPackages = props.packages.map((eachPackage) => <ListGroup.Item >{eachPackage}</ListGroup.Item>)

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
                <ListGroup>
                    {displayPackages}
                </ListGroup>
            </Card>
        </Container>
    )
}
