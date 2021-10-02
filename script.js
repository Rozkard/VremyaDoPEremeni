var addDays = ["0","0","0","0","0","суботу","неділю"];
var daysOfWeek = ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота", "Неділя"];
var classOfEachDay = [
[1,1,1,1,1],
[1,1,1,1,1],
[1,1,1,1,1],
[1,1,1,1,1],
[1,1,1,1,1],
[0,0,0,0,0],
[0,0,0,0,0],

];
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
function schedule(){
	document.getElementById("block-2").style.display = "block";
	document.getElementById("block-1").style.display = "none";

	for(i=0;i<7;i++){
		if(addDays[i]!=0){
			document.getElementById("check-"+(i+1)).style.display = "none";
			document.getElementById("AddDaysofWeek").innerHTML = "додати " + addDays[i] +"+";
			break;
		}
	}
	for(i=0;i<7;i++){
		if(addDays[i]!=0){
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
		if(addDays[i]!=0){
			document.getElementById('buttonDay-'+(i+1)).style.display = "inline-block";
			document.getElementById('check-'+(i+1)).style.display = "inline-block";
			document.getElementById("buttonDay-"+(i+1)).disabled = false;
			document.getElementById("buttonDay-"+(i+1)).style.opacity=1;
			document.getElementById('check-'+(i+1)).checked = true;
			addDays[i] = 0;
			amountOfDays++;	
			for(var k=0;k<5;k++){
				classOfEachDay[i][k]= 1;
			}
			break;
		}
		amountOfDays++;
	}
	if(amountOfDays>=3){
		for(var i=0;i<7;i++){
		document.getElementsByClassName('buttonDays')[i].classList.add('sixDays');
		document.getElementsByClassName('buttonDays')[i].classList.remove('lessThenSixDay');
	}
	}
	for(i=0;i<7;i++){
		if(addDays[i]!=0){
			document.getElementById("AddDaysofWeek").innerHTML = "додати " + addDays[i] +"+";
			break;
		}
		if(i==6){
			document.getElementById("AddDaysofWeek").style.display = "none";
		}
	}
}
function checkDay(){
	for(var i=1;i<=7;i++){
		if(document.getElementById("check-"+i).checked){
			document.getElementById("buttonDay-"+i).style.opacity=1;
			document.getElementById("buttonDay-"+i).disabled = false;
		}
		else{
			document.getElementById("buttonDay-"+i).style.opacity=0.3;
			document.getElementById("buttonDay-"+i).disabled = true;
		}
	}
}

function confirmChangesInSchedule(){
	var amountOfDays = 0;
	for(var i=0;i<7;i++){
		if(document.getElementById("check-"+(i+1)).checked){
			document.getElementById('buttonDay-'+(i+1)).style.display = "inline-block";
			document.getElementById('check-'+(i+1)).style.display = "inline-block";
			document.getElementById("buttonDay-"+(i+1)).style.opacity=1;
			amountOfDays++;
		}
		else{
			
			document.getElementById("AddDaysofWeek").style.display = "block";
			switch(i){
				case 0:{ 
					addDays[i] = "понеділок";		
				}
				break;
				case 1:{ 
					addDays[i] = "вівторок";		
				}
				break;
				case 2:{ 
					addDays[i] = "середу";		
				}
				break;
				case 3:{ 
					addDays[i] = "четвер";		
				}
				break;
				case 4:{ 
					addDays[i] = "п'ятницю";		
				}
				break;
				case 5:{ 
					addDays[i] = "суботу";		
				}
				break;
				case 6:{ 
					addDays[i] = "неділю";		
				}
				break;
				
			}
			
			document.getElementById("buttonDay-"+(i+1)).style.display = "none";
			document.getElementById("check-"+(i+1)).style.display = "none";
			document.getElementById('check-'+(i+1)).checked = false;
			for(var k=0;k<5;k++){
				classOfEachDay[i][k]= 0;
			}
		}
	
	}

	for(i=0;i<7;i++){
		if(addDays[i]!=0){
			document.getElementById("check-"+(i+1)).style.display = "none";
			document.getElementById("AddDaysofWeek").innerHTML = "додати " + addDays[i] +"+";
			break;
		}
	}
	if(amountOfDays<5){
		for(var i=0;i<7;i++){
		document.getElementsByClassName('buttonDays')[i].classList.remove('sixDays');
		document.getElementsByClassName('buttonDays')[i].classList.add('lessThenSixDay');
	}
	}
		tempHours=  0;
		tempMinutes = 0;
		tempDay = 0;
		document.getElementById("TimeOFTimerD").innerHTML="00";
		document.getElementById("TimeOFTimerH").innerHTML="00";
		document.getElementById("TimeOFTimerM").innerHTML="00";
}
function dayShedule(n){
	day = n;
	
	document.getElementById("showEveryDay").innerHTML = daysOfWeek[day];
	document.getElementById("block-3").style.display = "block";
	document.getElementById("block-2").style.display = "none";
	for(var i=0;i<5;i++){
		if(classOfEachDay[day][i] == 0){
		
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
	if(classOfEachDay[day][clas] == 1){
		
		document.getElementById("everyDay-"+(clas+1)).style.opacity=0.6;
		document.getElementById("everyDay-"+(clas+1)).innerHTML = "+";
		classOfEachDay[day][clas] = 0;
	}
	else {
		classOfEachDay[day][clas] = 1;
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
	
	lengthOfBreak = document.getElementById("breakTime").value*1;
	lengthOfLongBreak = document.getElementById("longBreakTime").value*1;
	lengthOfClassH = document.getElementById("classTimeH").value*1;
	lengthOfClassM = document.getElementById("classTimeM").value*1;
	document.getElementById("breakTime").value = lengthOfBreak;
	document.getElementById("longBreakTime").value = lengthOfLongBreak;
	document.getElementById("classTimeH").value = lengthOfClassH;
	document.getElementById("classTimeM").value = lengthOfClassM;
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
function getStartParametrs(){

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
	
	for(var i =0;i<5;i++){
	
	document.getElementById("endOfClass-"+(i+1)).style.opacity = 0.7;
	if(i!=0){
		document.getElementById("startOfClass-"+(i+1)).style.opacity = 0.7;
	}
	
	}

	var t=new Date(); 
	var days=3; 
	var hours=10; 
	var minutes=25;
	var founded = false;
	
	if((document.getElementById("TimeOFTimerD").innerHTML=="00")&&(document.getElementById("TimeOFTimerH").innerHTML=="00")&&(document.getElementById("TimeOFTimerM").innerHTML=="00")){
	
	for(var k= 0;k<6;k++){
		var dayOfWeek = 0;
		dayOfWeek = days+k;
		if(dayOfWeek>6){	
				dayOfWeek-=7;
			}
		for(var i=0;i<5;i++){

			if(classOfEachDay[dayOfWeek][i]==0){
		
				continue;
			}
			else{
			if(tempDay==0){
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
			if(i==4){
				var nextClas=0;
			}
			else{
				var nextClas=i+1;
			}
			if(((hours==classLenghtH[i][1])&&(minutes>=classLenghtM[i][1]))||((hours==classLenghtH[nextClas][0])&&(minutes<=classLenghtM[nextClas][0]))||((hours>classLenghtH[i][1])&&(hours<classLenghtH[nextClas][0]))){
						document.getElementById("informationOfTime").innerHTML = "До початку " + (nextClas++) + " пари залишилось";
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
	
	setTimeout(getStartParametrs, 1000);	
}

function showTime(){

	
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
		tempMinutes--;
		if(tempMinutes==-1){
			tempMinutes+=59;
			tempHours--;
		}
		if(tempHours==-1){
			tempHours+=23;
			tempDay--;
		}
	

	
	setTimeout(showTime, 60000);
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
/*var t=new Date(); 
var hours=t.getHours(); 
var minuts=t.getMinutes();

}*/

