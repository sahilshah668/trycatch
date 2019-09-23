import React, { Component } from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Header from './common/Header'

import Home from './Home'
import Second from './Second'
export default class Routers extends Component {
    render() {
        return (
            <div>
                 <Router>
                 <Header title1="home" title2="second" />
                <Route exact path="/" component={Home} />
                <Route exact path="/second" component={Second} />
                </Router>
            </div>
        )
    }
}
