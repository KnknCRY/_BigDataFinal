import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import '../../index.css';
import constantData from './_History_Rate1.json';
import { patient_1 } from '../UserFunctions'

import Highcharts from 'highcharts' //npm install highcharts-more --save
import * as HighchartsMore from "highcharts/highcharts-more"
import Highstock from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official' //npm install highcharts-react-official
import constantData4 from './fake_data1.json';

HighchartsMore(Highcharts)
HighchartsMore(Highstock)


class Preview_2 extends Component {
    constructor() {
        super()
        this.state = {
            width: Number(document.body.clientWidth*0.5),
            height: Number(document.body.clientWidth*0.3),
            textsize: Number(document.body.clientWidth*0.001)
        }
        
    }

    render () {
        console.log(this.state.textsize);
         var configs_1 = {
            chart: {
                type: 'line',
                width: this.state.width,
                height: this.state.height
            },                      
            legend: {
                enabled: true,
                align: 'center',
                symbolWidth: 10,
                symbolHeight: 10,
                symbolRadius: 5,
                itemStyle:{
                    "fontSize": "0.8rem"
                }
            },
            rangeSelector : {
                  buttons: [
                  { type: 'day', count: 1, text: '1 day'},
                  { type: 'day', count: 7, text: '1w'},
                  { type: 'month', count: 1, text: '1m'},
                  { type: 'month', count: 3, text: '3m'},
                  { type: 'all', text: 'All'}
                  ],
                  selected : 1
            },
            
            title : {
                text : ''
            },
            global: {
                useUTC: false
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: true,
                filename: ""
            },
            navigator: {
                enabled: true,
                series: {
                    type: 'line'
                }
            },
            plotOptions: {
                series: {
                    dataLabels: {
                        enabled: false,
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'gray'
                    }
                }
            },
            series: [
                {
                    name: 'Cardi_rate',
                    data: constantData4.Cardi_rate
                }
            ]
        }
        var configs_2 = {
            chart: {
                type: 'line',
                width: this.state.width,
                height: this.state.height
            },                      
            legend: {
                enabled: true,
                align: 'center',
                symbolWidth: 10,
                symbolHeight: 10,
                symbolRadius: 5,
                itemStyle:{
                    "fontSize": "0.8rem"
                }
            },
            rangeSelector : {
                  buttons: [
                  { type: 'day', count: 1, text: '1 day'},
                  { type: 'day', count: 7, text: '1w'},
                  { type: 'month', count: 1, text: '1m'},
                  { type: 'month', count: 3, text: '3m'},
                  { type: 'all', text: 'All'}
                  ],
                  selected : 1
            },
            
            title : {
                text : ''
            },
            global: {
                useUTC: false
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: true,
                filename: ""
            },
            navigator: {
                enabled: true,
                series: {
                    type: 'line'
                }
            },
            plotOptions: {
                series: {
                    dataLabels: {
                        enabled: false,
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'gray'
                    }
                }
            },
            series: [
                {
                    name: 'Diebetes_rate',
                    data: constantData4.Diebetes_rate
                }
            ]
        }
        return (
                <div className="graphs_3">
                    <div style={{margin:"0 auto"}}>
                        <div className="graph_name">心血管疾病</div>
                        <HighchartsReact highcharts = {Highstock} constructorType = {'stockChart'} options = {configs_1} />
                        <hr/>
                    </div>

                    <div style={{margin:"0 auto"}}>
                        <div className="graph_name">糖尿病</div>
                        <HighchartsReact highcharts = {Highstock} constructorType = {'stockChart'} options = {configs_2} />
                    </div>
                </div>
                
        )
    }
}

export default Preview_2