//react-router-dom
import { render } from '@testing-library/react';
import React from 'react';
// import{
//     BroswerRouter,
//     Link,
//     Switch,
//     Route
// } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";
import { Switch, Route, Routes,Link } from "react-router-dom";
import { Component } from 'react/cjs/react.production.min';


import Home from './Home';
import About from './About';
import Contact from './Contact';

class Routing extends Component{
    render(){
        return(

            <BrowserRouter>
            
            <div>

                <ul>

                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/about"}>About</Link>
                    </li>
                    <li>
                        <Link to={"/contact"}>Contact</Link>
                    </li>

                </ul>

            </div>

            <Switch>

                    <Route exact path={"/"}><Home/></Route>
                    <Route path={"/about"}><About/></Route>
                    <Route path={"/contact"}><Contact/></Route>

            </Switch>
            
            </BrowserRouter>

        )
    }
}
export default Routing;