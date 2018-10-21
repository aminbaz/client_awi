import React, {Component} from 'react';
import { Header, Footer } from './layouts';
import SignUpForm from './account/SignUp';

export default class App extends Component {

    render () {
        return (
            <div>
                <Header/>
                    <SignUpForm/>
                <Footer/>
            </div>
        )
    }
}