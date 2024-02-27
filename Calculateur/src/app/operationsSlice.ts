import { createSlice } from '@reduxjs/toolkit'
import { createMockedData } from '../utils/createMockedData'

interface IProps {
    id: number
    name: string
    amount: number
}
const mockedData: IProps[] = createMockedData()
const initialState = mockedData

const operationSlice = createSlice({
    name: 'operations',
    initialState,
    reducers: {
        addNewOperation(state, action) {
            state.push(action.payload)
        },
        deleteOperation(state, action) {
            state.filter((item) => {
                return item.id !== action.payload
            })
        },
        updateOperation(state, action) {
            return state.map((operation) => {
                if (operation.id === action.payload.id) {
                    return {
                        id: action.payload.id,
                        name: action.payload.name,
                        amount: action.payload.amount,
                    }
                } else {
                    return operation
                }
            })
        },
    },
})

// selectors

export const getOperations = (state: { operations: Array<object> }) =>
    state.operations

// actions

export const { addNewOperation, deleteOperation, updateOperation } =
    operationSlice.actions

// reducers

export const operationsReducer = operationSlice.reducer
