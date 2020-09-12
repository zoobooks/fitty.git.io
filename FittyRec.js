/*
* Theses function determine the types of plates one must put on a bar based upon an input weight
*/

//These are the different plates that will increment;
var plate45 = 0; var plate35 = 0; var plate25 = 0; var plate10 = 0; var plate5 = 0; var plateHalf = 0;

//This is the logic that will recursively talley which types of plates will be put onto the bar
function recWeight(n){
  //once the number reaches 0 it returns a talley of the plates that were counted based upon what was
  //able to be subtracted
  if(n===0){
    console.log(plate45 + " " + plate35 + " " + plate25 + " " + plate10 + " " + plate5 + " " + plateHalf);
  }
  else if(n >= 45){
    plate45++;
    return recWeight(n - 45);
  }
  else if(n >= 35){
    plate35++;
    return recWeight(n - 35);
  }
  else if(n >= 25){
    plate25++;
    return recWeight(n - 25);
  }
  else if(n >= 10){
    plate10++;
    return recWeight(n - 10);
  }
  else if(n >= 5){
    plate5++;
    return recWeight(n - 5);
  }
  else{
    plateHalf++;
    return recWeight(n - 2.5);
  }
}

function plateMath(weight){
  /*this first if statement checks to see if the input weight is actually divisble by 5
  and if it is larger than else it will return the error */
  let error = "please input a number greater than 0 and divisible by 5 for your lifts baw";
  if(weight%5 === 0 && weight>0){
    //here the weight is converted by subtracting the weight of the bar and halved
    console.log("weight entered: " + weight);
    let n = (weight-45)/2; 
    recWeight(n);
    console.log("The weight you're lifting today brah is "+plate45+ " 45 lb plate(s), "+plate35+" 35 lb plate(s), "+plate25+" 25 lb plate(s), "+plate10+" 10 lb plate(s), "+plate5+ " 5 lb plates, and "+plateHalf+" cookies, brah.." );
  }
  else{
    return error;
  }
}

let weight = prompt("What weight are you lifting today, baw?");
plateMath(weight);
