import {NavLink} from "react-router-dom";
import React from "react";
import styled from "styled-components";
import ReactDOM from "react-dom"


const RecommendPlaylist= styled.div`
  width:750px;
  .recPlaylist {
    display:flex;justify-content:space-between;align-items:flex-end;height:30px;
    > p {
      font-weight:bold;font-size:24px;line-height:24px;
    }
    > a {
      font-size:16px;
    }
  }
  ul {
    display: flex;
    margin: 40px 0;
    font-size: 12px;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  li {
    width: 168px;
    height: 215px;
    margin-bottom: 30px;
  }
  li img {
    border-radius: 6px;
    width: 168px;
    height: 168px;
  }
  li a {
    display: block;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    font-weight: bold;
    font-size: 15px;
  }
  ul > li:first-child {
    width: 360px;
    height: 240px;
    position: relative;
  }
  ul > li:first-child div {
    width: 360px;
    display: flex;
    border-radius: 5px;
    align-items: center;
    height: 240px;
    overflow: hidden;
  }
  ul > li:first-child img {
    width: 360px;
    height: 360px;
  }
  ul > li:first-child a {
    display: flex;
    width: 100%;
    height: 60px;
    background-color: rgba(40,40,40,.9);
    position: absolute;
    border-radius: 0 0 5px 5px;
    top: 180px;
    color: white;
    align-items: center;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: unset;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`

class RecPlayList extends React.Component<any> {
    constructor(props:object) {
        super(props);
    }
    render(){
        return (
            <RecommendPlaylist>
                 <div className="recPlaylist">
                     <p>推荐歌单</p>
                     <NavLink to="/#">{'全部 >'}</NavLink>
                 </div>
                 <ul>
                     {this.props.list.map((item:any, index:number) =>
                         <li key={index} >
                             <div>
                                 <img src={item.coverImgUrl} alt=""/>
                             </div>
                             <NavLink to="/#">
                                 {item.name}
                             </NavLink>
                         </li>
                     )}
                 </ul>
            </RecommendPlaylist>
        )
    }
}

export default RecPlayList;
