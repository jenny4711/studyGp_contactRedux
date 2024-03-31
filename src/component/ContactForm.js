import { useState } from 'react';
import React from 'react';
import {Form,Button}from 'react-bootstrap';
import '../App.css'
import { addContact } from '../redux/Actions/contactAction';
import { useDispatch } from 'react-redux';
const ContactForm = ({setOpen}) => {
  const [name,setName]=useState('')
  const [phoneNum,setPhoneNum]=useState('')
 const dispatch=useDispatch()
const handleBtn=(evt)=>{
  evt.preventDefault();
  let item ={
    name,
    phoneNum
  }
dispatch(addContact(item))


}
 
  return (
    <Form onSubmit={handleBtn}>
      <Form.Group  className="mb-3 FormName" controlId="formName">
        <Form.Label > 이름</Form.Label>
       <Form.Control className='FormInput' type='text' placeholder='Enter name' onChange={(evt)=>setName(evt.target.value)}/>
     
      </Form.Group>

      <Form.Group  className="mb-3 FormPhone" controlId="formContact">
        <Form.Label >전화번호</Form.Label>
      <Form.Control className='FormInput' type="text" placeholder="전화번호를 입력해주세요" onChange={(evt)=>setPhoneNum(evt.target.value)}/>
      </Form.Group>
      <Button variant='primary' type='submit'>
       추가
      </Button>
    </Form>
  );
}

export default ContactForm;
