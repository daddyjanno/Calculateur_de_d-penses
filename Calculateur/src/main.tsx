import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import Calculator from './Calculator.tsx'
import store from './app/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <Calculator />
        </Provider>
    </React.StrictMode>
)
