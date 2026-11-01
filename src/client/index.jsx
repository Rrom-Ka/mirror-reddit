import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Header } from '../shared/Header'
import {StarWarsNameClass} from '../4_components/StarWarsNamesClass/StarWarsNamesClass'
import { StarWarsNameFunction } from '../4_components/state/state'
import { App } from '../App'

window.addEventListener('load', ()=>{
    ReactDOM.hydrate(<App />, document.getElementById('react_root'))
} )

