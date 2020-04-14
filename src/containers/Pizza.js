import React, {Component} from 'react'
import PizzaImg from '../components/PizzaImage'


class Pizza extends Component {
    render(){
        return(
            <div>
                <h1>This is the pizza</h1>
                <PizzaImg/>
            </div>
        )
    }
}

export default Pizza