function addition(){
    item_list = [];
    console.log("enter the numbers to be added. press x when you finish:");
    var value;
    var indicator =1;
    let sum=0;
    console.log(typeof sum);
    while(value !='x'){
        value =prompt("enter num " + indicator);
        if(value != 'x') item_list[indicator - 1] = value;
        indicator =indicator+1;
        
    }
    console.log(item_list)

    item_list.forEach(
        function(number){
        sum= sum + Number.parseFloat(number) ;

        }
    )
    console.log(sum);
}




(function(){
    console.log("wellcome to the simple calculater:");
    console.log("please choose the operation you would like to perform: ");
    console.log("Press -------1---for addition");
    console.log("             2---for subtraction");
    console.log("             3--for multiplication");
    console.log("             4---for division");
    let operationChoice = window.prompt("enter here: ");
    if(operationChoice==1){
        addition()
    }
})()