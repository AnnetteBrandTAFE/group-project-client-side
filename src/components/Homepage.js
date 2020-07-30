import React from 'react';
import { Breadcrumb, Button, CardDeck, Card, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Homepage from '../components/Homepage.png'

export default function homepage(props) {
    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item active className="breadcrumb-item text-body font-weight-bolder"> Home </ Breadcrumb.Item>
            </ Breadcrumb>
            <h1>My Community Project 2020</h1> <br />
            <Container>
                <img src={Homepage} width="100%" height="auto" alt="Drawing of a community"></img>
            </Container>
            <br />
            <p>My Community Project is a new initiative by the NSW Government to improve the wellbeing of people and communities in NSW. <br />
                <br />
            By having the ability to propose and vote on local projects, the people of NSW are given the opportunity to determine how to strengthen and improve their communities.<br />
                <br />
            My Community Project has been established using the Community Services and Facilities Fund within the NSW Generations Fund.<br />
                <br />
            The NSW Generations Fund is a new sovereign wealth fund for the State of NSW, created by the NSW Generations Fund Act 2018. The NSW Generations Fund helps keep the state’s debt at a sustainable level,
            while sharing the benefit of its returns with the people of NSW by funding community projects.<br />
                <br />
            The My Community Project funding will be distributed equally across all 93 NSW electorates. Applicants can seek between $20,000 and
            $200,000 (including GST, where applicable) for their project.</p>
            <CardDeck >
                <Card >
                    <Card.Body >
                        <Card.Title>Submit a Project</Card.Title>
                        <Card.Text>
                            My Community Project is all about local ideas, local projects and local decisions.
                    <br />
                    To submit a great idea to benefit local communities click here
                    </Card.Text>
                        <Link to='/project/submission'><Button className='!important btn btn-danger btn-lg' to='/project/submission'>Submit a Project Proposal</Button></Link>
                    </Card.Body>
                </Card>
                <Card >
                    <Card.Body>
                        <Card.Title>Browse projects</Card.Title>
                        <Card.Text>
                            Browse projects in your community
                    </Card.Text>
                        <br />
                        <br />
                        <br />
                        <Link to='/projects/approved'><Button className='!important btn btn-danger btn-lg' to='/projects/approved'>Browse Projects</Button></Link>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Vote for a project</Card.Title>
                        <Card.Text>
                            Have your say by voting on your favourite projects.
                    </Card.Text>
                        <br />
                        <br />
                        <Link to='/projects/approved'><Button className='!important btn btn-danger btn-lg' to='/projects/approved'>Vote Now</Button></Link>
                    </Card.Body>
                </Card>
            </CardDeck>
            <br />
        </div>
    )
} 