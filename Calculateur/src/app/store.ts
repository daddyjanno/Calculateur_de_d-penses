import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { operationsReducer } from './operationsSlice'

const state = {}

const store = configureStore({
    preloadedState: state,
    reducer: combineReducers({
        operations: operationsReducer,
    }),
})

export default store
