import React from 'react'
import { Provider } from 'react-redux'
import { AppRouter } from './Routes/AppRouter'
import { store } from './store/store'

export const CrudApp = () => {
    return (
            <Provider store={store}>
               <AppRouter/> 
            </Provider>

        
    )
}
