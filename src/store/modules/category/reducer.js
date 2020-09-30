import produce from 'immer';

const category = (state = [], action) => {
    switch (action.type) {
        case 'ADD_CATEGORY':
            return produce(state, (draft) => {
                draft.push(action.category);
                console.log('aqui' + state);
            });
        default:
            return state;
    }
};

export default category;
