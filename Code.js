        // variables

        var current = new Date();
        var day = current.getDay();
        
        // JS object which stores hours specific to days

        var scheduleGenerate = {
            
            Monday: {
                data: "9:00 am - 6:00 pm",
                openTime: setTime(9,0,0),
                closeTime: setTime(18,0,0)
            },
            Tuesday: {
                data: "CLOSED"
            },
            Wednesday: {
                data: "9:30 am - 4:30 pm",
                openTime: setTime(9,30,0),
                closeTime: setTime(16,30,0)
            },
            Thursday: {
                data: "10:00 am - 4:30 pm",
                openTime: setTime(10,0,0),
                closeTime: setTime(16,30,0)
            },
            Friday: {
                data: "9:00 am - 6:00 pm",
                openTime: setTime(9,0,0),
                closeTime: setTime(18,0,0)
            },
            Saturday: {
                data: "CLOSED"
            },
            Sunday: {
                 data: "CLOSED"
            }

        }
        
        // dynamic generation of hours when page loads
        
        dynamicGenerate(day);
        
        // This function is used to set specific hours for a date object and returns a modified date object

        function setTime(Hours,Minutes,Seconds){

            var date = new Date();
            date.setHours(Hours,Minutes,Seconds);
            return date;

        }
        
        // various on click functions and their implementations
        document.getElementById("sunday").onclick = function(){
            
            document.getElementById("schedule-status").innerHTML = scheduleGenerate.Sunday.data;
            event.preventDefault();
        }

        document.getElementById("monday").onclick = function(){
            
            DOM_Manipulate(scheduleGenerate.Monday.openTime,scheduleGenerate.Monday.closeTime,scheduleGenerate.Monday.data,1);
            event.preventDefault();
        }

        document.getElementById("tuesday").onclick = function(){
            
            document.getElementById("schedule-status").innerHTML = scheduleGenerate.Tuesday.data;
            event.preventDefault();
        }

        document.getElementById("wednesday").onclick = function(){
            
            DOM_Manipulate(scheduleGenerate.Wednesday.openTime,scheduleGenerate.Wednesday.closeTime,scheduleGenerate.Wednesday.data,3);
            event.preventDefault();
        }

        document.getElementById("thursday").onclick = function(){
            
            DOM_Manipulate(scheduleGenerate.Thursday.openTime,scheduleGenerate.Thursday.closeTime,scheduleGenerate.Thursday.data,4);
            event.preventDefault();
        }

        document.getElementById("friday").onclick = function(){
            
            DOM_Manipulate(scheduleGenerate.Friday.openTime,scheduleGenerate.Friday.closeTime,scheduleGenerate.Friday.data,5);
            event.preventDefault();
        }
        
        document.getElementById("saturday").onclick = function(){
            
            document.getElementById("schedule-status").innerHTML = scheduleGenerate.Saturday.data;
            event.preventDefault();

        }


        // This function is used to generate dynamic hours for specific days on load 
        
        function dynamicGenerate(day) {

            switch(day) {
                        case 0:

                            document.getElementById("schedule-status").innerHTML = scheduleGenerate.Sunday.data;  
                            break;

                        case 1:     

                            DOM_Manipulate(scheduleGenerate.Monday.openTime,scheduleGenerate.Monday.closeTime,scheduleGenerate.Monday.data,1);  
                            break; 

                        case 2:

                            document.getElementById("schedule-status").innerHTML = scheduleGenerate.Tuesday.data;
                            break;

                        case 3:

                            DOM_Manipulate(scheduleGenerate.Wednesday.openTime,scheduleGenerate.Wednesday.closeTime,scheduleGenerate.Wednesday.data,3);      
                            break;

                        case 4:

                            DOM_Manipulate(scheduleGenerate.Thursday.openTime,scheduleGenerate.Thursday.closeTime,scheduleGenerate.Thursday.data,4);  
                            break;

                        case 5:

                            DOM_Manipulate(scheduleGenerate.Friday.openTime,scheduleGenerate.Friday.closeTime,scheduleGenerate.Friday.data,5);        
                            break;

                        case 6:

                            document.getElementById("schedule-status").innerHTML = scheduleGenerate.Saturday.data;
                            break;

                        default:
                            break;
                }

        }
        
        // This function manipulates the content shown `OPEN NOW` or `OPEN FROM` depending on business hours

        function DOM_Manipulate(openHour, closeHour, data, todays_day){

                if(current >= openHour && current < closeHour && todays_day == current.getDay()){

                     document.getElementById("schedule-status").innerHTML = "OPEN NOW" + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + data;
                }
                else{

                    document.getElementById("schedule-status").innerHTML = "OPEN FROM" + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + data;
                }
        }

          
          // jQuery function which is used to highlight the day links when clicked

          var links = $('a');

            links.click(function() {

              links.css('color', 'grey');
              $(this).css('color', 'white');

            });