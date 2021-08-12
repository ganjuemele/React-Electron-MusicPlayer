import './App.css';
import React from "react";
import styled from "styled-components"
import {HashRouter as Router, Switch, Route, Redirect} from "react-router-dom"
import ControlBar from "./components/ControlBar"
import NavList from "./components/NavList"

import Home from "./views/Home"

const AppWrapper = styled.div`color:#333;`;

function App() {
  return (
    <AppWrapper>
        <Router>
            <Switch>
                <Route path="/home">
                    <ControlBar />
                    <NavList />
                    <Home></Home>
                </Route>
                <Route path="/playlist">
                    <ControlBar />
                    <NavList />
                </Route>
                <Route path="/rank">
                    <ControlBar />
                    <NavList />
                </Route>
                <Route path="/fav">
                    <ControlBar />
                    <NavList />
                </Route>
                <Redirect exact from="/" to="/home" />

                <Route path="*"><NoMatch/></Route>
            </Switch>

        </Router>
    </AppWrapper>
  );
}

function NoMatch() {
  return <h2>404 页面不存在</h2>
}

export default App;
