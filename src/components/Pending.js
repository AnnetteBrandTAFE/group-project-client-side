import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Switch, BrowserRouter as Router , Route, Link, useRouteMatch } from 'react-router-dom'
import UpdateStatus from './UpdateStatus'
import Button from 'react-bootstrap/Button'

export default function Pending() {

    const [pendingProjects, setPendingProjects] = useState()
    const [projectStatus, setProjectStatus] = useState()
    const [id, setId] = useState()


    useEffect(() => {
        fetch('http://localhost:4000/projects/pending')
            .then(res => res.json())
            .then(json => setPendingProjects(json.map(p =>
                <div key={p.id} className="border float-none m-1">
                    <p>Project Title: {p.title}</p>
                    <p>Submitters name: {p.name}</p>
                    <p>Time of Submission: {p.timeStamp}</p>
                    <p>Postcode: {p.postcode}</p>
                    <p>Requested Funding Amount: $ {p.grantAmount}</p>
                    <p>Description: {p.description}</p>
                    <Link to={`${url}/${p.id}`}>Update Status</Link>
                </div>
            ))

            )

    }, [])

    let { path, url } = useRouteMatch()
    // debugger
    return (
        <div>
            <Router>
                <Switch>
                    <Route path={`${path}:id`}>
                        <UpdateStatus />
                    </Route>
                </Switch>
            </Router>
            <h1><strong>Pending My Community Project Proposals</strong></h1>
            {/* <h2>There are currently {pendingProjects.length} pending projects</h2> */}
            {console.log(pendingProjects)}
            {/* {pendingProjects.map(p =>
                <div key={p.id} className="border float-none m-1">
                    <p>Project Title: {p.title}</p>
                    <p>Submitters name: {p.name}</p>
                    <p>Time of Submission: {p.timeStamp}</p>
                    <p>Postcode: {p.postcode}</p>
                    <p>Requested Funding Amount: $ {p.grantAmount}</p>
                    <p>Description: {p.description}</p>
                    <Button to={`${url}/${p.id}`}>Update Status</Button>
                </div> 
             )} */}
            {pendingProjects}
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