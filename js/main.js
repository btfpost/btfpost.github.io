// JavaScript Document
var weatherConditions = new XMLHttpRequest();
var weatherForecast=new XMLHttpRequest();

var cObj;
var fObj;
var zip;

function loadWeather(){
	
	zip = document.getElementById('zip').value;

	
	
		if(zip==='' || zip==="Enter ZIP"){zip="45208"}
	
	
	
	
	var condidtionPath = "http://api.apixu.com/v1/current.json?key=3da912dcc42a488aac6195535182006&q="+zip+"";
	var forecastPath= "http://api.apixu.com/v1/forecast.json?key=3da912dcc42a488aac6195535182006&q="+zip+"&days=7";	
	
	weatherConditions.open('GET', condidtionPath, true);
	weatherConditions.responseType = 'text';
	weatherConditions.send();
	
	weatherForecast.open('GET', forecastPath, true);
	weatherForecast.responseType = 'text';
	weatherForecast.send();
	
}





weatherConditions.onload = function() {
    if(weatherConditions.status === 200) {
        cObj = JSON.parse(weatherConditions.responseText);
        console.log(cObj);
        
        document.getElementById('location').innerHTML=cObj.location.name+","+ " " + cObj.location.region + " "+ "(" +zip+ ")";
        document.getElementById("weather").innerHTML=cObj.current.condition.text;
        document.getElementById('temperature').innerHTML=cObj.current.temp_f + "\u00b0"+ " "+"F";
        document.getElementById('feelslike').innerHTML="Feels like " + cObj.current.feelslike_f + "\u00b0"+ " "+"F";
        
    } // end if
} // end function




weatherForecast.onload = function() {
    if(weatherForecast.status === 200) {
        fObj = JSON.parse(weatherForecast.responseText);
        console.log(fObj);
        document.getElementById("currentWeather").src="http:"+ fObj.forecast.forecastday[0].day.condition.icon;
        document.getElementById("desc").innerHTML=fObj.forecast.forecastday["0"].day.condition.text;
        
        var d = new Date();
        var weekday = new Array(7);
        weekday[0] =  "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

        var todayWeekday = weekday[d.getDay()];
        var tomorrowWeekday = weekday[d.getDay()+1];
        var day2nd = weekday[d.getDay()+2];
        var day3rd = weekday[d.getDay()+3];
        
        //Day1
        document.getElementById("r1c1").innerHTML=tomorrowWeekday;
        document.getElementById("r1c3").innerHTML=fObj.forecast.forecastday[1].day.maxtemp_f + "\u00b0";
        document.getElementById("r1c4").innerHTML=fObj.forecast.forecastday[1].day.mintemp_f + "\u00b0";
        var imagePath = fObj.forecast.forecastday[1].day.condition.icon;
        document.getElementById("r1c2").src="http:"+ imagePath;
        
        //Day2 
        document.getElementById("r2c1").innerHTML=day2nd;
        document.getElementById("r2c3").innerHTML=fObj.forecast.forecastday[2].day.maxtemp_f + "\u00b0";
        document.getElementById("r2c4").innerHTML=fObj.forecast.forecastday[2].day.mintemp_f + "\u00b0";
        var imagePath = fObj.forecast.forecastday[2].day.condition.icon;
        document.getElementById("r2c2").src="http:"+ imagePath;
        
        //Day3
        document.getElementById("r3c1").innerHTML=day3rd;
        document.getElementById("r3c3").innerHTML=fObj.forecast.forecastday[3].day.maxtemp_f + "\u00b0";
        document.getElementById("r3c4").innerHTML=fObj.forecast.forecastday[3].day.mintemp_f + "\u00b0";
        var imagePath = fObj.forecast.forecastday[3].day.condition.icon;
        document.getElementById("r3c2").src="http:"+ imagePath;
        
    } // end if
};

loadWeather();// end function

