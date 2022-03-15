import './footer.css'
import { Row , Col } from 'react-bootstrap'

const Footer = () => {
    return (
        <div>
            <Row>
                <Col className='justify-content-center'>
                    <div className='footer'>
                        <span>Created By Andaka 2022</span>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Footer;