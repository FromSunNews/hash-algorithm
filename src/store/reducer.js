const initialState = {
    navigateCurrent: 'SHA1',
}
const reducer = (state = initialState, action) => {

    if (action.type === 'updateNavigateCurrent') {
        
        return { ...state, navigateCurrent: action.value}
    }
    
    return state
}
export default reducer;
