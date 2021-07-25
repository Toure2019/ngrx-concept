import { Detail } from 'src/models/detail';
import { State } from './app.state';
import { Action, createReducer, on } from '@ngrx/store';
import { Incr, Decr } from './app.action';

const initialState: State = {
    count: 0,
    title: 'Super compteur',
    details: []
};

const _reducer = createReducer(
    initialState,
    on(Incr, (state, { payload }) => ({
        ...state,
        count: state.count + payload,
        details: [ ...state.details, <Detail>{date: new Date, buttonClicked: 'ajout'} ]
    })),
    on(Decr, (state, { payload }) => ({
        ...state,
        count: state.count - payload,
        details: [ ...state.details, <Detail>{date: new Date, buttonClicked: 'ajout'} ]
    }))
);

export function reducer(state: State | undefined, action: Action) {
    return _reducer(state, action);
}

// export function reducer(state = initialState, action: { type: any; payload: number; }) {
//     console.log('in reducer', action);
//     switch (action.type) {
//         case '[Counter] Increment':
//             const newState = {
//                 ...state,
//                 count: state.count + action.payload,
//                 details: [ ...state.details, <Detail>{date: new Date, buttonClicked: 'ajout'} ]
//             };
//             return newState;
//         case '[Counter] Decrement':
//             const newState2 = {
//                 ...state,
//                 count: state.count - action.payload,
//                 details: [ ...state.details, <Detail>{date: new Date, buttonClicked: 'retrait'} ]
//             };
//             return newState2;
//         default:
//             return state;
//     }
// }