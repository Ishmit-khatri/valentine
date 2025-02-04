let noCount = 0;
let noMessages = ["Are you sure? 😢", "Really sure? 💔", "Think again! 😭", "Last chance! 😭", "You can't say no! 😜"];

function noClicked() {
    if (noCount < noMessages.length - 1) {
        document.getElementById('noBtn').innerText = noMessages[noCount];
        noCount++;
    } else {
        document.getElementById('noBtn').innerText = "You can't say no! 😜";
        document.getElementById('noBtn').style.display = 'none';
    }
}

function yesClicked() {
    document.querySelector('.buttons').style.display = 'none';
    document.querySelector('h1').style.display = 'none';
    document.querySelector('img').style.display = 'none';
    document.getElementById('yesMessage').classList.remove('hidden');
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 2 + 3) + 's'; 
    document.querySelector('.hearts').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4000);
}

setInterval(createHeart, 500);
