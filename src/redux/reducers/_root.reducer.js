import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import landingPageReducer from './landingPage.reducer';
import leaguePageReducer from './leaguepage.reducer';
import deleteLeagueReducer from './deleteLeague.reducer';
import ResultsPageReducer from './ResultsPage.reducer';
import editPageReducer from './editPage.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  landingPageReducer,
  leaguePageReducer,
  deleteLeagueReducer,
  ResultsPageReducer,
  editPageReducer,
});
//to access these in the code I guess we'll do this. 
//this.props.store.errors.loginMessage
export default rootReducer;

//In this file is where the actual reudcers get registered with the app, after being imported above.