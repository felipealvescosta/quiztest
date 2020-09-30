const token = (state = [], action) => {
    switch (action.type) {
        case 'CREATE_TOKEN':
            console.log(action);
            return [...state];
        case 'READ_TOKEN':
            console.log(action);
            return [...state];
        default:
            return state;
    }
};

export default token;
