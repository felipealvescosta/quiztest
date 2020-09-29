const category = (state = [], action) => {
    switch (action.type) {
        case 'ADD_CATEGORY':
            console.log(action);
            return [...state, action.category];
        default:
            return state;
    }
};

export default category;
