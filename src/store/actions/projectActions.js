export const createProject = (project) => {
    //dispatches an action to the reducer
    return (dispatch, getState) => {
        //make async call to database
        dispatch({ 
            type: 'CREATE_PROJECT', 
            project: project
        });
    }
}