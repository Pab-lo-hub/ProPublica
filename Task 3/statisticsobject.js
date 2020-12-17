

var Democratobjects = 0;

var Republicanobjects = 0;

var Independentsobjects = 0;

var voteswithpartyDObjects = 0;

var voteswithpartyRObjects = 0;

var voteswithIDobjects = 0;

for (i = 0; i < members.length; i++) {
    if (members[i].party == "D") {
        Democratobjects = Democratobjects + 1;
        voteswithpartyDObjects = voteswithpartyDObjects + members[i].votes_with_party_pct;
        
        
    }
    else if (members[i].party == "R") {
        Republicanobjects = Republicanobjects + 1;
        voteswithpartyRObjects = voteswithpartyRObjects + members[i].votes_with_party_pct;
        
    }
    else if (members[i].party == "ID") {
        Independentsobjects = Independentsobjects + 1;
        voteswithIDobjects = voteswithIDobjects + members[i].votes_with_party_pct;    
    }    
}

document.getElementById("tablebnumberofrepsdemocrat").innerHTML = 
statistics.numberDemocrats =  Democratobjects;
document.getElementById("tablebnumberofrepsrepublican").innerHTML = 
statistics.numberRepublicans = Republicanobjects;
document.getElementById("tablenumberofrepsindependent").innerHTML =
statistics.numberIndependents = Independentsobjects;
document.getElementById("tablepercentofdemocrat").innerHTML = 
statistics.voteswithpartyD = voteswithpartyDObjects / Democratobjects;
document.getElementById("tablepercentofrepublican").innerHTML =
statistics.voteswithpartyR = voteswithpartyRObjects / Republicanobjects;
document.getElementById("tablepercentofindependent").innerHTML =
statistics.voteswithID = 0;


console.log(statistics);        

var totalobjects = members.length;
var calculatepercent = Math.round(totalobjects * 10 / 100);
console.log(calculatepercent);
var sortedmembers = members.filter(Boolean).sort((a, b) => a.votes_with_party_pct - b.votes_with_party_pct);
var sortedslicedmembers = members.filter(Boolean).slice(0, calculatepercent);
console.log(sortedslicedmembers);


var sortedmembers = members.filter(Boolean).sort((a, b) => a.missed_votes - b.missed_votes);
var sortedslicedmembers2 = members.filter(Boolean).slice(0, calculatepercent);
console.log(sortedslicedmembers2);

var sortedmembers = members.filter(Boolean).sort((a, b) => a.missed_votes_pct - b.missed_votes_pct);
var sortedslicedmembers3 = members.filter(Boolean).slice(0, calculatepercent);
console.log(sortedslicedmembers3);

var sortedmembers2 = members.filter(Boolean).sort((a, b) => b.missed_votes - a.missed_votes);
var sortedslicedmembers4 = members.filter(Boolean).slice(0, calculatepercent);
console.log(sortedslicedmembers4);

var sortedmembers2 = members.filter(Boolean).sort((a, b) => b.missed_votes_pct - a.missed_votes_pct);
var sortedslicedmembers5 = members.filter(Boolean).slice(0, calculatepercent);
console.log(sortedslicedmembers5);





function leastengaged (value){
    for (var i = 0; i < value.length; i++){
    console.log(sortedslicedmembers4[i].first_name)
    document.getElementById("tablebody2").innerHTML += 
    "<tr>" + 

    "<td><a href=value[i].url>" + value[i].first_name +" "+ value[i].last_name+ "<a/></td>" + 

    "<td>" + value[i].missed_votes+ "</td>" +  

    "<td>" + value[i].missed_votes_pct+ "</td>" + 

    "</tr>" 
}    
} 
leastengaged(sortedslicedmembers4);


function mostengaged (value){
    for (var i = 0; i < value.length; i++){
    console.log(sortedslicedmembers2[i].first_name)
    document.getElementById("tablebody3").innerHTML += 
    "<tr>" + 

    "<td><a href=value[i].url>" + value[i].first_name +" "+ value[i].last_name+ "<a/></td>" + 

    "<td>" + value[i].missed_votes+ "</td>" +  

    "<td>" + value[i].missed_votes_pct+ "</td>" + 

    "</tr>" 
}    
} 
mostengaged(sortedslicedmembers2);