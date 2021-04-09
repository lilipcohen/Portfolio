import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Wrapper from './components/Wrapper';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import Footer from './components/Footer/Footer';
import Lauracullen from './pages/Lauracullen';
import Northwest from './pages/Northwest';
import Griffinoskar from './pages/Griffinoskar';

function App() {
  return (
    <div>
      <Router>
        <Wrapper>
          <Nav />
          <Route exact path={['/', '/home']} component={Home} />
          <Route path="/portfolio" component={Portfolio} />
          {/* <Route path="/contact" component={Contact} /> */}
          <Route exact path="/lauracullen" component={Lauracullen} />
          <Route exact path="/northwestveg" component={Northwest} />
          <Route exact path="/griffinoskar" component={Griffinoskar} />
        </Wrapper>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
