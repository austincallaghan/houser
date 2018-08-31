import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PlaceHolder from './nonexistent'

export default (
    <Switch>
        <Route path="/" exact component={ PlaceHolder }></Route>
        <Route path="/placeholder1" component={ PlaceHolder }></Route>
    </Switch>
)