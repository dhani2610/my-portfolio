import { Row , Container , Col , Card , Button } from 'react-bootstrap'
import './Home.css'
import me from './me.png'
// import  from 'vanilla-tilt'


const Home = () => {
    return(
        <Container>
        <Row className="mt-5">
        <Col xs lg="4"></Col>
          <Col className="mt-5" style={{ marginleft: '100px' }}>
              <center>
                <Card className="mt-5 me" style={{ width: '18rem' }}>
                <div data-tilt data-tilt-glare data-tilt-max-glare="0.8">
                    <Card.Img variant="top" src={me}/>
                </div>
                </Card>
              </center>
          </Col>
          <Col xs lg="4"></Col>
        </Row>

        <Row>
            <Col>
                  <h5 className="im">I'm Junior Web Developer</h5>
                  {/* <p>I'm <span className="typed" data-typed-items="Developer"></span></p> */}
            </Col>
        </Row>

        <Row>
            <center>
                <Col>
                    <Button className="mt-3" variant="danger">Download CV</Button>
                </Col>
            </center>
        </Row>

       
      </Container>
    )
}


  
export default Home;