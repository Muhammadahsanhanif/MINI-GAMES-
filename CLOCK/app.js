var hours = document.getElementById("hours")

var minutes = document.getElementById("minutes")

var second = document.getElementById("seconds")

var AM_PM = document.getElementById("AM_PM")

var date = document.getElementById("date")


var day = document.getElementById("day")


var month = document.getElementById("month")


var year = document.getElementById("year")



setInterval(function(){

    var currentDate = new Date()

    // console.log(currentDate);

    var currentHours = currentDate.getHours();

    var currentminutes = currentDate.getMinutes();

    var currentsecond = currentDate.getSeconds();

    var peroids = "AM"

    var currentDates = currentDate.getDate();
    var currentmonth = currentDate.getMonth();
    var currentDays = currentDate.getDay();
    var currentyear = currentDate.getFullYear();

//     var dayNames = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];

//  var currentDays = dayNames[currentDates.getDays()];




    if(currentHours === 0){

        currentHours == 12
    }if(currentHours > 12){

        currentHours -= 12
        peroids = "PM"
    }if(currentminutes < 10){

        currentminutes ="0" + currentminutes
    }if(currentsecond < 10){
        currentsecond = "0" + currentsecond
    }


  AM_PM .innerText = peroids;
  hours.innerText=currentHours;
  minutes.innerText=currentminutes;
  seconds.innerText=currentsecond;

  date.innerText = currentDates
  day.innerText= currentDays
  month.innerText = currentmonth
  year.innerText = currentyear

  

},1000)



