import './tools.css'
import { Row , Col } from 'react-bootstrap'
import html from './html.png'
import css from './css.png'
import js from './js.png'
import react from './react.png'


const Tools = () => {
    return (
        <div>
             <Row className="justify-content-center tools">
                <Col>
                    <h3 className="text-white">Tools</h3>
                </Col>
            </Row>

            <Row className="justify-content-center tools">
                <Col>
                    <img src={html} style={{ width: '10rem' }}/>
                </Col>
                <Col>
                    <img src={css} style={{ width: '10rem' }}/>
                </Col>
                <Col>
                    <img src={js} style={{ width: '10rem' }}/>
                </Col>
                  <Col>
                    <img src={react} style={{ width: '10rem' }}/>
                </Col>
            </Row>
        </div>
    )
}

export default Tools;