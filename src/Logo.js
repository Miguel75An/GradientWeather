import React, { Component } from 'react';

// Libraries
import WeatherIcons from 'react-weathericons';
import './WeatherContainer.css';
import './Logo.css'
import './icon_css/weather-icons.css';

class Logo extends Component{
    constructor(props){
        super(props);

        this.state={
            colorIndex:0
        }
        this.timerTick = this.timerTick.bind(this);
    }
    timerTick(){
        // Updates to the next color
        var nextColor = (this.state.colorIndex === linear_grads.length-1) ? 0 : this.state.colorIndex + 1;
        this.setState({colorIndex:nextColor});
    }

    componentDidMount(){
        // Calls upgrading function every second
        setInterval(this.timerTick,1500);
    }
    render(){
        var styles = {
            margin: '30px',
            fontSize: '25px'
        }
        return(
        <div style={styles} >
            <br></br>
           <p className="logo" style={{color:linear_grads[this.state.colorIndex][0]+'B3'}}> <WeatherIcons name="solar-eclipse" size='5x'/></p>
        </div>);
    }
}

// Array of array, each inner array contains a gradient pair
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


export default Logo;