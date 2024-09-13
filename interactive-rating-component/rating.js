document.addEventListener('DOMContentLoaded', () =>{
    const ratingButtons = document.querySelectorAll('.rating-btn');
    const submitButton = document.querySelector('.submit-btn');
    const ratingState = document.querySelector('.rating-state');
    const thankyouState = document.querySelector('.thankyou-state');
    const selectedRatingText = document.getElementById('selected-rating');

    let selectedRating = 0;

    ratingButtons.forEach( button => {
        button.addEventListener('click' , () => {
            ratingButtons.forEach(btn =>  btn.classList.remove('selected'));
            button.classList.add('selected');
            selectedRating = button.textContent;

        });
    });
    submitButton.addEventListener('click' , () =>{
        if (selectedRating > 0) {
            selectedRatingText.textContent = selectedRating;
            ratingState.style.display = 'none';
            thankyouState.style.display = 'flex';
        } else {
            alert("Please select a rating before submitting.");
        }
    })
})