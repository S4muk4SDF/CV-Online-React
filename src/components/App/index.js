import React from 'react'
import {Route} from 'react-router-dom'

import Home from '../Home'
import Sobre_Mim from '../Sobre_Mim'
import Contato from '../Contato'

function App() {
    // document.title = "Teste"
    return (
        <div>
            <Route exact path="/" component={Home}></Route>
            <Route path="/sobre" component={Sobre_Mim}></Route>
            <Route path="/contato" component={Contato}></Route>
        </div>
    )
}

export default App; 
