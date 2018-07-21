import React, { Component } from 'react';

// File Components 
import ConditionRotation from './Icons';

// Libraries
import './WeatherContainer.css';

class TallWeatherDiv extends Component{
    // A <div> that displays a weekday containing
    // weather information and temperatures

    constructor(props){
        super(props);
        
        this.state={
            moveIcons: false,
            gradIndex: 0,
            border: "none",
        }
        this.changeDivLook = this.changeDivLook.bind(this);
        this.timerTick = this.timerTick.bind(this);
    }

    changeDivLook(){
        // Updates border style of div and allows its icon and information to start
        // or stop changing based on onMouseEnter or onMourseLeave

        var newBorder = (this.state.border === 'none')?'dashed':'none';
        this.setState({border: newBorder});

        this.setState(prevState => ({
            moveIcons: !prevState.moveIcons}));
    }

    timerTick(){
        // When the mouse enters the <div>, the next color in 
        // the array linear_grads is used as the next background

        if(this.state.moveIcons){
            var nextIndex = (this.state.gradIndex === linear_grads.length-1) ? 0 : this.state.gradIndex + 1;
            this.setState({gradIndex:nextIndex});}
    }

    componentDidMount(){
        // Calls function that updates gradient
        setInterval(this.timerTick,1000);
    }

    render(){
        // Create variables to process weather data (props.day_info)
        var intervals = this.props.day_info.length;
        var max_temp = 0;
        var min_temp = 0;
        var w_conditions = [];
        var w_skies = [];
        var w_dates = [];
        //console.log(this.props.day_info);

        // Get max, min temperatures, fill arrays
        for(let i = 0; i < intervals; i++){
            max_temp += this.props.day_info[i][0];
            min_temp += this.props.day_info[i][1];
            w_conditions.push(this.props.day_info[i][3]);
            w_dates.push(this.props.day_info[i][4]);
            w_skies.push(this.props.day_info[i][5]);
        } 

        // Average max and min. Border looks.
        var avg_max = Math.round(max_temp/intervals);
        var avg_min = Math.round(min_temp/intervals);
        var borderlook = 'none '+ this.state.border+' none ' + this.state.border;

        return(
            <div  className="horizontal" onMouseEnter={this.changeDivLook} onMouseLeave={this.changeDivLook} 
            key={this.props.nameOfDay} style={{backgroundColor:linear_grads[this.state.gradIndex][0]+"B3"}}>
            <div className="border_style" style={{borderStyle: borderlook}}>

            <p style={{fontSize:"25px"}}>{this.props.nameOfDay}</p>
            <ConditionRotation conditions={w_conditions} skies={w_skies} dates={w_dates} move={this.state.moveIcons} />
            <p style={{fontSize:"18px"}}>High: {avg_max}</p>
            <p style={{fontSize:"18px"}}>Low:  {avg_min}</p>

            </div>
            </div>
        );
    }
}

// Array contining pairs of gradients that follow the day to night cycle
var linear_grads = [['#012459' , '#001322'], ['#003972' , '#001322'],
                    ['#003972' , '#001322'], ['#004372' , '#00182b'],
                    ['#004372' , '#011d34'], ['#016792' ,' #00182b'],
                    ['#07729f' , '#042c47'], ['#12a1c0' , '#07506e'], 
                    ['#74d4cc' , '#1386a6'], ['#efeebc' , '#61d0cf'], 
                    ['#fee154' , '#a3dec6'], ['#fdc352' ,' #e8ed92'], 
                    ['#ffac6f' , '#ffe467'], ['#fda65a' , '#ffe467'], 
                    ['#fd9e58' , '#ffe467'], ['#f18448' , '#ffd364'], 
                    ['#f06b7e' , '#f9a856'], ['#ca5a92' , '#f4896b'], 
                    ['#5b2c83' , '#d1628b'], ['#371a79' , '#713684'], 
                    ['#28166b' , '#45217c'], ['#192861' , '#372074'], 
                    ['#040b3c' , '#233072'], ['#040b3c' , '#012459']];

export default TallWeatherDiv;