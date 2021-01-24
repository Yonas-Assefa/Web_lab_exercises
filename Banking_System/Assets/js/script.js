let personal_account = {
    name:"",
    deposite:0,
    Account_ID:0
}
//function to deposite
function deposite(amount){
    if(amount >=10){
        personal_account.deposite = Number.parseFloat(personal_account.deposite) + Number.parseFloat(amount);
        console.log(typeof personal_account.deposite)
        console.log("your operation has been completed successfully. Your balance is: " + personal_account.deposite + "birr");
    }
    else console.log("sorry! the minimum amount to deposite is 10 birr. Try again");
       

}


//function to withdraw
function withdraw(amount){
    if(personal_account.deposite >=amount){
        if(amount >=5 && amount <=5000){
            personal_account.deposite = personal_account.deposite - Number.parseFloat(amount);
            console.log("your operation has been completed successfully. Your balance is: " + personal_account.deposite + "birr");
        }
        else console.log("sorry! the you can only withdraw between 50birr and 5000birr  Try again");
    } else console.log("sorry! your balance is insufficient. try again")
    

}


//function to display balance
function balance(){
    console.log("Your account balance is: " + personal_account.deposite + "birr");
}


//function to transfer
function transfer(amount, reciver_ID){
    console.log(personal_account.deposite);
    if(personal_account.deposite >= amount){
        let intermidate = personal_account.deposite - amount;
        console.log(amount + " birr has benn transferd to a  bank account " + reciver_ID + " successfully. your remaining balance is: " + intermidate);
    } else console.log("sorry you dont have enough balance. try again.");
}


//function to generate a random account number
function account_number() { 
    var minm = 10000; 
    var maxm = 99999; 
    return Account_num = Math.floor(Math 
    .random() * (maxm - minm + 1)) + minm; 
}

//the main iife function
(function(){
    let amount;
    let loop_controler= true;//loop to control the whole program
    while(loop_controler){

        console.log("Welcome to our bank");
        console.log("Please press-----1---to create an account");
        console.log("                 2---if you already have an account");
        let user_type = prompt("enter your choice here: ");
        if(user_type ==1){
                console.log("welcome. please enter your name: ")
                personal_account.name = prompt("enter here: ");
                console.log("enter initial amount of moeny you would like to deposite: ");
                personal_account.deposite = prompt("enter here: ");
                console.log("Thank you for banking with us Your account is created and  your acount number is:" + account_number()) ;
                personal_account.Account_ID = account_number();
                console.log(personal_account);
        }
        else if(user_type ==2){
            console.log("Please press-----1---to withdraw");
            console.log("                 2---to deposite");
            console.log("                 3---to check your balance");
            console.log("                 4---to transfer");
            let operation_type = prompt("enter your choice here: ");
            if(operation_type==1){
                console.log("enter the amount you would like to withdraw: ")
                amount = prompt("enter here");
                withdraw(amount);
            }
    
            if(operation_type==2){
                console.log("enter the amount you would like to deposite: ")
                amount = prompt("enter here");
                deposite(amount);
            }
    
            if(operation_type==3){
                balance();
                
            }
    
            if(operation_type==4){
                console.log("enter the amount you would like to transfer: ")
                amount = prompt("enter here");
                console.log("enter the Id of the reciver account: ");
                reciver_ID =prompt("enter here");
                transfer(amount, reciver_ID);
    
            } else console.log("you have entered a wwrong input!. try again")
    
    
        }


        console.log("press x to terminate and any key to continue: ")
        let value = prompt("enter here")
        if(value=='x') {
            console.log("thank you for using us. visit us again. Goodbay")
            loop_controler = false;
        }
    }

}
)()