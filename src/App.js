import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homenav from './components/nav/Nav';
import Home from './components/home/Home';
import About from './components/about/about';
import Portfolio from './components/portfolio/portfolio';
import Tools from './components/tools/tools';
import Footer from './components/footer/footer';


function App() {
  return (
    <div className="App">
      <section>
         <Homenav />
      </section>

      <section>
         <Home />
      </section>

      <section>
         <About />
      </section>

      <section>
         <Portfolio />
      </section>

      <section>
         <Tools />
      </section>

      <section>
         <Footer />
      </section>

    </div>
  );
}

export default App;
