import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    language : true,
    status : false,
    userData : null
}

const globalSlice = createSlice({
    name : 'global',
    initialState,
    reducers : {
        lang : (state , action) => {
            
            state.language = action.payload
        },

        // logout : (state , action) => {
        //     state.status = false;
        //     state.userData = null;
        // }

    }

})

export const {lang}  = globalSlice.actions

export default globalSlice.reducer;