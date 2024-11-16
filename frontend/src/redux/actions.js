export const setAlertAction = (alert)=>{
    return {
        type: "SET_ALERT",
        payload: alert
    }
}

export const unsetAlertAction = () => {
    return {
        type: "UNSET_ALERT"
    }
}

export const setLoadingAction = () => {
    return {
        type: "SET_LOADING"
    }
}

export const unsetLoadingAction = () => {
    return {
        type: "UNSET_LOADING"
    }
}