import React, { useState, useEffect } from 'react'

import MapView from "./MapView";

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
            <h1><strong>My Community Project Proposals</strong></h1>
            <br />
            <br />
            {projects.map(p => <MapView p={p} key={p.id} />)}
        </div>

    )
}

