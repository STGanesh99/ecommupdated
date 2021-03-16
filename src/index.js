import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route} from "react-router-dom"
import App from './App';
import Checkout from "./checkout"

ReactDOM.render(
  <React.StrictMode>
  <Router>
    <Route exact path ="/" component={()=><App data="prod.json"/>}/>
    <Route exact path ="/electronics" component={()=><App data="electronics.json"/>}/>
    <Route exact path ="/menclothes" component={()=><App data="menclothing.json"/>}/>
    <Route exact path ="/jewellery" component={()=><App data="jewellery.json"/>}/>
    <Route exact path ="/womenclothes" component={()=><App data="womenclothing.json"/>}/>
    <Route exact path = "/checkout" component={Checkout}/>
  </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

