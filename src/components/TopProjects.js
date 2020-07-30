import React, { useEffect, useState } from 'react'
import MapTopProjects from './MapTopProjects'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom'

export default function TopProjects() {
    const [topProjects, setTopProjects] = useState([])
    useEffect(() => {
        fetch('http://localhost:4000/projects/popular')
            .then(res => res.json())
            .then(json => setTopProjects(json))
    })
    let result = 0
    function rank()  {
        return ++result
    }
    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item className="breadcrumb-item text-body" > <Link to="/">Home</Link> </ Breadcrumb.Item>
                <Breadcrumb.Item active className="breadcrumb-item text-body font-weight-bolder"> Top 10 My Community Project Proposal </ Breadcrumb.Item>
            </ Breadcrumb>
            <h1><strong>Top 10 My Community Project Proposals</strong></h1><br />
            {topProjects.map((p, index) => <MapTopProjects rank={++index} key={p.id} p={p} />)}
            <br />
        </div>
    )
}