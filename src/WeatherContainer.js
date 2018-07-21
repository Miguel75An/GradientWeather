import React, { Component } from 'react';

// File Components
import TallWeatherDiv from './TallWeatherDiv';

// Libraries
import moment from 'moment';

function isDay(date){
    // Returns 1 if date is nightime, else 0
    var hour = moment(date,"YYYY-MM-DD HH:mm:ss").format('H');
    var parseHour = parseInt(hour,10);
    if(parseHour < 6 || parseHour >= 18){
        return 1;
    }
    return 0;
}

class WeatherContainer extends Component{
    // 
    constructor(props){
        super(props);

        this.state = {
            display_list : {},
        }

        this.writeDayName = this.writeDayName.bind(this);
        this.separateDaysData = this.separateDaysData.bind(this);
    }

    writeDayName(day_string){
        // Takes date string and returns name of day (ex: Monday, Tue..)

        // Create a moment object and extract name of day
        var day = moment(day_string,"YYYY-MM-DD HH:mm:ss").format('dddd');
        
        // Check if current day is different
        if(this.current_day !== day){
            this.current_day = day;
            return this.current_day;
        }
    }

    separateDaysData(days_data) {
        // This function takes the list of dictionaries and separates the data
        // into individual dictionaries for each day
        // Called everytime a state changes from the render() function
        console.log("Separating Days Process")

        var forecast_info = {}; // Has elements "key" : [array]

        for(var i = 0; i < days_data.length; i++){
            var extended_date = days_data[i].dt_txt;
            var day_name = moment(extended_date,"YYYY-MM-DD HH:mm:ss").format('dddd');

            // Check if key called day_name exists
            if (!(day_name in forecast_info)){
                forecast_info[day_name] = [];
            }

            // Push: 0-temp_max 1-temp_min 2-temp 
            //       3-description 4-date 5-sky
            var t_max = days_data[i].main.temp_max;
            var t_min = days_data[i].main.temp_min;
            var t_    = days_data[i].main.temp;
            var desc  = days_data[i].weather[0].description; 
            var date  = days_data[i].dt_txt;
            var sky   = isDay(date)
            // Store those values in an array and then push array to forecast_info
            forecast_info[day_name].push([t_max,t_min,t_,desc,date,sky]);
        }
        console.log(forecast_info);
        return forecast_info; // Shape: key: dayName, value: array of arrays
    }

    render(){
        // Get dictionary of day temperatures
        const forecast_info = this.separateDaysData(this.props.weather_lists);
        const week_days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday","Friday","Saturday"];
        const keys =  Object.keys(forecast_info);
        const to_render = [];

        for(let i=0; i < week_days.length; i++){
            if(keys.includes(week_days[i])){
                //Pass weather information for each day to a <TallWeatherDiv> instance
                let tuples = forecast_info[week_days[i]]
                let tall_div = <TallWeatherDiv day_info={tuples} nameOfDay = {week_days[i]} />
                to_render.push(tall_div);
            }
        }

        return(
        <div className="container">
            {/* Render the <TallWeatherDiv> components */}
            {to_render}
        </div>);
    }
}

export default WeatherContainer;