function getComputerChoice(){
    items = ["Rock", "Paper", "Scissors"]
    let randomSelection = items[Math.floor(Math.random()*items.length)];
    return randomSelection
}

function rockSelect(){
    const paper = document.getElementById("paper")
    paper.classList.add("opaque")
    const scissors = document.getElementById("scissors")
    scissors.classList.add("opaque")
}