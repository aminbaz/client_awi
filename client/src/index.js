import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './components/App';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import user_reducer from './reducers/user_reducer'

import { reducer as formReducer } from 'redux-form';


const rootReducer = combineReducers({
    form: formReducer,
    user: user_reducer
});

const store = createStore(rootReducer);


/*const add_user_action = {
    type: 'add_user',
    payload: {
        firstname: 'Salma',
        lastname: 'Bazaz',
        email: 'salma.bazaz@etu.umontpellier.fr',
        password: 'maison'
    }
};

store.dispatch(add_user_action);*/


render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);