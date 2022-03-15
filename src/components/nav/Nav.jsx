import './Nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row , Container , Col , Card , Button } from 'react-bootstrap'

// import { Navbar, Container , Nav , Offcanvas , NavDropdown } from 'react-bootstrap';

const Homenav = () => {
    return (
      <div>
        <Row>
          <Col></Col>
          <Col>
            <i class="fas fa-align-justify mobile-nav-toggle d-xl-none"></i>
            <header id="header" className="d-flex flex-column justify-content-center">

              <nav id="navbar" className="navbar nav-menu">
                <ul>
                  <li><a href="#hero" className="nav-link scrollto active"><i className="fas fa-home"></i> <span>Home</span></a></li>
                  <li><a href="#about" className="nav-link scrollto"><i className="fas fa-user"></i> <span>About</span></a></li>
                  <li><a href="#portfolio" className="nav-link scrollto"><i className="far fa-file-alt"></i> <span>Portfolio</span></a></li>
                  <li><a href="#contact" className="nav-link scrollto"><i className="fas fa-address-card"></i> <span>Contact</span></a></li>
                </ul>
              </nav>

            </header>
          </Col>
          <Col></Col>
        </Row>
      </div>
            
    );
}



  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }


  on('click', '.mobile-nav-toggle', function(e) {
    select('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('fa-align-justify')
    this.classList.toggle('fas fa-skull-crossbones')
  })






export default Homenav;

