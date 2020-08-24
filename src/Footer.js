import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css';
function Footer() {

    return(
      <div className="pop">
            <footer style={{left:0,bottom:0,width: "100%",
backgroundColor: "#343A40"}} >
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}>
                       <p style={{color:'white'}}>HAVE A NICE DAY 
                           </p> 
                    </Col>
                   <Col className="p-0 d-flex justify-content-end" md={3}>
                         <p style={{color:'white'}}>THANK YOU! </p>  
                      </Col>
                </Row>
            </Container>
        </footer>
        </div>
    );

}

export default Footer;

