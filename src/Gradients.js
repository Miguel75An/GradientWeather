import React, { Component } from 'react';

// Libraries
import './WeatherContainer.css';

class Gradient extends Component{
    // Renders background-colors in a gradient serie
    // The css property is modified with a transtion

    constructor(props){
        super(props);
        this.state={
            gradIndex: 0,
        }
        this.timerTick = this.timerTick.bind(this);
    }

    timerTick(){
        // Updates to the next gradient
        var nextIndex = (this.state.gradIndex === linear_grads.length-1) ? 0 : this.state.gradIndex + 1;
        this.setState({gradIndex:nextIndex});
    }

    componentDidMount(){
        // Calls upgrading function every second
        setInterval(this.timerTick,1000);
    }

    render(){
        return(
            <div className="gradiente" style={{backgroundColor:linear_grads[this.state.gradIndex][0]}}>
             {/* There are 24 gradients for each hour here.
             The CSS transition property makes the change
             of background-color very smooth rathen than
             seeing an abrupt change of colors. */}
            </div>
        );
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

export default Gradient;