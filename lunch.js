/*
 * Modify the contents of the function below, such that:
 *
 * NOT hungry --> "get back to work".
 * HUNGRY: 
 * 1. time < 20 min -> "pick something up and eat it in the lab" 
 * 2. 20 min <= time < 30 min --> "try a place nearby"
 * 3. time > 30 min --> "we're in a bootcamp! You should reconsider how much time you actually have to spare".
 *
 * hungry is a Boolean, representing if you're hungry or not.
 * availableTime is a Number representing the time you have for lunch,
 * in minutes.
 */

const whatToDoForLunch = function(hungry, availableTime) {
  console.log("I don't know what to do!");
 
  if (hungry === true){
    if (availableTime < 20){
      console.log("Pick up and eat something in the lab.")
    } else if (20 <= availableTime && availableTime < 30) {
      console.log("Try a place nearby.")
    } else {
      console.log("We're in a bootcamp! You should reconsider how much time you actually have to spare.")
    };
    
  } else if (hungry === false){
    console.log("If you are not hungry then get back to work!")
  };

}


/*
 * This is some test runner code that's simply calling our whatToDoForLunch function
 * defined above to verify we're making the right decisions. Do not modify it!
 */

console.log("I'm hungry and I have 20 minutes for lunch.");
whatToDoForLunch(true, 20);
console.log("---");

console.log("I'm hungry and I have 50 minutes for lunch.");
whatToDoForLunch(true, 50);
console.log("---");

console.log("I'm not hungry and I have 30 minutes for lunch.");
whatToDoForLunch(false, 30);
console.log("---");

console.log("I'm hungry and I have 15 minutes for lunch.");
whatToDoForLunch(true, 15);