import { configureStore } from "@reduxjs/toolkit";
import reducers from './reducers';

const store = configureStore({
    reducer: {
        librosAPP: reducers
    }
});

export default store;
