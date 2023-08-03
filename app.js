const answerDiv = document.querySelectorAll('.accordian__colapse');
const question = document.querySelectorAll('.question');
let isOpen = null;
let previousQuestion = null;
function openItem(event) {
    /*  if(previousQuestion !== event.target){
       
            
         
     } */
    if (event) {
        isOpen = true;
        event.target.classList.toggle('open');
        const parent = event.target.parentNode;
        const answer = parent.nextElementSibling;

        if (event.target.classList.contains('open')) {

            answer.classList.add('collapse');



        } else {

            answer.classList.remove('collapse');

        }
        event.target.classList.remove('question__hover');
        previousQuestion = event.target;
    }

}
question.forEach(questions => {
    questions.addEventListener('click', openItem);
})
