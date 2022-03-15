import './footer.css'
import { Row , Col } from 'react-bootstrap'

const Footer = () => {
    return (
        <div>
            <Row>
                <Col className='justify-content-center'>
                    <div className='footer'>
                        <h5>Created By Andaka 2022</h5>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Footer;