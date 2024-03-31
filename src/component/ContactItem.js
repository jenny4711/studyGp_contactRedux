import React from 'react';
import {Col,Row} from 'react-bootstrap'
import '../App.css'
import {  useDispatch } from 'react-redux';
import { delBtn } from '../redux/Actions/contactAction';
const ContactItem = ({name,number,onPress}) => {
  const dispatch=useDispatch()
  // const handleDel=(name)=>{
  //   dispatch(delBtn(name))
  // }

  return (
    <Row style={{"width":'550px'}} className='ContactItem'>
    <Col lg={2}>
    <img width={50} src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/542px-Unknown_person.jpg'/>
    </Col>  
    <Col className='info' lg={10}>
    <div>{name}</div>
    <div>{number}</div>
 <button className='delBtn' onClick={onPress}>Delete</button>
    </Col>  
    
    </Row>
  );
}

export default ContactItem;
