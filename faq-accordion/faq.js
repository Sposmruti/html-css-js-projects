document.querySelectorAll('.qa-container').forEach(question => {
    question.addEventListener('click' , () => {
        const isActive = question.classList.toggle('active');
        const icon = question.querySelector('.faq-icon');
        icon.src = isActive ? 'icon/icon-minus.svg' : 'icon/icon-plus.svg';
        icon.alt = isActive ? 'icon-minus' : 'icon-plus';

    })
})