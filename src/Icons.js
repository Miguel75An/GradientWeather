import React, { Component } from 'react';

// Libraries
import moment from 'moment';
import WeatherIcons from 'react-weathericons';
import './WeatherContainer.css';
import './icon_css/weather-icons.css';

class Icon extends Component{
    // Class renders an icon based on a  weather condition
    // Property sky is used to identify day or night icons

    render(){
        var condition = this.props.condition;
        var sky = this.props.sky; // 0 for day, 1 for night
        return(
            <WeatherIcons name={weather[condition][sky]} size='5x'/>
        );
    } 
}

class ConditionRotation extends Component{
    // Renders an icon that changes when the mouse is hovering its parent element
    // Displays date, hour and name of weather condition

    constructor(props){
        super(props);
        this.state={
            rotate:true,
            iconIndex: 0,
            size: this.props.conditions.length,
        }
        this.timerTick = this.timerTick.bind(this);
    }

    timerTick(){
        // Updates index to change current icon to next icon in props.conditions
        if(this.props.move){
            var nextIndex = (this.state.iconIndex === this.state.size-1) ? 0 : this.state.iconIndex + 1;
            this.setState({iconIndex:nextIndex});
        }
    }

    componentDidMount(){
        // Call timerTick every 3 seconds 
        setInterval(this.timerTick,3000);
    }

    render(){
        // Get properties 
        var curr_condition = this.props.conditions[this.state.iconIndex];
        var curr_sky = this.props.skies[this.state.iconIndex];
        var curr_date = this.props.dates[this.state.iconIndex];
        // Format date
        var date_formatted = moment(curr_date,"YYYY-MM-DD HH:mm:ss").format('MM-DD');
        var hour_formatted = moment(curr_date,"YYYY-MM-DD HH:mm:ss").format('HH:mm A');
        return(
            <div>
            <p>{date_formatted}</p>
            <p>{hour_formatted}</p>
            <p>{curr_condition}</p>
            <p><Icon condition={curr_condition} sky={curr_sky} /></p>
            <br></br>
            </div>
        );
    }
}

// Dictionary for weather conditions and the
// corresponding day and night icon names
var weather = {
    'clear sky': ['day-sunny','night-clear'],
    'few clouds': ['day-cloudy','night-alt-cloudy'],
    'scattered clouds': ['cloud','cloud'],
    'overcast clouds': ['cloudy','cloudy'],
    'broken clouds': ['cloudy','cloudy'],
    'shower rain': ['day-showers','night-alt-showers'],
    'rain': ['rain','rain'],
    'thunderstorm': ['day-thunderstorm','night-alt-thunderstorm'],
    'thunderstorm with light rain':  ['day-thunderstorm','night-alt-thunderstorm'],
    'thunderstorm with heavy rain':  ['day-thunderstorm','night-alt-thunderstorm'],
    'light thunderstorm':            ['day-thunderstorm','night-alt-thunderstorm'],
    'heavy thunderstorm':            ['day-thunderstorm','night-alt-thunderstorm'],
    'ragged thunderstorm':           ['day-thunderstorm','night-alt-thunderstorm'],
    'thunderstorm with drizzle':     ['day-thunderstorm','night-alt-thunderstorm'],
    'thunderstorm with light drizzle':  ['day-thunderstorm','night-alt-thunderstorm'],
    'thunderstorm with heavy drizzle':  ['day-thunderstorm','night-alt-thunderstorm'],
    'light rain':           ['rain','rain'],	 	
    'moderate rain':        ['rain','rain'],	 
	'heavy intensity rain': ['rain','rain'],	
	'very heavy rain':      ['rain','rain'],	 
    'extreme rain':         ['rain','rain'],
    'snow': ['day-snow','night-alt-snow'],
    'mist': ['day-fog','night-fog']
};

export default ConditionRotation;

