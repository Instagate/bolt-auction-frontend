import React from 'react';
import Main from './components/Main';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Store from './components/Store';
import SearchResult from './components/SearchResult';
import CategoryResult from './components/CategoryResult';
import ProductDetail from './components/ProductDetail';
import SellProduct from './components/SellProduct';

import { Route, Switch } from 'react-router-dom';

import './App.css';

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/store/:id" component={Store} />
        <Route path="/search" component={SearchResult} />
        <Route path="/categories/:category" component={CategoryResult} />
        <Route path="/products/:id" component={ProductDetail} />
        <Route path="/sell" component={SellProduct} />
        <Route
          render={({ location }) => (
            <div>
              <h2>존재하지 않는 페이지:</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
