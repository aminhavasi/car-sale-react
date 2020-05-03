export const clearEmail = () => {
    return async (dispatch) => {
        await dispatch({ type: 'CLEAR_EMAIL_LOGIN', payload: '' });
    };
};

export const setEmail = (event) => {
    return async (dispatch) => {
        await dispatch({
            type: 'SET_EMAIL_LOGIN',
            payload: event.target.value,
        });
    };
};

export const clearPassword = () => {
    return async (dispatch) => {
        await dispatch({ type: 'CLEAR_PASSWORD_LOGIN', payload: '' });
    };
};

export const setPassword = (event) => {
    return async (dispatch) => {
        await dispatch({
            type: 'SET_PASSWORD_LOGIN',
            payload: event.target.value,
        });
    };
};

export const sendPerson = () => {
    return async (dispatch) => {
        await dispatch(clearEmail());
        await dispatch(clearPassword());
    };
};
