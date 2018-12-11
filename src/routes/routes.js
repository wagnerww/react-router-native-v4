import React, { Component } from 'react';
import { View } from 'react-native';
import { NativeRouter, Route, Switch } from "react-router-native";

import Main from '../pages/main';
import Products from '../pages/products';
import Header from '../pages/header';

export default class Routes extends Component {
    render() {
        return (

            <React.Fragment>
                <Header />
                <NativeRouter>
                    <Switch>
                        <Route exact path="/" component={Main} />
                        <Route path="/products" component={Products} />
                    </Switch>
                </NativeRouter>
            </React.Fragment>

        );
    }
}
