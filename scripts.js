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

function win(){
    document.getElementById("thisround").innerHTML = "WIN!"
    let score = parseInt(document.getElementById("winlose").innerHTML)
    score++;
    document.getElementById("winlose").innerHTML = score
    setTimeout(() => {
        reset()
      }, 2000)
}

function lose(){
    document.getElementById("thisround").innerHTML = "LOSE!"
    setTimeout(() => {
        reset()
      }, 2000)
}

function tie(){
    document.getElementById("thisround").innerHTML = "TIE!"
    setTimeout(() => {
        reset()
      }, 2000)
}

function reset(){
    const rock = document.getElementById("rock")
    const paper = document.getElementById("paper")
    const scissors = document.getElementById("scissors")
    rock.classList.remove("opaque")
    scissors.classList.remove("opaque")
    paper.classList.remove("opaque")
}