document.addEventListener('DOMContentLoaded', function(){
    const questions = document.querySelectorAll('.question');

    questions.forEach(function (question){
        question.addEventListener('click', function(){
            const answer = question.nextElementSibling;

            if (answer.style.display === 'none'){
                answer.style.display = 'block';
            } else {
                answer.style.display = 'none';
            }
        });
    });
});