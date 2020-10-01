import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Categories from './pages/Categories';
import Questions from './pages/Questions';
import Score from './pages/Score';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Categories} />
            <Route
                path="/category/:category"
                exact
                component={Questions}
            />
            <Route path="/score/:id" component={Score} />
        </BrowserRouter>
    );
}

export default Routes;
