import { HtmlHTMLAttributes, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { experimental_useFormStatus as useFormState } from 'react-dom';
export const BusinessFormComponent = ({show,onclose}:any)=>{
    // const [name,setname] = useState<string>('')
    // const [number,setnumber] = useState<string>('')
    // const [email,setemail] = useState<string>('')
    // const [message,setmessage] = useState<string>('')
    // const handleNameChange = (e:any)=>{
    //     setname(e.target.value)
    // };
    // const handleEmailChange = (e:any)=>{ setemail(e.target.value)}
    // const handleNumberChange = (e:any)=>{ setnumber(e.target.value)}
    // const handleMessageChange = (e:any)=>{ setmessage(e.target.value)}
    // const handleSubmit=async (e:any)=>{
    //     e.preventDefault();
    //     const enquireData = {
    //         name,
    //         number,
    //         email,
    //         message
    //     }
    //     try {
    //         const response = await fetch('/api/submitenquire',{
    //             method:'POST',
    //             headers:{
    //                 'Content-Type':'application/json'
    //             },
    //             body:JSON.stringify(enquireData)
    //         });
    //         if(response.status === 200){
    //             console.log('Form submitted')
    //         }else{
    //             console.log('Failed to submit enquire');
    //         }
    //     } catch (error) {
    //         console.error("Network or server error")
    //     }
    // }
    
    const handlesubmit = (formdata:FormData)=>{
      const name = formdata.get('username');
      const email = formdata.get('email');
      const number = formdata.get('number');
      const message = formdata.get('message');
       const obj = {
        name,email,number,message
       }  
      console.log("Data submitted: ",obj)
      fetch('https://script.google.com/macros/s/AKfycbxRyG0l7bcyWKN_Qv7iSWppTuYrReX6NM0Dbr0csAhZqnsImgaNQfcOibkFXbLxrm5e/exec', {
        redirect: "follow",
        method: 'POST',
        mode:'no-cors',
        body: JSON.stringify(formdata),
})
  .then((response) => {
    if(response.ok){
      console.log("Data submitted successfully")
    }else{
      console.log("Data not submitted successfully")
    }
  })

  .catch((error) => {
    console.error('Error sending data to Google Sheets:', error);
  });
    }
    return <>
          <Modal show={show} onHide={onclose}>
        <Modal.Header closeButton>
          <Modal.Title>Enquire Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form action={handlesubmit}>
      <Form.Group className="mb-3" controlId="Name">
        <Form.Label>Name</Form.Label>
        <input  className="form-control form-control" name='username' type="text" placeholder="Enter name" aria-label="name"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <input name='email' className='form-control' aria-label="email"  type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Mobile Number</Form.Label>
        <input name='number'  className='form-control' aria-label="number"  type="number" placeholder="Enter mobile number" />
      </Form.Group>
      <label htmlFor="enquirereason" className="form-label">Message</label>
  <textarea  name='message'  className='form-control' aria-label="message"  id="enquirereason" rows={3}></textarea>
      <Button  className='mt-2' variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </Modal.Body>
      </Modal>
    </>
}