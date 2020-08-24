import React from 'react';
import Navi from './Navigation';
import {Card,Button} from 'react-bootstrap';
import picture from './img/pp.jpeg';
import picture1 from './img/bg.png';
import picture2 from './img/java.jpg';
import picture3 from './img/python.jpg';
import picture4 from './img/html.png';
import picture5 from './img/CSS.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Fade from 'react-bootstrap/Fade';
export default class Home extends React.Component

{
  constructor(props){

    super(props);
    
    this.state= { fadeIn:
     false };
    
    this.toggle= this.toggle.bind(this);
    
    }
    render(){
    return(
    <div style={{backgroundImage:`url(${picture1})`, backgroundPosition:'top', margin:'auto',width:'100%',height:'100%',padding:0,backgroundSize:'cover', backgroundRepeat:'no-repeat'}}>
      <Navi/>
       <br/>
       <h1 style={{color:'white', marginLeft:'4%'}}>ABOUT</h1>
       <br/>
       <Container fluid={true}>
           <Row >
                    <Col className="p-0">
                <Row >
                   <Card style={{ width:"95%", justifyContent: 'center',backgroundColor:"#FA8072",marginLeft:'8%'}}>
                     <br/>
  <Card.Img style={{display: "block", marginLeft: 'auto', marginRight: 'auto', width: '50%'}} variant="top" src={picture}/>
  <Card.Body>
    <Card.Title style={{textAlign:'center'}}><h4>DRISTI BIYANI</h4></Card.Title>
    <Card.Text>
      <h5>Hey I'm Dristi, a student of Manipal Institute of Technology studying Electrical and Electronics engineering. My goal is to keep learning something new everyday.</h5>
    </Card.Text>
  </Card.Body>
</Card>
  </Row>
  </Col>
  <Col style={{marginLeft:'30px'}}>
  <Row className>
      <Card md={4} style={{width:'45rem',backgroundColor:"#FA8072"}}>
      <br/>
      <p style={{marginLeft:'20px'}}><h3><strong>SKILLS</strong></h3></p>
      <Row>
        <Col>
        <ul>
          <li><h5>JAVA</h5></li>
        </ul>
        </Col>
        <Col>
        <ul>
          <li><h5>C</h5></li>
        </ul>
        </Col>
          <Col>
        <ul>
          <li><h5>PYTHON</h5></li>
        </ul>
        </Col>
        </Row>
        <Row>
        <Col>
        <ul>
          <li><h5>HTML5</h5></li>
        </ul>
        </Col>
        <Col>
        <ul>
          <li><h5>CSS</h5></li>
        </ul>
        </Col>
        <Col>
        <ul>
          <li><h5>JAVA-SCRIPT</h5></li>
        </ul>
        <br/>
        </Col>
       
        </Row>
  </Card>
  </Row>
  <br/>
  <Row >
      <Card style={{width:'45rem',backgroundColor:"#FA8072"}}>
      <br/>
      <p style={{marginLeft:'20px'}}><h3><strong>HOBBIES AND INTERESTS</strong></h3></p> 
      <Button variant="dark" style={{width:'8rem',marginLeft:'20px'}} onClick={this.toggle}>Click me!</Button>
      <Fade
in={this.state.fadeIn}
className='my-2'>
<Card.Text>
<br/>
<p style={{marginLeft:'20px'}}> <h5>Some of the activities that really make me happy are dancing and baking.</h5></p>
      <br/>
      <p style={{marginLeft:'20px'}}><h5>As of now I am particularly interested in developing my skills in graphic designing and web development.</h5></p>
      <br/>
      </Card.Text>
</Fade>
      </Card>
  </Row>
  </Col>
  </Row>
  </Container>
  <br/>
</div>
       
    );
    }

toggle(){

  this.setState({
  
  fadeIn: !this.state.fadeIn
  
  });
}
}