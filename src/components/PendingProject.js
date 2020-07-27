import React from "react";
import { Button } from "react-bootstrap";

export default function PendingProject(props) {

    function ApproveProjectFunction() {
        fetch('http://localhost:4000/projects/approve', {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(props.p),
        })
            .then((response) => response.json())
            .then((json) => {
                if (json.status === 200) {
                    alert("Project has been APPORVED!")
                }
                else {
                    alert("status is wrong");
                };
            });
    }
    function DeclineProjectFunction() {
        fetch('http://localhost:4000/projects/decline', {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(props.p),
        })
            .then((response) => response.json())
            .then((json) => {
                if (json.status === 200) {
                    alert("Project has been DECLINED!")
                }
                else {
                    alert("status is wrong");
                };
            });
    }
    return (
        <div className="border border-primary rounded-lg float-none p-3 mt-3">
            <p><b>Project Title: </b>{props.p.title}</p>
            <p><b>Submitters name: </b>{props.p.name}</p>
            <p><b>Time of Submission: </b>{props.p.timeStamp}</p>
            <p><b>Postcode: </b>{props.p.postcode}</p>
            <p><b>Requested Funding Amount: </b>$ {props.p.grantAmount}</p>
            <p><b>Description: </b>{props.p.description}</p>
            <div class="d-flex justify-content-start">
                <Button className="btn btn-primary mr-3" onClick={ApproveProjectFunction}>Approve</Button>
                <Button className="btn btn-danger" onClick={DeclineProjectFunction}>Decline</Button>
            </div>
        </div>
    )
}