import * as ActionTypes from './ActionTypes';

export const addWiki = (wikiId, name, category, description) => ({
    type: ActionTypes.ADD_WIKI,
    payload: {
        wikiId: wikiId,
        name: name,
        category: category,
        description: description
    }
});