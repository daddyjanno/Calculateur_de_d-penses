import { combineReducers, configureStore } from '@reduxjs/toolkit'

const state = {}

const store = configureStore({
    preloadedState: state,
    reducer: combineReducers({}),
})

export default store
