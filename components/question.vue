<script setup>

const props = defineProps({
    quiz: Object
});

</script>


<template>

    <div class="flex flex-col items-center p-4 bg-white shadow-md rounded-lg">
        <p class="text-2xl font-bold mt-2 text-gray-800">{{ quiz.title }}</p>
        <p class="text-lg mt-4 text-gray-600">{{ quiz.questions[quiz.currentQuestionIndex.value].text }}</p>
        <p class="text-sm mt-2 text-gray-500">{{ quiz.currentQuestionIndex.value + 1 }} / {{ quiz.questions.length }}</p>
        <div class="flex gap-8 mt-4">
            <button class="bg-blue-500 text-white p-2 rounded-lg transition duration-150 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300" @click="quiz.answerSelected(index)" v-for="(option, index) in quiz.questions[quiz.currentQuestionIndex.value].options" :key="index">{{ option }}</button>
        </div>
    </div>

</template>