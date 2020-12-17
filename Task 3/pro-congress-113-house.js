var URL_GET = 'https://api.propublica.org/congress/v1/113/house/members.json';
var API_KEY = 'bstQMPJjcTZEeWFdAZe07vRAfmPEZUWNB9B9Dwb1';

fetch(URL_GET, {
    method: 'GET',
    headers: {
        'X-API-KEY': API_KEY
    }
}).then(function(response) {
    return response.json();
}).then(function(data) {
   app.members = data.results[0].members;
   glance();
   mostAndleast(); 
   mostMissedVotes();
   leasttMissedVotes();
}).catch(function(error) {
    console.log('Looks like there was a problem: \n', error);
});
