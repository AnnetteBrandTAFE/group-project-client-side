import React from 'react'

export default function MapTopView(props) {
    return (
        <div className="border border-primary rounded-lg float-none p-3 mt-3">
            <div className="row">
                <div className="col-sm-2 text-primary text-center"><h1 className="display-1 text-center"><b>{props.rank}</b></h1></div>
                <div className="col"><p><b>Title: </b>{props.p.title}</p>
                    <p><b>Postcode: </b>{props.p.postcode}</p>
                    <p><b>Description: </b>{props.p.description}</p>
                    <p><b>Votes: </b>{props.p.voteCount}</p>
                </div>
            </div>
        </div>
    )
}