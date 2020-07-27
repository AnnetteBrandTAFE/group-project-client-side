import React, { useState } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Form from 'react-bootstrap/Form'
import Alert from 'react-bootstrap/Alert'




export default function Submit(props) {
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [postcode, setPostcode] = useState('');
    const [grantAmount, setGrantAmount] = useState('');
    const [description, setDescription] = useState('');
    const [showFailAlert, setShowFailAlert] = useState(false)
    const [errorMessage, setErrorMessage] = useState()
    const [showSuccessMessage, setShowSuccessMessage]= useState(false)

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
                    setShowFailAlert(false)
                    setShowSuccessMessage(true)
                    setTitle('')
                    setGrantAmount('')
                    setPostcode('')
                    setName('')
                    setDescription('')
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
            {showFailAlert && <Alert variant='danger' onClose={()=>setShowFailAlert(false)} dismissible><Alert.Heading>Error</Alert.Heading>{errorMessage}</Alert>}
            {showSuccessMessage && <Alert variant='success' onClose={()=>setShowSuccessMessage(false)} dismissible><Alert.Heading>Success</Alert.Heading>Your project application has been submitted and is pending approval</Alert>}

            <br />
            <span className="text-danger">* </span><span>indicates a required field</span> <br />
            <br />
            <Form>
                <div className="form-group">
                    <label htmlFor="name">Contact Name: </label><span className="text-danger">*</span>
                    <input placeholder="Max 50 characters" onChange={(e) => setName(e.target.value)} value={name} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="title">Title of My Community Project Proposal: </label><span className="text-danger">*</span>
                    <input placeholder="Max 50 characters" onChange={(e) => setTitle(e.target.value)} value={title} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="postcode">Postcode of where the Project is to be delivered: </label><span className="text-danger">*</span>
                    <input onChange={(e) => setPostcode(e.target.value)} value={postcode} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="grantAmount">Requested funding amount: </label><span className="text-danger">*</span>
                    <input onChange={(e) => setGrantAmount(e.target.value)} value={grantAmount} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description of the My Community Project Proposal: </label><span className="text-danger">*</span>
                    <textarea placeholder="Max 300 characters" rows="5" onChange={(e) => setDescription(e.target.value)} value={description} className="form-control" />
                </div>

                <button className='!important btn btn-danger btn-lg' onClick={sendProjectProposal}>Submit</button>

            </Form >
        </div>
    )
}