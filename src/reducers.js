import {  createSlice } from "@reduxjs/toolkit";

const estIni = {
    infoBiblio: [],
    infoBook: []
};

const reducers = createSlice({
    name: 'librosAPP',
    initialState: estIni,
    reducers: {
        setInfoBiblio: (state,action) => {
            state.infoBiblio = action.payload;
        },
        setInfoBook: (state,action) => {
            state.infoBook = action.payload;
        }      
    }


});

export const {setInfoBiblio,setInfoBook} = reducers.actions;
export default reducers.reducer;