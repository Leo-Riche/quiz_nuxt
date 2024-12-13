export default function (quiz) {
    const currentQuestionIndex = ref(0);
    const score = ref(0);

    const nextQuestion = () => {
        currentQuestionIndex.value++;
    }

    const answerSelected = (answer) => {
        if (answer === quiz.questions[currentQuestionIndex.value].answer) {
            score.value++;
        }
        nextQuestion();
    }

    const reset = () => {
        currentQuestionIndex.value = 0;
        score.value = 0;
    }

    return {
        questions: quiz.questions,  
        currentQuestionIndex,
        score,
        nextQuestion,
        answerSelected,
        reset,
    };
}