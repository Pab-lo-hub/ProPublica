var app = new Vue({
  el: '#app',
  data: {
    members: [],
    statistics: {
      "numberDemocrats": 0,
      "numberRepublicans": 0,
      "numberIndependents": 0,
      "voteswithpartyD": 0,
      "voteswithpartyR": 0,
      "voteswithID": 0,
      "mostloyal": [],
      "leastloyal": [],
      "mostMissedVotes": [],
      "leasttMissedVotes": [],
    },
  },
});


function glance() {

  var Democratobjects = 0;

  var Republicanobjects = 0;

  var Independentsobjects = 0;

  var voteswithpartyDObjects = 0;

  var voteswithpartyRObjects = 0;

  var voteswithIDobjects = 0;

  for (i = 0; i < app.members.length; i++) {
    if (app.members[i].party == "D") {
      Democratobjects = Democratobjects + 1;
      voteswithpartyDObjects = voteswithpartyDObjects + app.members[i].votes_with_party_pct;

    } else if (app.members[i].party == "R") {
      Republicanobjects = Republicanobjects + 1;
      voteswithpartyRObjects = voteswithpartyRObjects + app.members[i].votes_with_party_pct;

    } else if (app.members[i].party == "ID") {
      Independentsobjects = Independentsobjects + 1;
      voteswithIDobjects = voteswithIDobjects + app.members[i].votes_with_party_pct;
    }
  }
app.statistics.numberDemocrats = Democratobjects;
app.statistics.numberRepublicans = Republicanobjects;
app.statistics.numberIndependents = Independentsobjects;
app.statistics.voteswithpartyD = voteswithpartyDObjects / Democratobjects;
app.statistics.voteswithpartyR = voteswithpartyRObjects / Republicanobjects;
app.statistics.voteswithID = voteswithIDobjects / Independentsobjects;
}



/*
document.getElementById("tablebnumberofrepsdemocrat").innerHTML =
  statistics.numberDemocrats = Democratobjects;
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
*/



function mostAndleast () {
var totalobjects = app.members.length;
var calculatepercent = Math.round(totalobjects * 10 / 100);

console.log(calculatepercent);

var sortedmembers = app.members.filter(Boolean).sort((a, b) => b.votes_with_party_pct - a.votes_with_party_pct);
app.statistics.mostloyal = sortedmembers.filter(Boolean).slice(0, calculatepercent);

var sortedmembers = app.members.filter(Boolean).sort((a, b) => a.votes_with_party_pct - b.votes_with_party_pct);
app.statistics.leastloyal = sortedmembers.filter(Boolean).slice(0, calculatepercent);

var sortedmembers = app.members.filter(Boolean).sort((a, b) => a.missed_votes_pct - b.missed_votes_pct);
app.statistics.mostMissedVotes = sortedmembers.filter(Boolean).slice(0, calculatepercent);

var sortedmembers = app.members.filter(Boolean).sort((a, b) => b.missed_votes_pct - a.missed_votes_pct);
app.statistics.leasttMissedVotes = sortedmembers.filter(Boolean).slice(0, calculatepercent);



}

/*

var sortedmembers2 = app.members.filter(Boolean).sort((a, b) => b.missed_votes - a.missed_votes);
var sortedslicedmembers4 = app.members.filter(Boolean).slice(0, calculatepercent);
console.log(sortedslicedmembers4);

var sortedmembers2 = app.members.filter(Boolean).sort((a, b) => b.missed_votes_pct - a.missed_votes_pct);
var sortedslicedmembers5 = app.members.filter(Boolean).slice(0, calculatepercent);
console.log(sortedslicedmembers5);*/




/*


function leastengaged(value) {
  for (var i = 0; i < value.length; i++) {
    console.log(sortedslicedmembers4[i].first_name)
    document.getElementById("tablebody2").innerHTML +=
      "<tr>" +

      "<td><a href=value[i].url>" + value[i].first_name + " " + value[i].last_name + "<a/></td>" +

      "<td>" + value[i].missed_votes + "</td>" +

      "<td>" + value[i].missed_votes_pct + "</td>" +

      "</tr>"
  }
}
leastengaged(sortedslicedmembers4);


function mostengaged(value) {
  for (var i = 0; i < value.length; i++) {
    console.log(sortedslicedmembers2[i].first_name)
    document.getElementById("tablebody3").innerHTML +=
      "<tr>" +

      "<td><a href=value[i].url>" + value[i].first_name + " " + value[i].last_name + "<a/></td>" +

      "<td>" + value[i].missed_votes + "</td>" +

      "<td>" + value[i].missed_votes_pct + "</td>" +

      "</tr>"
  }
}
mostengaged(sortedslicedmembers2);


*/
