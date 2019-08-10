import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducers';
import communitiesReducer from './communitiesReducer';
import communityReducer from './communityReducer';
export default combineReducers({
        auth: authReducer,
        form: formReducer,
        community: communitiesReducer,
        com: communityReducer
});