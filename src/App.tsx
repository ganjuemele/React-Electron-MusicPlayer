import './App.css';
import React from "react";
import styled from "styled-components"
import {HashRouter as Router, Switch, Route, Redirect, NavLink} from "react-router-dom"
import ControlBar from "./components/ControlBar"
import NavList from "./components/NavList"
import Home from "./views/Home"
import PlaylistDetail from "./components/PlaylistDetail"

const AppWrapper = styled.div`
  color:#333;
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
        <Router>
            <Switch>
                <Route path="/home">
                    <ControlBar />
                    <div className="flex">
                        <NavList />
                        <Home />
                    </div>
                </Route>
                {/*playListDetail*/}
                <Route path="/playlist/:id">
                    <ControlBar />
                    <div className="flex">
                        <NavList />
                        <PlaylistDetail />
                    </div>
                </Route>
                <Route path="/rank">
                    <ControlBar />
                    <div className="flex">
                        <NavList />
                    </div>
                </Route>
                <Route path="/fav">
                    <ControlBar />
                    <div className="flex">
                        <NavList />

                    </div>
                </Route>
                <Route path="/recent">
                    <ControlBar />
                    <div className="flex">
                        <NavList />

                    </div>
                </Route>
                <Redirect exact from="/" to="/home" />

                <Route path="*"><NoMatch/></Route>
            </Switch>

        </Router>
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
