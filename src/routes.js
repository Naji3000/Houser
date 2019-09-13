import React from 'react'
import {Switch, Route} from 'react-router-dom'
import DashBoard from './components/Dashboard'
import Wizard from './components/Wizard'


export default (

    <Switch>
        <Route exact path = '/' component={DashBoard}/>
        <Route path ='/wizard' component={Wizard}/>
    </Switch>
)