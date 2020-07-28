import React, { useState } from "react";
import { Button, Alert } from "react-bootstrap";

export default function MapView(props) {
    const [showMoreDetails, setShowMoreDetails] = useState(false)
    const [showSuccessfulVote, setShowSuccessfulVote] = useState(false)

    function sendVote() {
        fetch('http://localhost:4000/projects/approved/vote', {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(props.p),
        })
            .then((response) => response.json())
            .then(json => {
                if (json.status == 200) {
                    setShowSuccessfulVote(true)
                }
            })

    }


    return (
        <div className="border float-none m-1">
            <h4>{props.p.title}</h4>
            <p><b>Postcode: </b>{props.p.postcode}</p>
            <p><b>Description: </b>{props.p.description}</p>
            <p><b>Votes: </b>{props.p.voteCount}</p>
            <Button onClick={sendVote}>Vote</Button>
            <br />
            <br />
            {showSuccessfulVote && <Alert variant='success' onClose={() => setShowSuccessfulVote(false)} dismissible><Alert.Heading>Success!</Alert.Heading>You have successfully voted {props.p.title}</Alert>}

        </div>
    )

}


