import './about.css'
import { Row, Col , Card , Container } from 'react-bootstrap'
import aboutgmbr from './about.jpg'


const About = () => {
    return (
        <div>

            <Container>
            <Row className="justify-content-md-center about">
                <Col>
                   <h3 className="text-white">About Me</h3>
                </Col>
            </Row>
                <Row className="justify-content-md-center mt-5">
                    <Col xs lg="5">
                        <h4>Who Am I ?</h4>
                        <h5>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque autem optio maiores ut pariatur quibusdam sequi rerum similique id laudantium enim iure asperiores modi tempora voluptatum possimus, quasi consectetur facilis laboriosam corrupti reprehenderit quos vel temporibus a. Consequuntur esse minus ipsum! Eum perferendis dicta tempore quibusdam repudiandae est minus eius.
                        </h5>
                    </Col>
                    <Col xs lg="5">
                    <center>
                        <Card className="mt-5 me" style={{ width: '30rem' }}>
                            <Card.Img variant="top" src={aboutgmbr}/>
                        </Card>
                    </center>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About;
