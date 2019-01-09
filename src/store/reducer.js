import * as actions from './aciton';

export default function reducer(state, action) {
    switch (action.type) {
        case actions.GET_USERS:
            return {
                ...state,
                users: action.users
            };
        default: 
            return state;
    }
}