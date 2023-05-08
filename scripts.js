function getComputerChoice(){
    items = ["Rock", "Paper", "Scissors"]
    let randomSelection = items[Math.floor(Math.random()*items.length)];
    return randomSelection
}

function getUserChoice(){
    items = ["Rock", "Paper", "Scissors"]
    userInput = prompt()
    if(items.includes(userInput) == true){
        console.log("Found")
    }
}

getUserChoice()