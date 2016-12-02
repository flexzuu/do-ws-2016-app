import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import AppContainer from '../components/AppContainer';

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(ActionCreators, dispatch);
const mapStateToProps = (state) => ({
  navigation: state.navigation,
});
export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);