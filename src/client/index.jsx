import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Header } from '../shared/Header'
import {StarWarsNameClass} from '../4_components/StarWarsNamesClass/StarWarsNamesClass'
import { StarWarsNameFunction } from '../4_components/state/state'

window.addEventListener('load', ()=>{
    ReactDOM.hydrate(<StarWarsNameFunction />, document.getElementById('react_root'))
} )

