import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Categories from './pages/Categories'
import Questions from './pages/Questions'

function Routes() {
  return (
      <BrowserRouter>
        <Route path="/" exact component={Categories}/>
        <Route path="/questions/:category" exact component={Questions}/>
      </BrowserRouter>
  );
}

export default Routes;