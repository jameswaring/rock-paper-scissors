function getComputerChoice(){
    items = ["rock.png", "paper.png", "scissors.png"]
    let randomSelection = items[Math.floor(Math.random()*items.length)];
    const compPic = document.getElementById("compPic")
    compPic.src = randomSelection
}

function rockSelect(){
    const paper = document.getElementById("paper")
    paper.classList.add("opaque")
    const scissors = document.getElementById("scissors")
    scissors.classList.add("opaque")
    getComputerChoice("rock")
}

function scissorsSelect(){
    const paper = document.getElementById("paper")
    paper.classList.add("opaque")
    const rock = document.getElementById("rock")
    rock.classList.add("opaque")
    getComputerChoice("scissors")
}

function paperSelect(){
    const rock = document.getElementById("rock")
    rock.classList.add("opaque")
    const scissors = document.getElementById("scissors")
    scissors.classList.add("opaque")
    getComputerChoice("paper")
    
}