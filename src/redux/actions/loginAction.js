export const clearEmail = () => {
    return async (dispatch) => {
        await dispatch({ type: 'CLEAR_EMAIL', payload: '' });
    };
};

export const setEmail = (event) => {
    return async (dispatch) => {
        await dispatch({ type: 'SET_EMAIL', payload: event.target.value });
    };
};

export const clearPassword = () => {
    return async (dispatch) => {
        await dispatch({ type: 'CLEAR_PASSWORD', payload: '' });
    };
};

export const setPassword = (event) => {
    return async (dispatch) => {
        await dispatch({ type: 'SET_PASSWORD', payload: event.target.value });
    };
};

export const sendPerson = () => {
    return async (dispatch) => {
        await dispatch(clearEmail());
        await dispatch(clearPassword());
    };
};
