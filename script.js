var addDays = [
["0","0","0","0","0","суботу","неділю"],
["0","0","0","0","0","суботу","неділю"]];
var daysOfWeek = ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота", "Неділя"];
var addToButtonDaysOfWeek = ["понеділок", "вівторок", "середу", "четвер", "п'ятницю", "суботу", "неділю"];
var checkDisplayBlock =[
[1,1,1,1,1,0,0],
[1,1,1,1,1,0,0],
];
var classOfEachDay	 = [
[[1,1,1,1,1],
[1,1,1,1,1],
[1,1,1,1,1],
[1,1,1,1,1],
[1,1,1,1,1],
[0,0,0,0,0],
[0,0,0,0,0],
],
[
[1,1,1,1,1],
[1,1,1,1,1],
[1,1,1,1,1],
[1,1,1,1,1],
[1,1,1,1,1],
[0,0,0,0,0],
[0,0,0,0,0],
],
];
var firstMounth = 8;
var firstDay = 30;
var typeOfWeek = 0;
var tempTypeOfWeek = 0;
var day = 0;
var timeOfStartFirstClassH =  9;
var timeOfStartFirstClassM =  0;
var lengthOfBreak = 10;
var lengthOfLongBreak = 40;
var lengthOfClassH = 1;
var lengthOfClassM = 20;
var classLenghtH = [
[timeOfStartFirstClassH,0],
[0,0],
[0,0],
[0,0],
[0,0]
];
var classLenghtM = [
[timeOfStartFirstClassM,0],
[0,0],
[0,0],
[0,0],
[0,0]
];
var tempHours=  0;
var tempMinutes = 0;
var tempDay = 0;
var secondsOfOneMinute= 0;
function schedule(){
	document.getElementById("block-2").style.display = "block";
	document.getElementById("block-1").style.display = "none";

	for(i=0;i<7;i++){
		if(addDays[typeOfWeek][i]!=0){
			document.getElementById("check-"+(i+1)).style.display = "none";
			document.getElementById("AddDaysofWeek").innerHTML = "додати " + addDays[typeOfWeek][i] +"+";
			break;
		}
	}
	for(i=0;i<7;i++){
		if(addDays[typeOfWeek][i]!=0){
			document.getElementById("buttonDay-"+(i+1)).style.display = "none";
			document.getElementById("check-"+(i+1)).style.display = "none";
			document.getElementById('check-'+(i+1)).checked = false;
		}
		else{
			document.getElementById('buttonDay-'+(i+1)).style.display = "inline-block";
			document.getElementById('check-'+(i+1)).style.display = "inline-block";
		}
	}
}
function back(n){
	var step=1;
	if(n==4){
		step=3;
	}
	else if(n==4){
		step=4;
	}
	document.getElementById("block-"+n).style.display = "none";
	document.getElementById("block-"+(n-step)).style.display = "block";
	
}
function AddDaysofWeek(){
	
	var amountOfDays = 0;
	
	for(i=0;i<7;i++){
		if(addDays[tempTypeOfWeek][i]!=0){
			document.getElementById('buttonDay-'+(i+1)).style.display = "inline-block";
			document.getElementById('check-'+(i+1)).style.display = "inline-block";
			document.getElementById("buttonDay-"+(i+1)).disabled = false;
			document.getElementById("buttonDay-"+(i+1)).style.opacity=1;
			document.getElementById('check-'+(i+1)).checked = true;
			addDays[tempTypeOfWeek][i] = 0;
			amountOfDays++;	
			for(var k=0;k<5;k++){
				classOfEachDay[tempTypeOfWeek][i][k]= 1;
			}
			break;
		}
		
	}
	
	for(i=0;i<7;i++){
		if(addDays[tempTypeOfWeek][i]!=0){
			document.getElementById("AddDaysofWeek").innerHTML = "додати " + addDays[tempTypeOfWeek][i] +"+";
			break;
		}
		if(i==6){
			document.getElementById("AddDaysofWeek").style.display = "none";
		}
	}
}
function checkDay(){
	for(var i=0;i<7;i++){
		if(document.getElementById("check-"+(i+1)).checked){
			document.getElementById("buttonDay-"+(i+1)).style.opacity=1;
			document.getElementById("buttonDay-"+(i+1)).disabled = false;
		}
		else{
			document.getElementById("buttonDay-"+(i+1)).style.opacity=0.3;
			document.getElementById("buttonDay-"+(i+1)).disabled = true;
			for(var k=0;k<5;k++){
				classOfEachDay[tempTypeOfWeek][i][k]= 0;
			}
		}
	}
}

