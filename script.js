const mountainImages = [
    'Mountain1.jpg',  
    'Mountain2.jpg',
    'Mountain3.jpg',
    'Mountain4.jpg',
    'Mountain5.jpg'
];


function changeBackground(){
    const randomIndex = Math.floor(Math.random() * mountainImages.length); 
    const randomImage = mountainImages[randomIndex]; // Random image from the array


document.body.style.backgroundImage=`url(${randomImage})`
document.body.style.backgroundSize="cover";
document.body.style.backgroundPosition = 'center';
}

changeBackground();
setInterval(changeBackground,5000);


// to make timer 

let timeLeft=25*60;
let timerInterval;
let timer=document.querySelector('#timer');
let startBtn=document.querySelector('#startBtn');


function formatTime(seconds){
const minutes=Math.floor(seconds/60);// 60 se divide minutes
const secondLeft=seconds%60  //remainder is secondsleft
return `${minutes < 10 ? '0' : ''}${minutes}:${secondLeft < 10 ? '0' : ''}${secondLeft}`;
     
}

function startTimer(){
    timerInterval=setInterval(()=>{
        if(timeLeft<=0){
            clearInterval(timerInterval);
            alert('your time is up ');
            return;
        }else{
            timeLeft--;
            timer.textContent=formatTime(timeLeft);
        }

    },1000);
}

startBtn.addEventListener('click', function() {
    startBtn.disabled = true; // Disable the start button once clicked
    startTimer(); // Start the timer
});

const backgroundMusic = document.getElementById('background-music');

    // Function to play music when the page loads
    window.onload = function() {
        backgroundMusic.play(); 
    };