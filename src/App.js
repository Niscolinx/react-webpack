import react, {Component} from 'react'
import {Link, Route, Switch} from 'react-router-dom'
import asyncComponent from './hoc/asyncComponent'

import Pizza from './containers/pizza'


const asyncUsers = asyncComponent(() => {
    return import('./containers/users')
})
class App extends Component{

    render(){
        <Switch>
            <Route path='/' exact component = {Pizza}/>
            <Route path='/Users' exact component = {asyncUsers}/>
        </Switch>

        return(
            <div>
                <Link to='/'>Pizza</Link>
                <Link to='/Users'>Users</Link>
            </div>
        )
    }
}

export default App