function confirmChangesInSchedule(){
		
	for(var i=0;i<7;i++){
		if(document.getElementById("check-"+(i+1)).checked){
			document.getElementById('buttonDay-'+(i+1)).style.display = "inline-block";
			document.getElementById('check-'+(i+1)).style.display = "inline-block";
			document.getElementById("buttonDay-"+(i+1)).style.opacity=1;
			
		}
		else{
			
			document.getElementById("AddDaysofWeek").style.display = "block";
			addDays[tempTypeOfWeek][i] = addToButtonDaysOfWeek[i];
			document.getElementById("buttonDay-"+(i+1)).style.display = "none";
			document.getElementById("check-"+(i+1)).style.display = "none";
			document.getElementById('check-'+(i+1)).checked = false;
			for(var k=0;k<5;k++){
				classOfEachDay[tempTypeOfWeek][i][k]= 0;
			}
		}
	
	}

	for(i=0;i<7;i++){
		if(addDays[tempTypeOfWeek][i]!=0){
			document.getElementById("check-"+(i+1)).style.display = "none";
			document.getElementById("AddDaysofWeek").innerHTML = "додати " + addDays[tempTypeOfWeek][i] +"+";
			break;
		}
	}
	tempHours=  0;
		tempMinutes = 0;
		tempDay = 0;
		document.getElementById("TimeOFTimerD").innerHTML="00";
		document.getElementById("TimeOFTimerH").innerHTML="00";
		document.getElementById("TimeOFTimerM").innerHTML="00";
		
		localStorage.setItem("classOfEachDay", JSON.stringify(classOfEachDay));
		
}
function dayShedule(n){
	day = n;

	document.getElementById("showEveryDay").innerHTML = daysOfWeek[day];
	document.getElementById("block-3").style.display = "block";
	document.getElementById("block-2").style.display = "none";
	for(var i=0;i<5;i++){
		if(classOfEachDay[tempTypeOfWeek][day][i] == 0){
		
		document.getElementById("everyDay-"+(i+1)).style.opacity=0.6;
		document.getElementById("everyDay-"+(i+1)).innerHTML = "+";
		
	}
	else {
	
		document.getElementById("everyDay-"+(i+1)).style.opacity=1;
		document.getElementById("everyDay-"+(i+1)).innerHTML = i+1 + " пара";
	}
	}
}
function checkClass(clas){
	if(classOfEachDay[tempTypeOfWeek][day][clas] == 1){
		
		document.getElementById("everyDay-"+(clas+1)).style.opacity=0.6;
		document.getElementById("everyDay-"+(clas+1)).innerHTML = "+";
		classOfEachDay[tempTypeOfWeek][day][clas] = 0;
	}
	else {
		classOfEachDay[tempTypeOfWeek][day][clas] = 1;
		document.getElementById("everyDay-"+(clas+1)).style.opacity=1;
		document.getElementById("everyDay-"+(clas+1)).innerHTML = clas+1 + " пара";
	}
}
function distribution(){
	
	document.getElementById("block-4").style.display = "block";
	document.getElementById("block-1").style.display = "none";
	document.getElementById("breakTime").value = lengthOfBreak;
	document.getElementById("longBreakTime").value = lengthOfLongBreak;
	document.getElementById("classTimeH").value = lengthOfClassH;
	document.getElementById("classTimeM").value = lengthOfClassM;
	
}
function confirmChangesInScheduleTime(){
	if(document.getElementById("classTimeH").value*1>2){document.getElementById("classTimeH").value=2}
	else if(document.getElementById("classTimeH").value*1<0){document.getElementById("classTimeH").value=0}
	
	if(document.getElementById("classTimeM").value*1>59){document.getElementById("classTimeM").value=59}
	else if((document.getElementById("classTimeM").value*1<10)&&(document.getElementById("classTimeH").value*1==0)){document.getElementById("classTimeM").value=10}
	else if(document.getElementById("classTimeM").value*1<0){document.getElementById("classTimeM").value=0}
	
	if(document.getElementById("breakTime").value*1>59){ document.getElementById("breakTime").value=59;}
	else if(document.getElementById("breakTime").value*1<5){ document.getElementById("breakTime").value=5;}
	
	if(document.getElementById("longBreakTime").value*1>59){ document.getElementById("longBreakTime").value=59;}
	else if(document.getElementById("longBreakTime").value*1<5){ document.getElementById("longBreakTime").value=5;}
	
	lengthOfBreak = document.getElementById("breakTime").value*1;
	timeOfStartFirstClassH = document.getElementById("startOfClass-1").value[0]*10+ document.getElementById("startOfClass-1").value[1]*1;
	timeOfStartFirstClassM = document.getElementById("startOfClass-1").value[3]*10+ document.getElementById("startOfClass-1").value[4]*1;
	lengthOfLongBreak = document.getElementById("longBreakTime").value*1;
	lengthOfClassH = document.getElementById("classTimeH").value*1;
	lengthOfClassM = document.getElementById("classTimeM").value*1;
	document.getElementById("breakTime").value = lengthOfBreak;
	document.getElementById("longBreakTime").value = lengthOfLongBreak;
	document.getElementById("classTimeH").value = lengthOfClassH;
	document.getElementById("classTimeM").value = lengthOfClassM;
	localStorage.timeOfStartFirstClassH =  timeOfStartFirstClassH;
	localStorage.timeOfStartFirstClassM =  timeOfStartFirstClassM;
	localStorage.lengthOfBreak = lengthOfBreak;
	localStorage.lengthOfLongBreak = lengthOfLongBreak;
	localStorage.lengthOfClassH = lengthOfClassH;
	localStorage.lengthOfClassM = lengthOfClassM;
	classLenghtH[0][0] = timeOfStartFirstClassH;
	classLenghtM[0][0] = timeOfStartFirstClassM;
	classLenghtH[0][1]= classLenghtH[0][0] + lengthOfClassH;
	classLenghtM[0][1] = classLenghtM[0][0] + lengthOfClassM;
	if(classLenghtM[0][1]>59){
		classLenghtM[0][1] -=60;
		classLenghtH[0][1]++;		
	}
	for(var i=0;i<5;i++){
	if(i!=2){
	classLenghtH[i][0]= classLenghtH[i-1][1];	
	classLenghtM[i][0] = classLenghtM[i-1][1] + lengthOfBreak;
	
	if(classLenghtM[i][0]>59){
		classLenghtM[i][0] -=60;
		classLenghtH[i][0]++;	
	}
	}
	else{
		classLenghtH[i][0]= classLenghtH[i-1][1];	
		classLenghtM[i][0] = classLenghtM[i-1][1] + lengthOfLongBreak;
	
	if(classLenghtM[i][0]>59){
		classLenghtM[i][0] -=60;
		classLenghtH[i][0]++;	
	}
	}
	classLenghtH[i][1]= classLenghtH[i][0] + lengthOfClassH;
	classLenghtM[i][1] = classLenghtM[i][0] + lengthOfClassM;
	if(classLenghtM[i][1]>59){
		classLenghtM[i][1] -=60;
		classLenghtH[i][1]++;		
	}
	}
	
	for(var i=0;i<5;i++){
	if((classLenghtH[i][0]<10)&&(classLenghtM[i][0]<10)){
		document.getElementById("startOfClass-"+(i+1)).value= "0"+classLenghtH[i][0]+":0"+classLenghtM[i][0];
	}
	else if(classLenghtH[i][0]<10){
		document.getElementById("startOfClass-"+(i+1)).value= "0"+classLenghtH[i][0]+":"+classLenghtM[i][0];
	}
	else if(classLenghtM[i][0]<10){
		document.getElementById("startOfClass-"+(i+1)).value= classLenghtH[i][0]+":0"+classLenghtM[i][0];
	}
	else{
		document.getElementById("startOfClass-"+(i+1)).value= classLenghtH[i][0]+":"+classLenghtM[i][0];
	}
	if((classLenghtH[i][1]<10)&&(classLenghtM[i][1]<10)){
		document.getElementById("endOfClass-"+(i+1)).value= "0"+classLenghtH[i][1]+":0"+classLenghtM[i][1];
	}
	else if(classLenghtH[i][1]<10){
		document.getElementById("endOfClass-"+(i+1)).value= "0"+classLenghtH[i][1]+":"+classLenghtM[i][1];
	}
	else if(classLenghtM[i][1]<10){
		document.getElementById("endOfClass-"+(i+1)).value= classLenghtH[i][1]+":0"+classLenghtM[i][1];
	}
	else{
		document.getElementById("endOfClass-"+(i+1)).value= classLenghtH[i][1]+":"+classLenghtM[i][1];
	}
	}
		tempHours=  0;
			tempMinutes = 0;
			tempDay = 0;
			document.getElementById("TimeOFTimerD").innerHTML="00";
			document.getElementById("TimeOFTimerH").innerHTML="00";
			document.getElementById("TimeOFTimerM").innerHTML="00";
	
}
var tempGetStartParametres = 0;
//localStorage.startParametres=0;

