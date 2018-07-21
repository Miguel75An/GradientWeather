import React, { Component } from 'react';
import WeatherContainer from './WeatherContainer';

// In production python allows you to fetch a key specified in a local 
// environment, javascript should allow you to fetch in the same key 

// Parameter fixed values
const apikey = "ee09f3330cb991a3c13c42cbc5574913";
const city_id = "5128581"; //New York:5128581 (based on lon and lat) 
const unit = "imperial"; //Farenheith units

// Parameter and path names
const PATH_BASE = 'https://api.openweathermap.org/data/2.5';
const PATH_FORECAST = '/forecast';
const PARAM_CITY_ID = 'id=';
const PARAM_UNIT = 'units=';
const PARAM_KEY = 'APPID=';

class WeatherMain extends Component{
    // Data fetching occurs here
    // Passes data to inner components
    constructor(props){
        super(props);

        this.state={data: [] };
        this.setWeather = this.setWeather.bind(this);
        this.fetchWeather = this.fetchWeather.bind(this);
    }

    setWeather(result){
        // Updates state data variable with fetched information
        const {list} = result;
        this.setState({data:list});

    }
    fetchWeather(){
        // Makes a call to the API and gets a result containing weather information
        fetch(`${PATH_BASE}${PATH_FORECAST}?${PARAM_CITY_ID}${city_id}&${PARAM_UNIT}${unit}&${PARAM_KEY}${apikey}`)
        .then(response => response.json())
        .then(result => this.setWeather(result));

    }

    componentDidMount(){
        // Call to fetch weather data
        this.fetchWeather();
    }

    render(){
        console.log(this.state.data);
        return(<WeatherContainer weather_lists = {this.state.data} />);
    }
}

export default WeatherMain;