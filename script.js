/*  country.name, '.' using Dot Notation to access data */

let myRunningClub = {

  uklocation: "London",
  annualMembershipCost: 100.00,
  locationOfRuns: 10,
  numberOfMembers: 17,
  memberNamesandTimes: {
    john: 15.231,
    sally: 15.235,
    lisa: 16.12,
    mark: 16.14,
    joe: 16.25,
    harry: 16.30

  } 


};

myRunningClub.uklocation = "ireland";  /*usng dot notation, this is updating the object value*/
console.log(myRunningClub.uklocation); /*using dot notation to get the objects value*/

console.log (myRunningClub.memberNamesandTimes.john); /*using dot natation twice to get inner object */