import produce from 'immer';
function category(state = [], action) {
    switch (action.type) {
        case 'ADD_CATEGORY':
            return produce(state, (draft) => {
                draft.push(action.category);
            });
        default:
            return state;
    }
}

export default category;
