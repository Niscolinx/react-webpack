import react from 'react'


import {pizzaImage} from '../../public/assets/pizza.jpg'

const pizza = (props) => {
    <div className = 'pizzaImg'>
        <img src = {pizzaImage} className = 'pizzaImg_main'/>
    </div>
}