import React from 'react';
import Navi from './Navigation';
import {FaFacebookSquare,FaInstagramSquare,FaGithubSquare} from "react-icons/fa";
import {Form,Button,Col,Badge, Container} from 'react-bootstrap';
import picture1 from './img/bg.png';


       
export default class Social extends React.Component{
  render() {
    return(
      <div style={{backgroundImage:`url(${picture1})`, backgroundPosition:'top', margin:'auto',width:'100%',height:'100%',padding:0,backgroundSize:'cover', backgroundRepeat:'no-repeat'}}>
      <div  className="social">
      <Navi/>
      <Col className="justify-content-md-center" md={{ span: 6, offset: 3 }}>
      <Form>
        <br/>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label><h4 style={{color:'white'}}>Email address</h4></Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
 
  <Form.Group controlId="Feed-Back">
    <Form.Label><h4 style={{color:'white'}}>Feed-Back</h4></Form.Label>
    <Form.Control as="textarea" rows="6" />
  </Form.Group>
  <Button variant="primary"type="submit"className="submit">

             Submit

</Button>
</Form>
</Col>
<br/>
<br/>
<br/>
<br/>
<div>
      <h1 style={{textAlign:'center',color:'white'}}>LET'S CONNECT</h1>
      <p style={{textAlign: "center"}}><Badge><h5 style={{color:'white'}}>Email: dristi.biyani@gmail.com</h5></Badge> </p>
      <Container style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
       <a style={{align:"center"}} href="https://www.facebook.com/dristi.biyani" target="_blank"
       rel="noopener noreferrer">
       <FaFacebookSquare size={40}/></a>
       <a style={{paddingLeft:"25px"}} href="https://www.instagram.com/dristibiyani" target="_blank"
       rel="noopener noreferrer"><FaInstagramSquare size={40} /></a>
       <a style={{paddingLeft:"25px"}} href="https://github.com/DristiB" target="_blank"
       rel="noopener noreferrer"><FaGithubSquare size={40}/></a>
       </Container>
     </div>
      </div>
      </div>
    )
  }
}
      
    
