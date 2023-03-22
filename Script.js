let WinScore = 0;
const img = document.querySelector('.rock');
img.addEventListener('click', () => {
    const WinScoreBoard = document.querySelector('.WinCount');
    WinScore++;
    WinScoreBoard.textContent = WinScore;
});