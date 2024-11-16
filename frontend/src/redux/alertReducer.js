const initialState ={
    success: true,
    message: ""
}

export const alertReducer = (state=initialState, action)=>{
switch (action.type) {
    case "SET_ALERT":
        state.success=action.payload.success
        state.message = action.payload.message
        return state
    case "UNSET_ALERT":
        state.success = true
        state.message = ""
        return state
    default:
        return state
}
}