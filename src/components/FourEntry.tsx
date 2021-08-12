import {NavLink} from "react-router-dom";
import SVG from "./SVG";
import {analogous, dailyRec, listenDiff, privateRadio} from "../icon/icon";
import React from "react";
import styled from "styled-components";

const Entry = styled.nav`
    display: inline-flex;
    justify-content: space-around;
    width: 100%;
    padding: 40px 0;
    font-size: 16px;
    color: #9f9f9f;
    font-weight: 450;
    svg {
      height: 50px;
      margin: 0 auto 15px;
      width: 50px;
    }
    > a {
      text-align: center;
      > * {
        display: block;
      }
    }
`

const FourEntry = ()=> {
    return (
        <Entry className="fourEntry">
            <NavLink  to="jumpTo('dailyRec')">
                <SVG className="icon" d={dailyRec}/>
                <p>每日30首</p>
            </NavLink>
            <NavLink  to="jumpTo(2)">
                <SVG className="icon" d={analogous}/>
                <p>猜你喜欢</p>
            </NavLink>
            <NavLink  to="jumpTo(3)">
                <SVG className="icon" d={listenDiff}/>
                <p>听见不同</p>
            </NavLink>
            <NavLink  to="jumpTo(4)">
                <SVG className="icon" d={privateRadio}/>
                <p>私人电台</p>
            </NavLink>
        </Entry>
    )
}

export default FourEntry;
