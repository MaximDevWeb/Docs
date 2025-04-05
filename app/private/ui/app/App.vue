<script setup>
import { onMounted } from 'vue';
import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';

onMounted(() => {
  console.log(import.meta.env);
  axios.get('http://localhost:3000/api/tree').then((result) => {
    console.log(result.data);
  });
});
</script>

<template>
  <h1>Hello Worlddsf {{ apiUrl }}</h1>
</template>
