import React from 'react'

export default function MapTopView(props) {

    

    return (
        <div className="border float-none m-1">
            <p><b>Title: </b>{props.p.title}</p>
            <p><b>Postcode: </b>{props.p.postcode}</p>
            <p><b>Description: </b>{props.p.description}</p>
            <p><b>Votes: </b>{props.p.voteCount}</p>
            <p><b>Rank: </b>{props.rank}</p>
        </div>
    )
}