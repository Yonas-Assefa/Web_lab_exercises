
//this is a function expression whivh calculate the BMI
let calcBMI = function(weight, height){
      let Bmi_value = weight/Math.pow(height,2)
      Bmi_value = Bmi_value.toFixed(3);
      return Bmi_value;
};


//this function decide the body status based on the calculated BMI
function bodyStatus(BMI_holder){
    if(BMI_holder<18.5) console.log("you are underweight!!");
    else if(BMI_holder>=18.5 && BMI_holder<24.9) console.log("you are normal!!");
    else if(BMI_holder>=24.9 && BMI_holder<29.9) console.log("you are overwight!!");
    else if(BMI_holder>=29.9) console.log("you are obese!!");
}
    

//this is the main iife 
(function(){
    console.log("Welcome to the Body Mass Index(BMI) calculater")
    let weight = prompt("please enter the your weight in Kg: ");
    let height = prompt("please enter the your height in meters: ");
    console.log("your BMI is: " + calcBMI(weight,height));
    let BMI_holder = calcBMI(weight,height) ;

    bodyStatus(BMI_holder);

   
    


    
})()



    


