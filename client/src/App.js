import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Wrapper from './components/Wrapper';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';

function App() {
  return (
    <div>
      <Router>
        <Wrapper>
          <Nav />
          <Route exact path={['/', '/home']} component={Home} />
          {/* <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} /> */}
        </Wrapper>
      </Router>
    </div>
  );
}

export default App;
