const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (
      userInput === "rock" ||
      userInput === "paper" ||
      userInput === "scissors" ||
      userInput === 'bomb'
    ) {
      return userInput;
    } else {
      console.log("You need to choose between rock, paper or scissors!");
    }
  };
  
  const getComputerChoice = () => {
    const number = Math.floor(Math.random() * 3);
    switch (number) {
      case 0:
        return 'rock';
        break;
      case 1:
        return 'paper';
        break;
      case 2:
        return 'scissors';
        break;
    }
  };
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice){
      return "It's a tie!";
    }
    if (userChoice === 'rock'){
      if (computerChoice === 'paper'){
        return 'Computer Wins!';
      } else {
        return 'User Wins!'
      }
    }
    if (userChoice === 'paper'){
      if (computerChoice === 'scissors'){
        return 'Computer Wins!';
      } else {
        return 'User Wins!';
      }
    }
    if (userChoice === 'scissors'){
      if (computerChoice === 'rock'){
        return 'Computer Wins!';
      } else {
        return 'User Wins!';
      }
    }
    if (userChoice === 'bomb'){
      return 'User Wins! With no question! ;)';
    }
  }
  
  function playGame(){
    const userChoice = getUserChoice('bomb');
    console.log('Your choice is: '+userChoice);
    const computerChoice = getComputerChoice();
    console.log('The computer choice is: '+computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  }
  
  playGame();