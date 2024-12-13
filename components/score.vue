<script setup>

const quiz = inject('quiz');
const { score } = quiz;

</script>


<template>
    <div class="score text-center mt-12">
        <h1 class="text-2xl mb-5">Score</h1>
        <p class="text-xl">Ton score est : {{ score }}</p>
        <div class="flex justify-center items-center space-x-4 mt-4">
            <NuxtLink to="/" class="text-blue-500 hover:underline">Retour</NuxtLink>
            <button @click="quiz.reset()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Reset
            </button>
        </div>
    </div>
</template>