import { FETCH_COMMUNITIES } from '../actions/types';

export default (state = null, action) => {
    switch (action.type) {
        case FETCH_COMMUNITIES:
            return action.payload || false;
        default:
            return state;
    }
}