let boxes=document.querySelectorAll("button");
let message=document.querySelector(".message");
let player=document.querySelector(".player");
let bot=document.querySelector(".bot");
let win=true;
let clickSound=new Audio("sound/sound.mp3");

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        clickSound.currentTime = 0;
        clickSound.play();
        const playerMove=box.id;
        const moves=["rock","paper","scissors"];
        const botMove=moves[Math.floor(Math.random()*moves.length)];
        checkWinner(playerMove,botMove);
    });
});
let i=0;
let j=0;
checkWinner=(playerMove,botMove)=>{
    if(playerMove==botMove)
        message.innerText="It's a Tie";
    else if (
    (playerMove === "rock" && botMove === "scissors") ||
    (playerMove === "paper" && botMove === "rock") ||
    (playerMove === "scissors" && botMove === "paper")
    ) {
        i++;
        message.innerText="You Win!!";
        player.innerText=i+" Player";
    } 
    else {
        j++;
        message.innerText="Bot Wins :(";
        bot.innerText=j+" Bot";
    }
}