import React, { useState, useEffect } from 'react'
import PendingProject from "./PendingProject.js";
import Breadcrumb from 'react-bootstrap/Breadcrumb'

export default function Pending() {

    const [pendingProjects, setPendingProjects] = useState([])

    useEffect(() => {
        fetch("http://localhost:4000/projects/pending")
            .then((response) => response.json())
            .then((json) => setPendingProjects(json));
    }, [pendingProjects]);

    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item className="breadcrumb-item text-body font-weight-bold" > <a href="https://www.service.nsw.gov.au/">Home</a> </ Breadcrumb.Item>
                <Breadcrumb.Item active className="breadcrumb-item text-body font-weight-bolder"> Pending My Community Project Proposal </ Breadcrumb.Item>
            </ Breadcrumb>
            <h1><strong>Pending My Community Project Proposals</strong></h1>
            <br />
            <h2>There are currently {pendingProjects.length} pending projects</h2>
            {pendingProjects.map(p => <PendingProject key={p.id} p={p} />)}

        </div>

    )
}