function getStartParametrs(){
	
	
	if(tempGetStartParametres==0){
	if(localStorage.startParametres!=1){
		localStorage.setItem("classOfEachDay", JSON.stringify(classOfEachDay));
		localStorage.firstMounth = 8;
		localStorage.firstDay = 30;
		//localStorage.typeOfWeek = 1;
		localStorage.day = 0;
		localStorage.timeOfStartFirstClassH =  9;
		localStorage.timeOfStartFirstClassM =  0;
		localStorage.lengthOfBreak = 10;
		localStorage.lengthOfLongBreak = 40;
		localStorage.lengthOfClassH = 1;
		localStorage.lengthOfClassM = 20;
		localStorage.startParametres=1;
		
	}
	else{
		classOfEachDay = JSON.parse(localStorage.getItem("classOfEachDay"));
		firstMounth = localStorage.firstMounth*1;
		firstDay = localStorage.firstDay*1;
		
		//typeOfWeek = localStorage.typeOfWeek*1;
		
		
		day = localStorage.day*1;
		timeOfStartFirstClassH =  localStorage.timeOfStartFirstClassH*1;
		timeOfStartFirstClassM =  localStorage.timeOfStartFirstClassM*1;
		lengthOfBreak = localStorage.lengthOfBreak*1;
		lengthOfLongBreak = localStorage.lengthOfLongBreak*1;
		lengthOfClassH = localStorage.lengthOfClassH*1;
		lengthOfClassM = localStorage.lengthOfClassM*1;
		
	}
	
	for(var m=0;m<7;m++){
		for(var n=0;n<5;n++){	
			if(classOfEachDay[0][m][n]==0){
				
			}
		
		}
	}
	tempGetStartParametres=1;
	}
	
	classLenghtH[0][1]= classLenghtH[0][0] + lengthOfClassH;
	classLenghtM[0][1] = classLenghtM[0][0] + lengthOfClassM;
	if(classLenghtM[0][1]>59){
		classLenghtM[0][1] -=60;
		classLenghtH[0][1]++;		
	}
	for(var i=1;i<5;i++){
	if(i!=2){
	classLenghtH[i][0]= classLenghtH[i-1][1];	
	classLenghtM[i][0] = classLenghtM[i-1][1] + lengthOfBreak;
	
	if(classLenghtM[i][0]>59){
		classLenghtM[i][0] -=60;
		classLenghtH[i][0]++;	
	}
	}
	else{
		classLenghtH[i][0]= classLenghtH[i-1][1];	
		classLenghtM[i][0] = classLenghtM[i-1][1] + lengthOfLongBreak;
	
	if(classLenghtM[i][0]>59){
		classLenghtM[i][0] -=60;
		classLenghtH[i][0]++;	
	}
	}
	classLenghtH[i][1]= classLenghtH[i][0] + lengthOfClassH;
	classLenghtM[i][1] = classLenghtM[i][0] + lengthOfClassM;
	if(classLenghtM[i][1]>59){
		classLenghtM[i][1] -=60;
		classLenghtH[i][1]++;		
	}
	}
	if((classLenghtH[0][1]<10)&&(classLenghtM[0][1]<10)){
		document.getElementById("endOfClass-1").value= "0"+classLenghtH[0][1]+":0"+classLenghtM[0][1];
	}
	else if(classLenghtH[0][1]<10){
		document.getElementById("endOfClass-1").value= "0"+classLenghtH[0][1]+":"+classLenghtM[0][1];
	}
	else if(classLenghtM[0][1]<10){
		document.getElementById("endOfClass-1").value= classLenghtH[0][1]+":0"+classLenghtM[0][1];
	}
	else{
		document.getElementById("endOfClass-1").value= classLenghtH[0][1]+":"+classLenghtM[0][1];
	}
	for(var i=1;i<5;i++){
	
	if((classLenghtH[i][0]<10)&&(classLenghtM[i][0]<10)){
		document.getElementById("startOfClass-"+(i+1)).value= "0"+classLenghtH[i][0]+":0"+classLenghtM[i][0];
	}
	else if(classLenghtH[i][0]<10){
		document.getElementById("startOfClass-"+(i+1)).value= "0"+classLenghtH[i][0]+":"+classLenghtM[i][0];
	}
	else if(classLenghtM[i][0]<10){
		document.getElementById("startOfClass-"+(i+1)).value= classLenghtH[i][0]+":0"+classLenghtM[i][0];
	}
	else{
		document.getElementById("startOfClass-"+(i+1)).value= classLenghtH[i][0]+":"+classLenghtM[i][0];
	}
	if((classLenghtH[i][1]<10)&&(classLenghtM[i][1]<10)){
		document.getElementById("endOfClass-"+(i+1)).value= "0"+classLenghtH[i][1]+":0"+classLenghtM[i][1];
	}
	else if(classLenghtH[i][1]<10){
		document.getElementById("endOfClass-"+(i+1)).value= "0"+classLenghtH[i][1]+":"+classLenghtM[i][1];
	}
	else if(classLenghtM[i][1]<10){
		document.getElementById("endOfClass-"+(i+1)).value= classLenghtH[i][1]+":0"+classLenghtM[i][1];
	}
	else{
		document.getElementById("endOfClass-"+(i+1)).value= classLenghtH[i][1]+":"+classLenghtM[i][1];
	}
	}
	
	for(var i =0;i<5;i++){
	
	document.getElementById("endOfClass-"+(i+1)).style.opacity = 0.7;
	if(i!=0){
		document.getElementById("startOfClass-"+(i+1)).style.opacity = 0.7;
	}
	
	}

	var t=new Date(); 
	var days=t.getDay(); 
	var hours=t.getHours(); 
	var minutes=t.getMinutes();
	var seconds=t.getSeconds();
	var founded = false;
	days--;
	if(days==-1){
		days=6;
	}
	

	if((document.getElementById("TimeOFTimerD").innerHTML=="00")&&(document.getElementById("TimeOFTimerH").innerHTML=="00")&&(document.getElementById("TimeOFTimerM").innerHTML=="00")){
	
	for(var k= 0;k<6;k++){
		var dayOfWeek = 0;
		dayOfWeek = days+k;
		if(dayOfWeek>6){	
				dayOfWeek-=7;
			}
		for(var i=0;i<5;i++){
		
			if(classOfEachDay[typeOfWeek][dayOfWeek][i]==0){

				continue;
			}
			else{
			
			if(tempDay==0){
			if(hours<=classLenghtH[i][0]){
				if(((hours==classLenghtH[i][0])&&(minutes<classLenghtM[i][0]))||(hours<classLenghtH[i][0])){
					
						tempHours=  classLenghtH[i][0]-hours;
						tempMinutes = 0;
						
						if(minutes>classLenghtM[i][0]){
							tempMinutes =  classLenghtM[i][0]+60 - minutes ;
							tempHours--;
						}
						else{
							tempMinutes = classLenghtM[i][0] - minutes ;
						}
												document.getElementById("TimeOFTimerD").innerHTML = "0" + tempDay;
						document.getElementById("TimeOFTimerH").innerHTML = "0"+ tempHours;
						if(tempMinutes>=10){
							document.getElementById("TimeOFTimerM").innerHTML = tempMinutes;
						}
						
						else {
						document.getElementById("TimeOFTimerM").innerHTML =  "0"+ tempMinutes;
						}
						document.getElementById("informationOfTime").innerHTML = "До початку " + (i+1) + " пари залишилось";
						founded = true;
						break;
				}
			}
			if((hours>=classLenghtH[i][0])&&(hours<=classLenghtH[i][1])){
					if(((hours==classLenghtH[i][0])&&(minutes>=classLenghtM[i][0]))||((hours==classLenghtH[i][1])&&(minutes<=classLenghtM[i][1]))||((hours>classLenghtH[i][0])&&(hours<classLenghtH[i][1]))){
						tempHours=  classLenghtH[i][1]-hours;
						tempMinutes = 0;
				
						if(minutes>classLenghtM[i][1]){
							tempMinutes =  classLenghtM[i][1]+60 - minutes ;
							tempHours--;
						}
						else{
							tempMinutes = classLenghtM[i][1] - minutes ;
						}
						document.getElementById("TimeOFTimerD").innerHTML = "0" + tempDay;
						document.getElementById("TimeOFTimerH").innerHTML = "0"+ tempHours;
						if(tempMinutes>=10){
							document.getElementById("TimeOFTimerM").innerHTML = tempMinutes;
						}
						
						else {
						document.getElementById("TimeOFTimerM").innerHTML =  "0"+ tempMinutes;
						}
						document.getElementById("informationOfTime").innerHTML = "До кінця " + (i+1) + " пари залишилось";
						founded = true;
						break;
					}
				}
			var nextClas = 0;
			if(i==4){
				nextClas=0;
			}
			else{
				nextClas=i+1;
			}
			if(((hours==classLenghtH[i][1])&&(minutes>=classLenghtM[i][1]))||((hours==classLenghtH[nextClas][0])&&(minutes<=classLenghtM[nextClas][0]))||((hours>classLenghtH[i][1])&&(hours<classLenghtH[nextClas][0]))){
						document.getElementById("informationOfTime").innerHTML = "До початку " + (nextClas+1) + " пари залишилось";
						tempHours=  classLenghtH[nextClas][0]-hours;
						tempMinutes = 0;
				
						if(minutes>classLenghtM[i+1][0]){
							tempMinutes =  classLenghtM[nextClas][0]+60 - minutes ;
							tempHours--;
						}
						else{
							tempMinutes = classLenghtM[nextClas][0] - minutes ;
						}
						document.getElementById("TimeOFTimerD").innerHTML = "0" + tempDay;
						document.getElementById("TimeOFTimerH").innerHTML = "0"+ tempHours;
						if(tempMinutes>=10){
							document.getElementById("TimeOFTimerM").innerHTML = tempMinutes;
						}
						
						else {
						document.getElementById("TimeOFTimerM").innerHTML =  "0"+ tempMinutes;
						}
						founded = true;
						break;
					}	
				

			}	
			else{

				
				tempHours = 0;
				tempMinutes = 0;
				if(minutes>classLenghtM[i][1]){
						tempMinutes =  classLenghtM[i][1]+60 - minutes ;
						tempHours--;
					}
				else{
							tempMinutes = classLenghtM[i][1] - minutes ;
						}
				
				if(classLenghtH[i][1]<hours+tempHours){
						tempHours += classLenghtH[i][1]+24-hours;
						tempDay--;
						}
				else{
							tempHours+=  classLenghtH[i][1]-hours;
						}
				
				document.getElementById("TimeOFTimerD").innerHTML = "0" + tempDay;
				if(tempHours>=10){
							document.getElementById("TimeOFTimerH").innerHTML = tempHours;
						}
						
				else {
						document.getElementById("TimeOFTimerH").innerHTML =  "0"+ tempHours;
						}
				if(tempMinutes>=10){
							document.getElementById("TimeOFTimerM").innerHTML = tempMinutes;
						}
						
				else {
						document.getElementById("TimeOFTimerM").innerHTML =  "0"+ tempMinutes;
						}
				document.getElementById("informationOfTime").innerHTML = "До початку " + (i+1) + " пари залишилось";
				founded = true;
				break;

			}
			}
			
			
			
		}
		if(founded){
			break;
		}
		else{
				tempDay++;
		}
		
	}
	

}
	
	
		
		if(seconds>=58	){
		tempMinutes--;
		if(tempMinutes==-1){
			tempMinutes+=59;
			tempHours--;
		}
		if(tempHours==-1){
			tempHours+=23;
			tempDay--;
		}
		
		document.getElementById("TimeOFTimerD").innerHTML = "0" + tempDay;
		if(tempHours>=10){
							document.getElementById("TimeOFTimerH").innerHTML = tempHours;
						}
						
		else {
				document.getElementById("TimeOFTimerH").innerHTML =  "0"+ tempHours;
				}
		if(tempMinutes>=10){
				document.getElementById("TimeOFTimerM").innerHTML = tempMinutes;
			}						
		else {
			document.getElementById("TimeOFTimerM").innerHTML =  "0"+ tempMinutes;
		}
		
	
	}

	setTimeout(getStartParametrs, 1000);	
}

 
function showDistribution(){

	document.getElementById("block-5").style.display = "block";
	document.getElementById("breakTime").value = lengthOfBreak;
	document.getElementById("longBreakTime").value = lengthOfLongBreak;
	document.getElementById("classTimeH").value = lengthOfClassH;
	document.getElementById("classTimeM").value = lengthOfClassM;
	
}
function exit(n){
	document.getElementById("block-"+n).style.display = "none";
}
function showSettings(){
	document.getElementById("block-1").style.display = "block";
}

