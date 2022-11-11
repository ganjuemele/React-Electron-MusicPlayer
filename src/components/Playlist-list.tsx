import styled from "styled-components"
import React from "react";
import {musicLike} from "../icon/icon";
import SVG from "./SVG";
import axios from 'axios'
// import {NavLink} from "react-router-dom"

const PlLi = styled.div`
  .listTitle {
    display: flex;
    padding: 0 20px;
    justify-content: flex-end;
    text-align: left;
    height: 34px;
    line-height: 34px;
    font-size: 12px;
    font-weight: 450;
    color: #999;
    border-top: #ddd 1px solid;
    & > div {
      justify-content: flex-end;
      padding: 0 4px;
    }
  }
  .playlist-tab {
    margin-left: 30px;
    margin-top: 30px;
    border: none;
    font-weight: bold;
  }
  div.playlist {
    display: flex;
    justify-content: flex-end;
    text-align: left;
    padding: 0 20px;
    & svg {
      width: 16px;
      height: 16px;
    }
    & .fav {
      height: 34px;
      width: 32px;
    }
    & .serialNum {
      text-align: center;
      flex-grow: 1;
    }
    & > div {
      line-height: 34px;
      height: 34px;
      font-size: 12px;
      color: #000;
      padding: 0 4px;
      align-items: center;
      display: -webkit-box;
      overflow: hidden;
      text-overflow: unset;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
    }
  }
  div.playlist:hover {
    background-color: #eee!important;
  }
  .name {
    width: 284px;
  }
  .artists {
    width: 160px;
  }
  .album {
    width: 170px;
  }
  .duration {
    width: 80px;
  }
`

const formatDuration = function(e:string) {
    let t = (parseInt(e) / 60000).toFixed(2).toString();
    if (parseInt(t) < 10) {
        t = '0' + t
    }
    return t.replace('.', ':')
}

const playlist_DATA = function (){
    // let that = this;
    // axios.get('http://101.43.109.126:3000/playlist/detail?id=' + that.props.params.id)
    //     .then(res => {
    //         that.setState({
    //             newSongList: res.data.data.slice(0, 10)
    //         })
    //     })
    //     .catch()
}

// const PlList = () => {
//
//     return (
//         <PlLi>
//             <div className="playlistTab">歌曲列表</div>
//             <div className="listTitle">
//                 <div className="name">音乐标题</div>
//                 <div className="artists">歌手</div>
//                 <div className="album">专辑</div>
//                 <div className="duration">时长</div>
//             </div>
//         //    {result.tracks.map( (item, index) => {
//         //        <div className="playlist" key={index}
//         //             // style="index % 2 ? '' : 'background-color:#f9f9f9;'"
//         //        >
//         //            <div className="serialNum">{index + 1}</div>
//         //            <div className="alignCenter justifyCenter fav">
//         //                <SVG d={musicLike} />
//         //                {/*<svg className="icon"><path d="M737.712 96.016C640.576 96.016 556.064 151.312 512.432 231.712 468.528 151.312 383.6 96.016 286.464 96.016 145.792 96.016 31.76 210.672 31.76 352.112 31.76 419.248 57.456 480.336 99.472 526L490.576 919.04C496.528 925.024 504.32 927.984 512.096 927.968 519.872 927.984 527.648 925.024 533.584 919.04L924.704 526C966.72 480.336 992.416 419.248 992.416 352.112 992.416 210.672 878.384 96.016 737.712 96.016ZM876.08 484.512 512.096 854.144 148.096 484.512C115.456 450.064 95.44 403.44 95.44 352.112 95.44 246.048 180.96 160.048 286.464 160.048 371.664 160.048 445.024 216.512 470.464 293.952 477.28 310.592 493.488 322.304 512.48 322.304 531.456 322.304 547.632 310.608 554.464 294.048L554.48 294.048C579.664 216.544 652.48 160.048 737.712 160.048 843.2 160.048 928.736 246.048 928.736 352.112 928.736 403.44 908.72 450.064 876.08 484.512Z" fill="#8a8a8a" p-id="901"></path></svg>*/}
//         //                {/*// <!--      <svg class="icon"><path d="M512 164.864l-31.232-30.72a281.6 281.6 0 0 0-398.336 397.824L512 961.536l429.568-430.08a281.6 281.6 0 0 0-398.336-397.824l-31.232 31.232z" fill="#ff3333" p-id="901"></path></svg>-->*/}
//         //            </div>
//         //            <div className="name">{item.name}</div>
//         //            <div className="artists"><span>{item.artists[0].name}</span></div>
//         //            <div className="album">{item.album.name}</div>
//         //            <div className="duration">{formatDuration(item.duration)}</div>
//         //        </div>
//         //    }
//         //        )
//         //}
//         </PlLi>
//     )
// }
//
// export default PlList
