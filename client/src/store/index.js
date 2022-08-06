import { configureStore } from '@reduxjs/toolkit';
import navSlice from './navSlice';

const store = configureStore({
    reducer: {
        nav: navSlice.reducer
    }
});

export default store;