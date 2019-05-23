import React, { PureComponent, Fragment } from 'react';

import Header from './Header/Header';
import Tickets from './Tickets/Tickets.container';
import Footer from './Footer/Footer';

class App extends PureComponent {
  render() {
    window.scrollTo(0, 0);
    return (
      <Fragment>
        <Header />
        <div className="container">
          <Tickets />
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
