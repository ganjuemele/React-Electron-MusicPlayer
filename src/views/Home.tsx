import styled from "styled-components"
import React from "react";
// import SVG from "../components/SVG"
import {NavLink} from "react-router-dom"
import FourEntry from "../components/FourEntry";
import RecPlayList from "../components/RecPlayList";
import axios from 'axios'

// import ReactDOM from "react-dom"

const HomeBody = styled.div`
  margin-left: 176px;
  font-size:60px;
  min-height:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`


class Home extends React.Component<{},{ list ?:object }> {
    constructor(props:any) {
        super(props);
        this.state={
            list: []
        }
    }
    componentDidMount() {
        const that = this;
        axios.get('http://121.36.252.80:3000/top/playlist/欧美?limit=7')
        .then(res => {
            console.log(res.data.playlists)
            that.setState({
                list:res.data.playlists
            })
        })
        .catch()
    }
    render() {
        return (
            <HomeBody>
                     {/*<div className="lunbotu"></div>*/}
                <FourEntry/>

                <RecPlayList list={this.state.list}/>
            </HomeBody>
        )
    }
}

export default Home;
