<template>

<main class="flex flex-col items-center justify-center ">
    <header class="flex items-center justify-between w-full bg-blue-600 text-white py-4 px-12 mb-4">
        <p class="text-4xl font-bold">Quizipédia</p>
        <NuxtLink to="/" class="text-2xl hover:underline">Accueil</NuxtLink>
    </header>
    <slot/>
</main>

</template>