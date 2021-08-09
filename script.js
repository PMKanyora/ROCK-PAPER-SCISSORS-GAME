// controller / ultimate function

const rpsGame = (yourChoice) => {
    console.log(yourChoice);

    let humanChoice, botChoice;
    humanChoice = yourChoice.id;
    //console.log(humanChoice);

    botChoice = numberChoice(randBotInt());
    console.log(botChoice);

    results = decideWinner(humanChoice, botChoice); // [0,1] human loss | bot win 
    console.log(results);

    message = finalMessage(results);
    console.log(message);

    rpsFrontEnd(yourChoice.id, botChoice, message);

    
}

const randBotInt = () => {
    return Math.floor(Math.random() * 3);
}
 
const numberChoice = (number) => {
    return ['rock', 'paper', 'scissors'][number];
}

const decideWinner = (humanChoice, computerChoice) => {
    let rpsDatabase = {
        'rock' : {'rock': 0.5, 'paper': 0, 'scissors' : 1},
        'paper' : {'rock': 1, 'paper': 0.5, 'scissors': 0 },
        'scissors': {'rock': 0, 'paper': 1, 'scissors': 0.5}
    }

    let humanScore = rpsDatabase[humanChoice][computerChoice];
    let computerScore = rpsDatabase[computerChoice][humanChoice];

    return [humanScore, computerScore];
}

const finalMessage = ([humanScore, computerScore]) => {
    if(humanScore === 0){
        return {'message' : 'You Lost', 'color' : 'red'};
    }
    else if(humanScore === 0.5) {
        return {'message': 'You drew', 'color' : 'yellow'};
    }
    else if(humanScore === 1){
        return {'message': 'You won', 'color' : 'green'}
    }
}

const rpsFrontEnd = (humanImageChoice, botImageChoice, finalMessage) => {
    let imagesDatabase = {
        'rock' : document.getElementById('rock').src,
        'paper' : document.getElementById('paper').src,
        'scissors' : document.getElementById('scissors').src
    };

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    let humanDiv = document.createElement('div');
    let botDiv = document.createElement('div');
    let messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src =' "+imagesDatabase[humanImageChoice] +" ' width = 150 height = 150 />";
    messageDiv.innerHTML = "<h1 style = ' color : "+finalMessage['color']+"; font-size = 30px padding = 30px'> "+finalMessage['message']+" </h1>";
    botDiv.innerHTML = "<img src =' "+imagesDatabase[botImageChoice] +" ' width = 150 height = 150 />";

    document.getElementById('flex-box-div').appendChild(humanDiv);
    document.getElementById('flex-box-div').appendChild(messageDiv);
    document.getElementById('flex-box-div').appendChild(botDiv);
 



}