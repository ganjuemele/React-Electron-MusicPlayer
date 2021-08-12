import {NavLink} from "react-router-dom";
import React from "react";
import styled from "styled-components";
import SVG from "./SVG"
import {newMusicPlay} from "../icon/icon";

const NewSongPlaylist= styled.div`
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
    margin-top: 20px;
    column-count: 2;
    column-gap: 15px;
    > li {
      break-inside: avoid;
    }
  }
  .singleMusic {
    display: inline-flex;
    width: 100%;
    padding: 12px 0;
    position: relative;
    align-items: center;
    img {
      height: 60px;
      width: 60px;
      border-radius: 8px;
      margin-left: 8px;
    }
    &-name {
      color: #000;
      font-size: 14px;
    }
    &-artist {
      padding-top: 3px;
      font-size: 12px;
    }
    & .div-icon {
      height: 25px;
      width: 25px;
      display: flex;
      justify-content: center;
      left: 24px;
      align-items: center;
      position: absolute;
      border-radius: 50%;
      background-color: rgba(248,248,248,0.88);
      > .icon {
        height: 14px;
        width: 14px;
        display: block;
        border-radius: 50%;
        position: absolute;
        left: 7px;
      }
    }
  }
  .singleMusic-item-info {
    margin-left: 20px;
  }
  .singleMusic:hover {
    background-color: #efefef;
    border-radius: 8px;
  }
`

class SingleMusic extends React.Component<any> {
    constructor(props:object) {
        super(props);
    }
    render(){
        return (
            <NewSongPlaylist>
                <div className="recPlaylist">
                    <p>最新歌曲</p>
                    <NavLink to="/#">{'全部 >'}</NavLink>
                </div>
                <ul>
                    {this.props.list.map((item:any, index:number) =>
                        <li key={index} className="singleMusic {'singleMusic'+'-item'}">
                            <img src={item.album.blurPicUrl} alt=""/>
                            <div className="div-icon">
                                <SVG className="icon" d={newMusicPlay}/>
                            </div>
                            <div className={'singleMusic'+'-item-info'}>
                                <div className={'singleMusic'+'-name'}>{item.name}</div>
                                <div className={'singleMusic'+'-artist'}>
                                    {item.artists.map((artist:any, i:number) =>
                                        <span>{i!==0?' / ':''}{artist.name}</span>
                                    )}
                                </div>
                            </div>
                        </li>
                    )}
                </ul>
            </NewSongPlaylist>
        )
    }
}

export default SingleMusic;
