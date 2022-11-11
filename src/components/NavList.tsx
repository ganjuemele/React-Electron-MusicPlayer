import styled from "styled-components"
import React from "react";
import {NavLink} from "react-router-dom"

const NavLi = styled.aside`
  > div {
    width: 176px;
    background-color: #ddd;
    height: 100%;
    max-height: 800px;
    padding: 45px 8px 0 8px;
    font-size: 12px;
    text-align: start;
    position: fixed;
    > p {
      color: #888;
      margin: 10px 0;
    }
    li a {
      padding: 10px 20px 10px 15px;
      color: #333;
      margin: 3px 0;
      justify-content: start;
      border-radius: 3px;
      height: 100%;
      width: 100%;
      text-decoration: none;
    }
    li a:hover {
      background-color: red!important;
      text-decoration: none;
      color:#fff;
    }
    li a.selected {
      background-color: orangered;
      color: #fff;
    }
  }
`

const asideList = [
    {url: '/home', name: '发现音乐'},
    {url: '/playlist', name: '歌单'},
    {url: '/rank', name: '排行榜'},
    {url: '/fav', name: '我的收藏'},
    {url: '/recent', name: '最近播放'}
]

const NavList = ()=> {
    return (
        <NavLi>
            <div>
                <p>我的音乐</p>
                <ul>
                    {asideList.map(tag =>
                        <li key={tag.name} >
                            <NavLink to={tag.url} className="alignCenter" activeClassName="selected">
                                {tag.name}
                            </NavLink>
                        </li>
                    )}
                </ul>
            </div>
        </NavLi>
    )
}

export default NavList
