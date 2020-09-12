//These are the different plates that will increment;
var plate45 = 0; var plate35 = 0; var plate25 = 0; var plate10 = 0; var plate5 = 0; var plateHalf = 0;



//string error message

var error = "please input a increment greater than 0 and divisible by 5 as a weight number";
function plateMath(weight){
  /*this first if statement checks to see if the input weight is actually divisble by 5
  and if it is larger than
   else it will return the error */
  if(weight%5 === 0 && weight>0){
    //here the weight is converted by subtracting the weight of the bar and halved
    var n = (weight-45)/2;
    function fitFunc(n){
      if(n===0){
        console.log("weight is complete");
      }
      else if(n>=45){
        plate45++ && fitFunc(n-45);
        console.log(plate45);
      }
      else{
        console.log(plate45);
      }
    }
  }
  else{
    return error;
  }
}
let weight = prompt("What weight are you lifting today, baw?");
plateMath(weight);
