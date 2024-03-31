import React from 'react';
import { Row ,Col,Form,Button} from 'react-bootstrap';

const SearchBox = ({open,setSearch,handleSearch}) => {

  return (
    <Row>
      <Col lg={10}>
      <Form.Control type='text' placeholder='Enter name' onChange={(evt)=>setSearch(evt.target.value)}/>
      </Col>
      <Col lg={2}>
      <Button onClick={handleSearch}>{!open?'찾기':'리스트'}</Button>
      </Col>
    </Row>
  );
}

export default SearchBox;
