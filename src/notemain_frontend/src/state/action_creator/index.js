export const saveLogin = (anything) => {
    return (dispatch) => {
        dispatch({
            type: "savelog",
            payload: anything
        });
    }
}


export const saveModule = (module) => {
    console.log(module, "Wow")
    return (dispatch) => {
        dispatch({
            type: "savemodule",
            payload: module
        });
    }
}