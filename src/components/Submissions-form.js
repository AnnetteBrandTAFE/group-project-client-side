import React, { useState } from 'react';




export default function Submit(props) {
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [postcode, setPostcode] = useState('');
    const [grantAmount, setGrantAmount] = useState('');
    const [description, setDescription] = useState('');

    function sendAddcardRequest(e) {
        e.preventDefault();
        let p = {
            name,
            title,
            postcode,
            grantAmount,
            description

        };

        fetch('http://localhost:4000/projects/submissions', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(p),
        })
            .then((response) => response.json())
            .then((json) => {

                if (json.status === 200) {
                    props.addProject(json.project);
                }
                else {
                    alert("There was an error");
                }
            })
    }
    return (
        <div>
            <nav>
        <ul class="breadcrumbs">
        <li class="breadcrumb-item"> <a href="/">Home</a></li>
        <li class="breadcrumb-item"> <a href="/project/submission">Submit a My Community Project Proposal</a></li>
        </ul>
      </nav>
            <h1>Submit a My Community Project Proposal</h1>
            <br />
            <form>
                <div class="form-group">
                    <label for="name">Contact Name: </label>
                    <input placeholder="Max 50 characters" onChange={(e) => setName(e.target.value)} value={name} className="form-control" />
                </div>
                <div class="form-group">
                    <label for="title">Title of My Community Project Proposal: </label>
                    <input placeholder="Max 50 characters" onChange={(e) => setTitle(e.target.value)} value={title} className="form-control" />
                </div>
                <div class="form-group">
                    <label for="postcode">Postcode of where the Project is to be delivered: </label>
                    <input onChange={(e) => setPostcode(e.target.value)} value={postcode} className="form-control" />
                </div>
                <div class="form-group">
                    <label for="grantAmount">Requested funding amount: </label>
                    <input onChange={(e) => setGrantAmount(e.target.value)} value={grantAmount} className="form-control" />
                </div>
                <div class="form-group">
                    <label for="description">Description of the My Community Project Proposal: </label>
                    <textarea placeholder="Max 300 characters" rows="5" onChange={(e) => setDescription(e.target.value)} value={description} className="form-control" />
                </div>
               
                    <button className='!important btn btn-danger btn-lg' onClick={sendAddcardRequest}>Next</button>
                
            </form >
        </div>
    )
}