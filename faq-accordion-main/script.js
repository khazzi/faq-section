const faqQuestions = document.querySelectorAll('.faq-question');
const faqAnswers = document.querySelectorAll('.faq-answer');

faqQuestions.forEach((question, index) => {
    question.addEventListener('click', () => {
        // Hide all answers
        faqAnswers.forEach((answer) => {
            answer.style.display = 'none';
        });

        // Toggle the active class for the button
        question.classList.toggle('active');

        // If the question is no longer active, remove the active class
        if (!question.classList.contains('active')) {
            question.classList.remove('active');
        }

        // Show the clicked answer
        faqAnswers[index].style.display = 'block';
    });
}); 
/*
const buttons = document.querySelectorAll("button");
buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Hide all answers
        faqAnswers.forEach((answer) => {
            answer.style.display = 'none';
            
        });
        // Toggle the active class for the button
        question.classList.toggle('active');
        //turn all buttons to pink
        button.style.backgroundColor = "purple";
        //toggle the active button
        button[index].classList.toggle('expanded');
        // If the question is no longer active, remove the active class
        if (!button.classList.contains('expanded')) {
            button.classList.remove('expanded');
        }
    })
})*/
/*
function toggleAnswer(questionNumber) {
    let activeAnswer = null;
    const answer = document.getElementById(`answer${questionNumber}`);
    const button = document.querySelector(`[onclick="toggleAnswer(${questionNumber})"]`);
    if (answer.style.display === 'none') {
        answer.style.display = 'block';
        button.classList.add('expanded'); // Add class for rotated plus sign
    } else {
        answer.style.display = 'none';
        button.classList.remove('expanded'); // Remove class to revert to plus sign
    }
    if(activeAnswer){
        const activeButton = document.querySelector(`[onclick="toggleAnswer(${activeAnswer.id.slice(-1)})"]`);
    activeButton.classList.remove('expanded');
    activeButton.style.content = "-";
    }
} */
