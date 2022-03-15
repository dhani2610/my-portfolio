import './portfolio.css';
import { Row , Container , Col , Card , Button } from 'react-bootstrap'


const Portfolio = () => {
    return(
        <div>
            <Row className="justify-content-center portfolio">
                <Col>
                    <h3 className="text-white">Portfolio</h3>
                </Col>
            </Row>

            <Row className="mt-5">
                <Col>
                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum aliquam sequi eius molestiae accusamus blanditiis? Quibusdam, consectetur. Dignissimos eaque illum, temporibus cupiditate possimus distinctio nemo exercitationem quidem porro facilis dolorem nostrum at ullam recusandae reprehenderit quae voluptates accusantium consectetur aspernatur? Voluptatem a ullam dolor officia impedit soluta, vero autem blanditiis illo eius sunt doloremque deserunt minima unde ratione sint saepe itaque earum sed ad. Sequi quae laudantium eligendi modi odit? Aperiam ullam sapiente quasi quam esse commodi magnam. Deleniti illo ad quos quibusdam harum at consectetur, saepe eos repellat cum accusantium quod dolore hic inventore doloremque modi ipsa ipsum tempore.</p>
                </Col>
            </Row>
        </div>
    )
}

export default Portfolio;