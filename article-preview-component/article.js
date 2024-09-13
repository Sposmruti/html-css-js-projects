const shareButton = document.querySelector('.share button');
const socialContainer = document.querySelector('.social');
const shareIcon = document.querySelector('.share button img');

shareButton.addEventListener('click' , () =>{
    if (socialContainer.style.display === 'none' || socialContainer.style.display === '') {
        socialContainer.style.display = 'flex';
        shareButton.style.backgroundColor = 'hsl(217, 19%, 35%)';
        shareIcon.style.filter = 'brightness(0) invert(1)';
    } else {
        socialContainer.style.display = 'none';
        shareButton.style.backgroundColor = 'hsl(210, 46%, 95%)';
        shareIcon.style.filter = 'none';
    }
})
