import Main from './Main';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../redux/actions';
import {withRouter} from 'react-router';

function mapStateToProps(state) {
//    console.log("show me the state..");
//    console.log(state);
    return {
        posts: state.postReducer,
        comments: state.commentReducer
    };
}

function mapDispatchToProps(dispatch) {
     return bindActionCreators(actions,dispatch);
}

const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

export default App;