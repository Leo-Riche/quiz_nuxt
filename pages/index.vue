<script setup>

const quizList = await queryContent('quizs').find();

</script>

<template>
    <NuxtLayout name="home">
        <div class="flex flex-col justify-content-center items-center text-center gap-4 pt-4">
            <NuxtLink v-for="quiz in quizList" :key="quiz._path" :to="`/quiz/${quiz._path.split('/').pop()}`">
                <div class="py-2 px-6 border rounded hover:bg-black hover:text-white transition duration-200">
                    {{ quiz.title }}
                </div>
            </NuxtLink>
        </div>
    </NuxtLayout>
</template>