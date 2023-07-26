import './App.css';
import React from "react";
import styled from "styled-components"
import {HashRouter as Router, Switch, Route, Redirect, NavLink} from "react-router-dom"
import ControlBar from "./components/ControlBar"
import NavList from "./components/NavList"
import Home from "./views/Home"
import PlaylistDetail from "./components/PlaylistDetail"
// import login from "./components/SearchBar";

// let SearchBar_Head = login.SearchBar_Head;
const AppWrapper = styled.aside`
  position: relative;
  color: #333;
  .flex {
    display: flex;
    padding-bottom: 72px;
    min-height: 100vh;
    position: relative;
  }
`;

function App() {
    return (
        <AppWrapper>
            {/*<SearchBar_Head  />*/}

            <Router>
                <Switch>
                    <NavList/>
                </Switch>
            </Router>
            <Router>
                <Switch>
                    <Route path="/home">
                        <Home/>
                    </Route>
                    <Route path="/playlist/:id">
                        <PlaylistDetail/>
                    </Route>
                    <Route path="/rank">

                    </Route>
                    <Route path="/fav">

                    </Route>
                    <Route path="/recent">

                    </Route>
                    <Redirect exact from="/" to="/home"/>

                    <Route path="*"><NoMatch/></Route>
                </Switch>

            </Router>

            <ControlBar/>
        </AppWrapper>
    );
}

function NoMatch() {
    return (
        <h2>
            404 页面不存在
            <NavLink to="/home" className="">
                回到首页
            </NavLink>
        </h2>

    )
}

export default App;