function changeWeek(){
	for(var i=0;i<7;i++){
		
		if(document.getElementById("check-"+(i+1)).checked == false){
				
			addDays[tempTypeOfWeek][i] =  addToButtonDaysOfWeek[i];	

		}
		if(document.getElementById("buttonDay-"+(i+1)).style.display == "none"){
			checkDisplayBlock[tempTypeOfWeek][i] =0;	
		}
		else{
			checkDisplayBlock[tempTypeOfWeek][i] =1;
		}
	
	}
	
	if(tempTypeOfWeek==0){
		tempTypeOfWeek=1;
		document.getElementById("buttonTypeOfWeek").innerHTML = "Неділя під рискою";
	}
	else{
		tempTypeOfWeek=0;
		document.getElementById("buttonTypeOfWeek").innerHTML = "Неділя над рискою";
	}
	
	
	for(var i=0;i<7;i++){
		if(checkDisplayBlock[tempTypeOfWeek][i] ==0){
	
			document.getElementById("buttonDay-"+(i+1)).style.display = "none";
			document.getElementById("check-"+(i+1)).style.display = "none";
		}
		else{
			if(addDays[tempTypeOfWeek][i]==0){
				document.getElementById("buttonDay-"+(i+1)).style.display = "inline-block";
				document.getElementById("check-"+(i+1)).style.display = "inline-block";
				document.getElementById("buttonDay-"+(i+1)).style.opacity = 1;
				document.getElementById("check-"+(i+1)).checked = true;
				for(var k=0;k<5;k++){
			
					if(classOfEachDay[tempTypeOfWeek][i][k]==1){
						document.getElementById("buttonDay-"+(i+1)).style.opacity=1;
						document.getElementById("buttonDay-"+(i+1)).disabled = false;
						document.getElementById("check-"+(i+1)).checked = true;
						break;
					}	
				}
				
			}
			else{

						document.getElementById("buttonDay-"+(i+1)).style.opacity=0.3;
						document.getElementById("check-"+(i+1)).checked = false;
			
				}
			}
		}
		for(var i=0;i<7;i++){
		
		if(document.getElementById("buttonDay-"+(i+1)).style.display == "none"){
			document.getElementById("AddDaysofWeek").style.display = "block";
			document.getElementById("AddDaysofWeek").innerHTML = "додати " + addToButtonDaysOfWeek[i] +"+";
			break;
		}
		if(i==6){
			document.getElementById("AddDaysofWeek").style.display =  "none";
		}
	
	}
}

/*var t=new Date(); 
var hours=t.getHours(); 
var minuts=t.getMinutes();

}*/

