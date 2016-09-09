import { connect } from 'react-redux';
import FileUploader from './file_uploader';
import { sendUploaded } from '../../actions/card_actions.js';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  sendUploaded: () => dispatch(sendUploaded())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FileUploader);
