import React, { Component } from 'react';

// Libraries
import './WeatherContainer.css';

class LinGradient extends Component{
    // Renders gradient colors using the property background
    // Unfortunately, a nice transition between gradients
    // is not possible with simple CSS

    constructor(props){
        super(props);
        this.state={
            gradIndex: 0,
        }
        this.timerTick = this.timerTick.bind(this);
    }

    timerTick(){
        // Updates pair of gradients
        var nextIndex = (this.state.gradIndex === linear_grads.length-1) ? 0 : this.state.gradIndex + 1;
        this.setState({gradIndex:nextIndex});
    }

    componentDidMount(){
        // Calls updating function
        setInterval(this.timerTick,1000);
    }

    render(){
        return(
            <div className="lineargrad" 
            style={{background: "linear-gradient("+linear_grads[this.state.gradIndex][0]+'00,'+linear_grads[this.state.gradIndex][0]+')'}}>
             {/* It was not possible to use the CSS transition property to smoothly 
            change between a pair of gradient colors. The change is abrupt.*/}
            </div>
        );
    }
}

// Array of array, each inner array contains a gradient pair.
// It is prefer to use those pairs with the CSS property 
// backgorund and linear-gradient(color1,color2)
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


export default LinGradient;