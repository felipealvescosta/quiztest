import produce from 'immer';

const score = (state = [], action) => {
    console.log(state);
    switch (action.type) {
        case 'NEW_SCORE':
            console.log(action);
            return produce(state, (draft) => {
                draft.push(action.score);
            });
        default:
            return state;
    }
};

export default score;
