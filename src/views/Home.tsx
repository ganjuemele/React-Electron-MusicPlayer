import styled from "styled-components"
import React from "react";
// import {NavLink} from "react-router-dom"
import FourEntry from "../components/FourEntry";
import RecPlayList from "../components/RecPlayList";
import SingleMusic from "../components/SingleMusic";
import SearchBar_Head from "../components/SearchBar";
import axios from 'axios'

const HomeBody = styled.div`
  margin-left: 176px;
  font-size:60px;
  min-height:100%;
  flex-direction: column;
  flex-grow: 1;
  padding:0 30px;
  .newSongTitle {
    font-weight:bold;font-size:24px;
    line-height:24px;text-align: left;
  }
`;

class Home extends React.Component<{},{ recList?:object,newSongList?:object }> {
    constructor(props:any) {
        super(props);
        this.state={
            recList: [],
            newSongList: []
        }
    }
    componentDidMount() {
        const that = this;
        axios.get('http://101.43.109.126:3000/top/playlist/欧美?limit=7')
             .then(res => {
        console.log('欧美',res.data.playlists)
                 that.setState({
                     recList: res.data.playlists
                 })
             })
             .catch();
        axios.get('http://101.43.109.126:3000/top/song?type=0')//类型：全部0华语7欧美96日本8韩国16
             .then(res => {
                 console.log(res.data.data.slice(0, 10))
                 that.setState({
                     newSongList: res.data.data.slice(0, 10)
                 })
             })
             .catch()
    }
    render() {
        return (
            <HomeBody className="alignCenter">
                <SearchBar_Head></SearchBar_Head>
                     {/*<div className="lunbotu"></div>*/}
                <FourEntry/>

                <RecPlayList list={this.state.recList}/>

                <SingleMusic list={this.state.newSongList}/>
            </HomeBody>
        )
    }
}

export default Home;
