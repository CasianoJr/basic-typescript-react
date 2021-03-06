import React from "react";
import { Route, Switch } from "react-router";
import { About } from "./ecommerce/about/About";
import { Cart } from "./ecommerce/cart/Cart";
import { Detail } from "./ecommerce/detail/Detail";
import { Home } from "./ecommerce/home/Home";

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About}/>
      <Route path="/cart" exact component={Cart}/>
      <Route path="/product/:id/detail" exact component={Detail}/>
    </Switch>
  );
};
