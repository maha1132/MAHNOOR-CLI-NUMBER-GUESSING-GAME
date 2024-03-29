#! /usr/bin/env node

import inquirer from "inquirer";

// 1) computer will generate a rendom number ; done
//2) user input for guessing number ;done
//3) compare user input with computer genrated number;done

const randomNumber = Math.floor(Math.random()*10+1 );



const answers = await inquirer.prompt([
    {
        name: "userguessedNumber",
        type: "number",
        message:"please guess a number between 1-10:",
    },
]);

if(answers.userguessedNumber === randomNumber ){
    console.log("congratulations! you guessed right number.")
}else{
  console.log("sorry! you guessed wrong number ") 
};
    
