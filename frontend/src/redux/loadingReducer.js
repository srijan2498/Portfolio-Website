const initialState = false

export const loadingReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return true
        case "UNSET_LOADING":
            return false
        default:
            return state
    }
}