
import { PERSONAS } from '../shared/personas';
import { ORGANIZATIONS } from '../shared/organizations';
import { PROCESSES } from '../shared/processes';
import { WIKIS } from '../shared/wikis';

export const initialState = {
    personas: PERSONAS,
    organizations: ORGANIZATIONS,
    processes: PROCESSES,
    wikis: WIKIS
};

export const Reducer = (state = initialState, action) => {
    return state;
};