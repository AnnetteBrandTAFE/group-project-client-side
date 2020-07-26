import React, { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom'
// import { Switch, BrowserRouter as Router, Route, Link, useRouteMatch } from 'react-router-dom'
// import UpdateStatus from './UpdateStatus'
// import Button from 'react-bootstrap/Button'
import PendingProject from "./PendingProject.js";

export default function Pending() {

    const [pendingProjects, setPendingProjects] = useState([])
    //const [projectStatus, setProjectStatus] = useState()
    //const [id, setId] = useState()


    useEffect(() => {
        fetch("http://localhost:4000/projects/pending")
            .then((response) => response.json())
            .then((json) => setPendingProjects(json));
    }, [pendingProjects]);


    // debugger
    return (
        <div>
            <h1><strong>Pending My Community Project Proposals</strong></h1>
            <br />
            <h2>There are currently {pendingProjects.length} pending projects</h2>
            <br />
            {pendingProjects.map(p => <PendingProject key={p.id} p={p} />)}

        </div>

    )
}
// {/* </div> */}
// <form>
//     <div className="form-group float-right">
//         {/* <select onChange={(p) => setProjectStatus(p.target.value)} htmlFor="status" className="form-control">
//             <option value="approved">Approve</option>
//             <option value="decline">Decline</option>
//         </select>
//          */}
//          {/* <button onClick={}>Approve</button> */}
//         <button onClick={setId(p.id), sendApprovalRequest} className='!important btn btn-danger'>Update Status</button>
//     </div>
// </form>
// { console.log(id)}