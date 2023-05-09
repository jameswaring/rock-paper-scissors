function getComputerChoice(userChoice){
    items = ["rock.png", "paper.png", "scissors.png"]
    let randomSelection = items[Math.floor(Math.random()*items.length)];
    const compPic = document.getElementById("compPic")
    compPic.src = randomSelection
    strippedSelection = randomSelection.replace(/\.[^/.]+$/, "")
    console.log(strippedSelection)
    if(strippedSelection == userChoice){
        tie()
    }
    else if(strippedSelection == "rock" && userChoice == "paper"){
        win()
    }
    else if(strippedSelection == "paper" && userChoice == "rock"){
        lose()
    }
    else if(strippedSelection == "scissors" && userChoice == "paper"){
        lose()
    }
    else if(strippedSelection == "scissors" && userChoice == "rock"){
        win()
    }
    else if(strippedSelection == "rock" && userChoice == "scissors"){
        lose()
    }
    else if(strippedSelection == "paper" && userChoice == "rock"){
        lose()
    }
    else if(strippedSelection == "paper" && userChoice == "scissors"){
        win()
    }
    setTimeout(() => {
        compPic.src = ""
      }, 2000)
}

function rockSelect(){
    const paper = document.getElementById("paper")
    paper.classList.add("opaque")
    const scissors = document.getElementById("scissors")
    scissors.classList.add("opaque")
    getComputerChoice("rock")
    setTimeout(() => {
        reset()
      }, 2000)
}

function scissorsSelect(){
    const paper = document.getElementById("paper")
    paper.classList.add("opaque")
    const rock = document.getElementById("rock")
    rock.classList.add("opaque")
    getComputerChoice("scissors")
    setTimeout(() => {
        reset()
      }, 2000)
}

function paperSelect(){
    const rock = document.getElementById("rock")
    rock.classList.add("opaque")
    const scissors = document.getElementById("scissors")
    scissors.classList.add("opaque")
    getComputerChoice("paper")
    setTimeout(() => {
        reset()
      }, 2000)
}

function win(){
    document.getElementById("thisround").innerHTML = "WIN!"
    let score = parseInt(document.getElementById("scoreLabel").innerHTML)
    score++;
    document.getElementById("scoreLabel").innerHTML = score
}

function lose(){
    document.getElementById("thisround").innerHTML = "LOSE!"
}

function tie(){
    document.getElementById("thisround").innerHTML = "TIE!"
}

function reset(){
    const rock = document.getElementById("rock")
    const paper = document.getElementById("paper")
    const scissors = document.getElementById("scissors")
    rock.classList.remove("opaque")
    scissors.classList.remove("opaque")
    paper.classList.remove("opaque")
}