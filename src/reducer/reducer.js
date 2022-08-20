const initialState = {
    isAuthenticated: false
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { isAuthenticated: true }
        default:
            return state;
    }
}