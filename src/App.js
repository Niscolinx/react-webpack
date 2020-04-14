import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import asyncComponent from './hoc/asyncComponent'

import Pizza from './containers/Pizza'


const asyncUsers = asyncComponent(() => {
    return import('./containers/Users')
})
class App extends Component {

    render() {

        return (
            <div>
                <div>
                        <Route path='/' exact component={Pizza} />
                        <Route path='/Users' component={asyncUsers} />
                </div>
                <div>
                    <Link to='/'>Pizza</Link> | <Link to='/Users'>Users</Link>
                </div>
            </div>
        )
    }
}

export default App