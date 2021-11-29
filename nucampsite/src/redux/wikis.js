import { WIKIS } from '../shared/wikis';
import * as ActionTypes from './ActionTypes';

export const Wikis = (state = WIKIS, action) => {
    switch (action.type) {
        case ActionTypes.ADD_WIKI:
            const wiki = action.payload;
            wiki.id = state.length;
            wiki.date = new Date().toISOString();
            return state.concat(wiki);
        default:
            return state;
    }
};