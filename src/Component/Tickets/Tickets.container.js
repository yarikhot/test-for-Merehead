import { connect } from 'react-redux';

import Tickets from './Tickets.component';
import { getData } from '../../store/aciton';

const mapStateToProps = state => ({
  arrival: state.arrival,
  departure: state.departure,
});

export default connect(
  mapStateToProps,
  { getData }
)(Tickets);
