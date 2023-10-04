'use client'
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
export const BusinessFormComponent = ({show,onclose}:any)=>{

    return <>
          <Modal show={show} onHide={onclose}>
        <Modal.Header closeButton>
          <Modal.Title>Enquire Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="Name">
        <Form.Label>Name</Form.Label>
        <input className="form-control form-control" type="text" placeholder="Enter name" aria-label="name"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control type="number" placeholder="Enter mobile number" />
      </Form.Group>
      <label htmlFor="enquirereason" className="form-label">Message</label>
  <textarea className="form-control" id="enquirereason" rows={3}></textarea>
      <Button className='mt-2' variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </Modal.Body>
      </Modal>
    </>
}