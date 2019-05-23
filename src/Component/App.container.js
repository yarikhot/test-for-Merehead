import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import App from './App.component';

const mapStateToProps = store => ({
  //   auth: store.admin.auth,
  //   LoginStatus: store.admin.userData.status,
  //   currentPage: store.users.usersList.data.CurrentPage,
});

export default withRouter(connect(mapStateToProps)(App));
