export const formReducer = (state, action) => { 

    const {type, payload} = action

    switch(type) {
        case "UPDATE_DATA":
            return {...state, formData: { ...state.formData, ...payload }};
            case "UPDATE_STEP":
            return {...state, step: { ...state.step, ...payload }};
        default:
            throw new Error("No any case found in Reducer");
    }

}