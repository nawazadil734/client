// reducer is always called with state and action object 
// state always starts with undefined value.. so provide something to it
import { FETCH_USER} from '../actions/types';

export default (state = null, action) => {
    switch (action.type) {
        case FETCH_USER:
            return action.payload || false;
        default:
            return state;
    }
}