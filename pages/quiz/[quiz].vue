<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const slug = route.params.quiz;
const data = await queryContent(`quizs/${slug}`).findOne();

const quiz = useQuiz(data);
provide('quiz', quiz);

</script>

<template>

    <NuxtLayout name="home">
        <div class="p-4">
            <NuxtLink to="/" class="text-blue-500 hover:underline">Back</NuxtLink>
            <Question :quiz="quiz" v-if="quiz.currentQuestionIndex.value < quiz.questions.length"/>
            <Score v-else />
        </div>
    </NuxtLayout>
</template>