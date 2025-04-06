<script setup>
import '../assets/styles/app.scss';
import Default from "../layouts/Default.vue";
// const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';
</script>

<template>
  <Default>
    <RouterView />
  </Default>
</template>
