// Soccer manager activity
//Create the function getPlayingStyle, return the team you think it has the best playing style.

//Run the code in the console to find out what's the secondTeam final playing style.

/////////////////////////
//your code here
function getPlayingStyle(){
    var firstteam=[3,3,1,3];
    var secondTeam=firstteam;
    firstteam=[2,6,3,1];
    return(secondTeam);
}

/////////////////////////
//Uncomment this line to see the results in the browser console
console.log("results = " + getPlayingStyle())

/////////////////////////
//don't change the code under this line
if (typeof module !== 'undefined') {
  module.exports = getPlayingStyle;
}

