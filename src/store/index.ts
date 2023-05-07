import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import { reducer } from './reducer';

const store = configureStore({
    reducer
});

export {
    Provider,
    store
}