
//#myName
//#myClock
let userName=document.querySelector('#myName')
let userClock=document.querySelector('#myClock')

function showTime(){
 let date= new Date();

 let hour = date.getHours();
 let minute= date.getMinutes();
 let second= date.getSeconds();
 var session="AM";
 let day= date.getDay();

 

 let month= date.getMonth() + 1;	// Month	[mm]	(1 - 12)
 let today= date.getDate();		// Day		[dd]	(1 - 31)
 let year= date.getFullYear();	// Year		[yyyy]
 
 hour= (hour < 10) ? "0" + hour : hour;
 minute= (minute < 10) ? "0" + minute : minute;
 second= (second < 10) ? "0" + second : second;
 
 if(hour==0){
    hour=12
    }
    else {
    hour= hour-12;
    session="PM"
    }

    switch(day){
        case 1: day="Pzt"; break;
        case 2: day="Salı"; break;
        case 3: day="Çrş"; break;
        case 4: day="Prş"; break;
        case 5: day="Cuma"; break;
        case 6: day="Cmts"; break;
        case 0: day="Pzr"; break;
    }

 let currentTime= `${hour} : ${minute} : ${second} ${session} -  ${today}.${month}.${year} (${day})`

 userClock.innerHTML=currentTime

 setTimeout(showTime, 1000)
}

showTime()


let userPromptAnswer= prompt("Hey Joe, Sen de kimsin?")
userName.innerHTML=userPromptAnswer

