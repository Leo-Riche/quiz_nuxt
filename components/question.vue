<script setup>

const props = defineProps({
    quiz: Object
});



</script>


<template>

    <div>
        <p class="text-xl font-bold mt-2">{{ quiz.title }}</p>
        <p class="text-lg mt-2">{{ quiz.questions[quiz.currentQuestionIndex.value].text }}</p>
        <p>{{ quiz.questions.length }}</p>
        <p class="text-lg mt-2">{{ quiz.currentQuestionIndex.value + 1 }} / {{ quiz.questions.length }}</p>
        <div>
            <button class="bg-gray-200 p-2 rounded transition duration-100 hover:bg-gray-300" @click="quiz.answerSelected(index)" v-for="(option, index) in quiz.questions[quiz.currentQuestionIndex.value].options" :key="index">{{ option }}</button>
        </div>
    </div>

</template>