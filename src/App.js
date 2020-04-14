import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import asyncComponent from './hoc/asyncComponent'

import Users from './containers/Users'


const asyncPizza = asyncComponent(() => {
    return import('./containers/Pizza')
})
class App extends Component {

    render() {

        return (
            <div>
                <div>
                        <Route path='/' exact component={Users} />
                        <Route path='/Pizza' component={asyncPizza} />
                </div>
                <div>
                    <Link to='/'>Users</Link> | <Link to='/Pizza'>Pizza</Link>
                </div>
            </div>
        )
    }
}

export default App