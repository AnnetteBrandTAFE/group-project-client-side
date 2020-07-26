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
                    alert("Project APPORVED!")
                }
                else {
                    alert("status is wrong");
                };
            });

    }

    return (
        <div className="border float-none m-1">
            <p>Project Title: {props.p.title}</p>
            <p>Submitters name: {props.p.name}</p>
            <p>Time of Submission: {props.p.timeStamp}</p>
            <p>Postcode: {props.p.postcode}</p>
            <p>Requested Funding Amount: $ {props.p.grantAmount}</p>
            <p>Description: {props.p.description}</p>
            <Button onClick={ApproveProjectFunction}>approve</Button>
        </div>
    )

}