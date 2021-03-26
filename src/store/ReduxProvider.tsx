import React from 'react';
import {Provider} from 'react-redux'
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { allReducers } from './allReducers';

const store = createStore(allReducers, devToolsEnhancer({}))

export const ReduxProvider: React.FC = ({children}) =>{
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )

}