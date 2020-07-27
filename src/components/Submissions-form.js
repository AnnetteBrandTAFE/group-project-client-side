import React, { useState } from 'react';
import { Breadcrumb, Button, Alert } from 'react-bootstrap'
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom'
import Homepage from './Homepage'




export default function Submit(props) {
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [postcode, setPostcode] = useState('');
    const [grantAmount, setGrantAmount] = useState('');
    const [description, setDescription] = useState('');
    const [showFailAlert, setShowFailAlert] = useState(false)
    const [errorMessage, setErrorMessage] = useState()
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [showForm, setShowForm] = useState(true)
    const [showSuccess, setShowSuccess] = useState(false)

    function handlePostcodeChangeEvent(e) {
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value) && e.target.value.length <= 4) {
            setPostcode(e.target.value)
        }
    }

    function sendProjectProposal(e) {
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
                    setShowForm(false)
                    setShowFailAlert(false)
                    setShowSuccessMessage(true)
                    setShowSuccess(true)



                } else {
                    setShowSuccessMessage(false)
                    setShowFailAlert(true)
                    setErrorMessage(json.message)
                }
                // alert(json.status)
            })
    }
    return (

        <div>
            <Breadcrumb>
                <Breadcrumb.Item className="breadcrumb-item text-body font-weight-bold" > <a href="https://www.service.nsw.gov.au/">Home</a> </ Breadcrumb.Item>
                <Breadcrumb.Item active className="breadcrumb-item text-body font-weight-bolder"> Submit a My Community Project Proposal </ Breadcrumb.Item>
            </ Breadcrumb>

            <h1>Submit a My Community Project Proposal</h1>
            {showFailAlert && <Alert variant='danger' onClose={() => setShowFailAlert(false)} dismissible><Alert.Heading>Error</Alert.Heading>{errorMessage}</Alert>}
            {showSuccessMessage && <Alert variant='success' onClose={() => setShowSuccessMessage(false)} dismissible><Alert.Heading>Success</Alert.Heading>Your project application has been submitted and is pending approval</Alert>}
            <div style={{ display: showForm ? 'block' : 'none' }}>
                <br />
                <span className="text-danger"> * </span><span>indicates a required field</span> <br />
                <br />

                <form >
                    <div className="form-group">
                        <label htmlFor="name">Contact Name: </label><span className="text-danger"> *</span>
                        <input placeholder="Max 50 characters" onChange={(e) => setName(e.target.value)} value={name} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="title">Title of My Community Project Proposal: </label><span className="text-danger"> *</span>
                        <input placeholder="Max 50 characters" onChange={(e) => setTitle(e.target.value)} value={title} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="postcode">Postcode of where the Project is to be delivered: </label><span className="text-danger"> *</span>
                        <input onChange={handlePostcodeChangeEvent} value={postcode} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="grantAmount">Requested funding amount: </label><span className="text-danger"> *</span>
                        <input onChange={(e) => setGrantAmount(e.target.value)} value={grantAmount} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description of the My Community Project Proposal: </label><span className="text-danger">*</span>
                        <textarea placeholder="Max 300 characters" rows="5" onChange={(e) => setDescription(e.target.value)} value={description} className="form-control" />
                    </div>

                    <button className='!important btn btn-danger btn-lg' onClick={sendProjectProposal}>Submit</button>

                </form >
            </div>

            <div style={{ display: showSuccess ? 'block' : 'none' }}>
                <h4>Your application:</h4>
                <div className='border border-primary rounded-lg float-none p-3 mt-3'>
                    <p><b>Contanct Name: </b> {name}</p>
                    <p><b>Project Name: </b>{title}</p>
                    <p><b>Postcode: </b>{postcode}</p>
                    <p><b>Grant amount:</b> $ {grantAmount}</p>
                    <p><b>Description: </b>{description}</p>

                </div>
                <br />
                <Link to='/Homepage'><Button className='!important btn btn-danger btn-lg' to='/Home'>Home</Button></Link>
            </div>

        </div>
    )
}