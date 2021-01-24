function addition(){

    item_list = [];//an array to hold the enterd numbers
    console.log("enter the numbers to be added. press x when you finish:");
    var value;
    var indicator =1;
    let sum=0;

    //this loop iterate and add the entered numbers to our array
    while(value !='x'){
        value =prompt("enter num " + indicator);
        if(value != 'x') item_list[indicator - 1] = value;
        indicator =indicator+1;
        
    }

    //this one iterate in our array and add the numbers
    item_list.forEach(
        function(number){
        sum= sum + Number.parseFloat(number) ;

        }
    )
    //print the sum result to the console
    console.log("the sum is: " + sum);
}



//function for subtraction
function subtraction(){
    let num1 = prompt("enter the main number: ");
    let num2 = prompt("enter the subtract number");
    let diffrence = num1-num2;
    console.log("the answer is; " + diffrence);
}




//function for multiplication
function multiplication(){

    item_list = [];//an array to hold the enterd numbers
    console.log("enter the numbers to be multiplied. press x when you finish:");
    var value;
    var indicator =1;
    let multiply=1;

    //this loop iterate and add the entered numbers to our array
    while(value !='x'){
        value =prompt("enter num " + indicator);
        if(value != 'x') item_list[indicator - 1] = value;
        indicator =indicator+1;
        
    }

    //this one iterate in our array and multiply the numbers
    item_list.forEach(
        function(number){
            multiply= multiply * Number.parseFloat(number) ;

        }
    )
    //print the product result to the console
    console.log("the product is: " + multiply);
}




//function for division
function divide(){
    let num1 = prompt("enter the devidend number: ");
    let num2 = prompt("enter a non-zero devisor number");

    if(num2!=0){
        let quotient = num1/num2;
        console.log("the answer is: " + quotient);
    }
    else{
        console.log("number divison by zero is not possible")
    }
}




//this is the main iife function
(function(){

    let loopItrator = true;
    while(loopItrator){
        console.log("wellcome to the simple calculater:");
        console.log("please choose the operation you would like to perform: ");
        console.log("Press -------1---for addition");
        console.log("             2---for subtraction");
        console.log("             3--for multiplication");
        console.log("             4---for division");
        let operationChoice = window.prompt("enter here: ");

        if(operationChoice==1) addition()
        
        else if(operationChoice==2)subtraction();

        else if(operationChoice==3) multiplication();

        else if(operationChoice==4) divide();
        else console.log("you haven't entered the correct choice!!")

        loopItrator = prompt("press x to exit the program and any key to continue!!")
        if(loopItrator=='x'){
            console.log("thank you for using this program.GoodBye!!!!!") 
            loopItrator = false
         }


    }
    
})()