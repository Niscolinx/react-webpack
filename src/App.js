import react, {Component} from 'react'
import {Link, Route} from 'react-router-dom'
import asyncComponent from './hoc/asyncComponent'

import pizza from './containers/pizza'
import users from './containers/users'


class App extends Component{

    render(){


        return(
            <Link to='/'>Pizza</Link>
            <Link to='/Users'>Users</Link>
        )
    }
}

export default App