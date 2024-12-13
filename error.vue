<template>

<NuxtLayout name="home">
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
        <div class="bg-white p-8 rounded shadow-md text-center">
            <h1 class="text-4xl font-bold text-red-500 mb-4">Error</h1>
            <p class="text-gray-700 mb-6">Something went wrong. Please try again later.</p>
            <nuxt-link to="/" class="text-blue-500 hover:underline">Go back to Home</nuxt-link>
        </div>
    </div>
</NuxtLayout> 

</template>