
let score = JSON.parse(localStorage.getItem('score'))||{
    wins:0,
    loses:0,
    ties:0
}
document.querySelector('.js-score').innerHTML=`wins:${score.wins} loses:${score.loses} tie:${ score.ties}`;

function reset(){
    score.wins=0;
    score.loses=0;
    score.ties=0;
    document.querySelector('.js-score').innerHTML=`wins:${score.wins} loses:${score.loses} tie:${ score.ties}`


}
function getComputerMove(){
    let computerMove='';
    let randomNumber = Math.random();
    if(randomNumber>0 && randomNumber<=1/3){
        computerMove='rock';
    }
    else if(randomNumber>1/3&&randomNumber<=2/3){
        computerMove='paper';
    }
    else if(randomNumber>2/3&&randomNumber<=1){
        computerMove='scissors';
    }
    return computerMove;

}
function playGame(playMove){
    let computerMove = getComputerMove();
    let result='';
    if(playMove===computerMove){
        result='tie';
    }
    else if(playMove==='paper'&& computerMove==='rock'
            || playMove==='rock'&& computerMove==='scissors'
                ||playMove==='scissors' && computerMove ==='paper'){
        result='win';
    }
    else if(computerMove==='paper'&& playMove==='rock'
                || computerMove==='rock'&& playMove==='scissors'
                    ||computerMove==='scissors' && playMove ==='paper'){
                        result='lose';
    }
    document.querySelector('.js-move').innerHTML=`You
    <img class="move-icon" src="../images/${playMove}.png" alt="" />
    <img class="move-icon" src="../images/${computerMove}.png" alt="" />
    Computer`
    document.querySelector('.js-result').innerHTML=`${result}.`
    updateScore(result);
    

}
function updateScore(result){
    if(result==='win'){
        score.wins+=1;
    }
    else if(result==='lose'){
        score.loses+=1;
    }
    else if(result==='tie'){
        score.ties+=1;
    }
    localStorage.setItem('score',JSON.stringify(score));
    document.querySelector('.js-score').innerHTML=`wins:${score.wins} loses:${score.loses} tie:${ score.ties}`
}