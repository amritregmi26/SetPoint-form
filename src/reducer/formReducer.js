export const formReducer = (state, action) => { 

    const {type, payload} = action

    switch(type) {
        case "UPDATE_DATA":
            return {...state, formData: payload.data}
    }

}