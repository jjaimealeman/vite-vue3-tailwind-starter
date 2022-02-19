<template>
  <nav class="bg-white shadow bg-gray-800">
    <div
      class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize"
    >
      <router-link
        active-class="text-white font-bold transition-colors duration-200 transform border-b-2 border-blue-500 mx-1.5 sm:mx-6"
        class="text-gray-300 border-b-2 border-transparent hover:text-blue-400 transition-colors duration-200 transform hover:border-blue-500 mx-1.5 sm:mx-6"
        to="/"
      >
        Home
      </router-link>
      <router-link
        active-class="text-white font-bold transition-colors duration-200 transform border-b-2 border-blue-500 mx-1.5 sm:mx-6"
        class="text-gray-300 border-b-2 border-transparent hover:text-blue-400 transition-colors duration-200 transform hover:border-blue-500 mx-1.5 sm:mx-6"
        to="/about"
      >
        About
      </router-link>
      <router-link
        active-class="text-white font-bold transition-colors duration-200 transform border-b-2 border-blue-500 mx-1.5 sm:mx-6"
        class="text-gray-300 border-b-2 border-transparent hover:text-blue-400 transition-colors duration-200 transform hover:border-blue-500 mx-1.5 sm:mx-6"
        to="/colors"
      >
        Colors
      </router-link>
      <router-link
        active-class="text-white font-bold transition-colors duration-200 transform border-b-2 border-blue-500 mx-1.5 sm:mx-6"
        class="text-gray-300 border-b-2 border-transparent hover:text-blue-400 transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
        to="/restaurants"
      >
        Restaurants
      </router-link>
      <router-link
        active-class="text-white font-bold transition-colors duration-200 transform border-b-2 border-blue-500 mx-1.5 sm:mx-6"
        class="text-gray-300 border-b-2 border-transparent hover:text-blue-400 transition-colors duration-200 transform hover:border-blue-500 mx-1.5 sm:mx-6"
        to="/NotFound"
      >
        404
      </router-link>
    </div>
  </nav>
</template>

<script></script>
