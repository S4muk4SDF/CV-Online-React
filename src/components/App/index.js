import React from 'react'
import {Route} from 'react-router-dom'

import Home from '../Home'
import Sobre from '../Sobre'
import Contato from '../Contato'

function App() {
    return (
        <div>
            <Route exact path="/" component={Home}></Route>
            <Route path="/sobre" component={Sobre}></Route>
            <Route path="/contato" component={Contato}></Route>
        </div>
    )
}

export default App; 
