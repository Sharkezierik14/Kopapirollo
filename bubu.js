const game = () => {
    let WinScore = 0;
    let LoseScore = 0;
    let DrawScore = 0;
     
     
   
     const playGame = () => {
        const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorBtn = document.querySelector('.scissor');
        const playerOptions = [rockBtn,paperBtn,scissorBtn];
        const computerOptions = ['rock','paper','scissor']
         
        
         playerOptions.forEach(option => {
             option.addEventListener('click', function(){   
 
                 const choiceNumber = Math.floor(Math.random()*3);
                 const computerChoice = computerOptions[choiceNumber];
                 
                 winner(this.innerText,computerChoice)
             })
         })   
     }
 
 const winner = (player,computer) => {
     const DrawScoreBoard = document.querySelector('.DrawCount');
     const WinScoreBoard = document.querySelector('.WinCount');
     const LoseScoreBoard = document.querySelector('.LoseCount');
     const winner = document.querySelector('.Winner');
     const MyChoice = document.querySelector('.MyChoice');
     const OpponentChoice = document.querySelector('.OpponentChoice');

     player = player.toLowerCase();
     computer = computer.toLowerCase();
     
     if(player === computer){
        winner.textContent = 'Draw'
         DrawScore++;
         DrawScoreBoard.textContent = DrawScore;
         MyChoice.textContent = player;
         OpponentChoice.textContent = computer;
     }
     
     else if(player == 'rock'){
         if(computer == 'paper'){
             winner.textContent = 'You lose!';
             LoseScore++;
             LoseScoreBoard.textContent = LoseScore;
             MyChoice.textContent = player;
            OpponentChoice.textContent = computer;
 
         }else{

            winner.textContent = 'You win!';
             WinScore++;
             WinScoreBoard.textContent = WinScore;
             MyChoice.textContent = player;
             OpponentChoice.textContent = computer;
         }
     }
     else if(player == 'scissor'){
         if(computer == 'rock'){
            winner.textContent = 'You lose!';
             LoseScore++;
             LoseScoreBoard.textContent = LoseScore;
             MyChoice.textContent = player;
            OpponentChoice.textContent = computer;

         }else{
            winner.textContent = 'You win!';
             WinScore++;
             WinScoreBoard.textContent = WinScore;
             MyChoice.textContent = player;
            OpponentChoice.textContent = computer;
         }
     }
     else if(player == 'paper'){

         if(computer == 'scissor'){
            winner.textContent = 'You lose!';
             LoseScore++;
             LoseScoreBoard.textContent = LoseScore;
             MyChoice.textContent = player;
            OpponentChoice.textContent = computer;

         }else{
            winner.textContent = 'You win!';
             WinScore++;
             WinScoreBoard.textContent = WinScore;
             MyChoice.textContent = player;
             OpponentChoice.textContent = computer;
         }
     }
 }
 playGame();
 }
 game();
 