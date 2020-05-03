export const username = (state = '', action) => {
    switch (action.type) {
        case 'SET_USERNAME':
            return action.payload;
        case 'CLEAR_USERNAME':
            return action.payload;
        default:
            state;
    }
};
export const email = (state = '', action) => {
    switch (action.type) {
        case 'SET_EMAIL':
            return action.payload;
        case 'CLEAR_EMAIL':
            return action.payload;
        default:
            state;
    }
};
export const password = (state = '', action) => {
    switch (action.type) {
        case 'SET_PASSWORD':
            return action.payload;
        case 'CLEAR_PASSWORD':
            return action.payload;
        default:
            state;
    }
};
