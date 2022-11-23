import styled from "styled-components"
import React from "react";
import SVG from "./SVG"
import {
    musicLike,
    musicMore,
    musicPrev,
    musicNext,
    musicPlay,
    // musicPause,
    musicEffects,
    musicWords,
    musicSound,
    musicCircle,
    musicList
} from "../icon/icon"

const CtrlBar = styled.div`
  width: 100%;
  height:72px;
  background-color: rgba(255,255,255,.96);
  //filter: blur(.5px);
  position: fixed;
  bottom: 0;
  z-index: 100;
  >.ctrl-music-inf {
    > .ctrl-music-img {
      height:72px;
      width:72px;
      margin-right: 4px;
      > img {
        width:72px;height:72px;
      }
    }
    > .musicName {
      max-width: 210px;
      margin: 0 4px;
      padding-right: 7px;
      letter-spacing: .5px;
      font-weight: 360;
      text-align: left;
      color: #444;
      > p {
        display: -webkit-box;
        overflow: hidden;
        text-overflow: unset;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
      }
      > p:last-child {
        color: #b3b3b3;
        font-size: 12px;
      }
    }
    > .musicQuality {
      border: 1px solid rgb(200,200,200);
      box-shadow: rgb(210, 210, 210) 0 0 .5px .5px;
      text-align: center;
      font-size: 8px;
      font-weight: bold;
      border-radius: 3px;
      color: #666;
      margin: 0 6px;
      line-height: 13px;
      width: 32px;
    }
  }
  > .musicCtrl {
    height: 72px;
    .musicCut {
      width: 20px;
      height: 20px;
    }
    .musicPlay {
      margin: 0 20px;
      width: 38px;
      height:75px;
    }
  }
  > .musicCtrlRight {
    height: 72px;
    justify-content: flex-end;
    padding-right: 28px;
    .musicEffects {
      width: 14px;
      margin-left: 24px;
    }
    .musicWords {
      width: 13px;
      margin-left: 26px;
    }
    .musicSound {
      width: 16px;
      margin-left: 20px;
    }
    .musicCircle {
      width: 24px;
      height: 30px;
      margin-left: 15px;
    }
    .musicList {
      width: 20px;
      height:30px;
      margin-left: 20px;
    }
  }
`

const ControlBar = ()=> {
    return (
        <CtrlBar className="alignCenter justifyBetween">
            <div className="alignCenter ctrl-music-inf">
                <div className="ctrl-music-img">
                    <img src="#" alt=""/>
                </div>
                <div className="musicName">
                    <p>听.见不同</p>
                    <p>歌手名</p>
                </div>
                <div className="musicQuality">标准</div>
                <div className="musicLike">
                    <SVG d={musicLike} />
                </div>
                <div className="musicMore">
                    <SVG d={musicMore} />
                </div>
            </div>
            <div className="musicCtrl justifyCenter alignCenter">
                <div id="prev"><SVG className="musicCut" d={musicPrev} /></div>
                <div id="play">
                    {/*<SVG className="musicPlay" name="musicPause" fill="#ff3300"/>*/}
                    <SVG className="musicPlay" d={musicPlay} />
                </div>
                <div id="next"><SVG className="musicCut" d={musicNext} /></div>
            </div>

            <div className="musicCtrlRight alignCenter">
                <div>
                    <SVG className="icon musicSound" d={musicSound} />
                </div>

                <div>
                    <SVG className="icon musicCircle" d={musicCircle} />
{/* todo 单曲循环需要在列表循环多加一个path <path d="M533.333333 597.333333v-170.666666c0-12.8-8.533333-21.333333-21.333333-21.333334s-21.333333 8.533333-21.333333 21.333334v170.666666c0 12.8 8.533333 21.333333 21.333333 21.333334s21.333333-8.533333 21.333333-21.333334z"*/}
                </div>
                <div>
                    <SVG className="icon musicEffects" d={musicEffects} />
                </div>
                <div>
                    <SVG className="icon musicWords" d={musicWords}  />
                </div>
                <div>
                    <SVG className="icon musicList" d={musicList}/>
                </div>
            </div>
        </CtrlBar>
    )
}

export default ControlBar;
