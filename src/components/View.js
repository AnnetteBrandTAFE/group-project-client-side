import React, { useState, useEffect } from 'react'
import  Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom'
import MapView from "./MapView";
import { InputGroup, FormControl, Button } from 'react-bootstrap';

export default function View() {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch("http://localhost:4000/projects/approved")
            .then((res) => res.json())
            .then((json) => {
                setProjects(json.data)
            });
    }, [projects]);
    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item className="breadcrumb-item text-body" > <Link to="/">Home</Link> </ Breadcrumb.Item>
                <Breadcrumb.Item active className="breadcrumb-item text-body font-weight-bolder"> My Community Project Proposal </ Breadcrumb.Item>
            </ Breadcrumb>
            <h1><strong>My Community Project Proposals</strong></h1>
            <Link to='/topprojects'><Button className='!important btn btn-danger btn-lg center float-right mb-3' to='/topprojects'>Click here to view the top 10 proposals</Button></Link>
            <br />
            <InputGroup size="lg">
                <FormControl
                    placeholder="Enter Search here..."
                    aria-label="Enter Search here..."
                />
                <InputGroup.Append>
                    <Button variant='!important btn btn-danger'>Search</Button>
                </InputGroup.Append>
            </InputGroup>
            {projects.map(p => <MapView p={p} key={p.id} />)}
        </div>
    )
}

