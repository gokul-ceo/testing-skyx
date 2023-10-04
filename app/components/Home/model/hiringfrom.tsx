'use client'
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Modal from 'react-bootstrap/Modal';
export const CareerFormComponent = ({show,onclose}:any)=>{

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
      <label htmlFor='dropdwn-basic-button' className='form-label'>Choose your positions to apply.</label>
      <DropdownButton id="dropdown-basic-button" title="Select Positions">
      <Dropdown.Item>Position-1</Dropdown.Item>
      <Dropdown.Item>Position-2</Dropdown.Item>
      <Dropdown.Item>Position-3</Dropdown.Item>
    </DropdownButton>

    </Form>
        </Modal.Body>
      </Modal>
    </>
}