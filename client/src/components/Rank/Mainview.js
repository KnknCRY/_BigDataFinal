import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Div100vh from 'react-div-100vh'
import jwt_decode from 'jwt-decode'
import { rank } from '../UserFunctions'
import '../../index.css';
import '../css/styles.css';
import imgUrl from "../image/rank.jpg";
import block from "../image/block.jpg";

import Highcharts from 'highcharts' //npm install highcharts-more --save
import * as HighchartsMore from "highcharts/highcharts-more"
import Highstock from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official' //npm install highcharts-react-official
HighchartsMore(Highcharts)
HighchartsMore(Highstock)
//import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
////style={{backgroundColor: "#444444"}}
class Mainview extends Component {
    constructor() {
        super()
        this.state = {
            user: [],
            imagepath: [],
            activate_value: []
        };
        //console.log(this.props.match.params.id);
        rank().then(res => {
            //console.log(res);
            for(let i = 0;i < res.length;i++){
                this.state.user.push(res[i].name);
                this.state.imagepath.push(res[i].imagepath);
                this.state.activate_value.push(res[i].activate_value);
                this.setState(this.state)
            }
            console.log(this.state.user);
            console.log(this.state.imagepath);
            console.log(this.state.activate_value);
        })
    }
    componentDidMount() {

    }

    /*componentDidMount () {
        const token = localStorage.datatoken
        //const decoded = jwt_decode(token)
        this.setState({
            StagesDeep: token[0].StagesDeep,
            StagesLight: token[1].StagesLight,
            StagesRem: token[2].StagesRem,
            StagesWake: token[3].StagesWake
        })
    }*/

    render () {
        let lngth1=((this.state.activate_value[1]/this.state.activate_value[0])*35)+"vw";
        let lngth2=(this.state.activate_value[2]/this.state.activate_value[0])*35+"vw";
        let lngth3=(this.state.activate_value[3]/this.state.activate_value[0])*35+"vw";
        let lngth4=(this.state.activate_value[4]/this.state.activate_value[0])*35+"vw";
        let title_rank_1,title_rank_2,title_rank_3,rank_1,rank_2,rank_3,rank_4,rank_5,rank_6,rank_7,rank_8,rank_9,rank_10;
        if(this.state.imagepath[0] != null){
            title_rank_1 = <div ><img src={ require('../'+this.state.imagepath[0]+'.png') }  className="rank_1"/></div>
            rank_1 = <div className="oneGuy">
                        <img src={require("../"+this.state.imagepath[0]+".png")}  className="img"/>
                        <a className="rank">1</a>
                        <a className="name">{this.state.user[0]}</a>
                        <a className="value">{this.state.activate_value[0]}min</a>
                        <img src={block} style={{width:"35vw"}} className="bar"/>
                    </div>
        }
        else{
            title_rank_1 = <div></div>
            rank_1 = <div></div>
        }
        if(this.state.imagepath[1] != null){
            title_rank_2 = <div ><img src={require("../"+this.state.imagepath[1]+".png")}  className="rank_2"/></div>
            rank_2 = <div className="oneGuy">
                        <img src={require("../"+this.state.imagepath[1]+".png")}  className="img"/>
                        <a className="rank">2</a>
                        <a className="name">{this.state.user[1]}</a>
                        <a className="value">{this.state.activate_value[1]}min</a>
                        <img src={block} style={{width:lngth1}} className="bar"/>
                    </div>
        }
        else{
            title_rank_2 = <div></div>
            rank_2 = <div></div>
        }
        if(this.state.imagepath[2] != null){
            title_rank_3 = <div ><img src={require("../"+this.state.imagepath[2]+".png")}  className="rank_3"/></div>
            rank_3 = <div className="oneGuy">
                        <img src={require("../"+this.state.imagepath[2]+".png")}  className="img"/>
                        <a className="rank">3</a>
                        <a className="name">{this.state.user[2]}</a>
                        <a className="value">{this.state.activate_value[2]}min</a>
                        <img src={block} style={{width:lngth2}} className="bar"/>
                    </div>
        }
        else{
            title_rank_3 = <div></div>
            rank_3 = <div></div>
        }
        if(this.state.imagepath[3] != null)
            rank_4 = <div className="oneGuy">
                        <img src={require("../"+this.state.imagepath[3]+".png")}  className="img"/>
                        <a className="rank">4</a>
                        <a className="name">{this.state.user[3]}</a>
                        <a className="value">{this.state.activate_value[3]}min</a>
                        <img src={block} style={{width:lngth3}} className="bar"/>
                    </div>
        else
            rank_4 = <div></div>
        if(this.state.imagepath[4] != null)
            rank_5 = <div className="oneGuy">
                        <img src={require("../"+this.state.imagepath[4]+".png")}  className="img"/>
                        <a className="rank">5</a>
                        <a className="name">{this.state.user[4]}</a>
                        <a className="value">{this.state.activate_value[4]}min</a>
                        <img src={block} style={{width:lngth4}} className="bar"/>
                    </div>
        else
            rank_5 = <div></div>


        return (
            <div className="leaderboard">
              <div className="title_1">本週活動量</div>
              <div className="cup" style={{backgroundImage: "url(" + imgUrl + ")",backgroundSize: "cover"}}>
                {title_rank_1}
                {title_rank_2}
                {title_rank_3}
              </div>
              {rank_1}
              {rank_2}
              {rank_3}
              {rank_4}
              {rank_5}
            </div>
        )
    }
}

export default Mainview
