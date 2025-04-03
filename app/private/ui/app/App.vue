<script setup>
import { onMounted } from 'vue';
import axios from 'axios';

onMounted(() => {
  axios.get('http://localhost:3000/api/tree').then((result) => {
    console.log(result.data);
  });
});
</script>

<template>
  <h1>Hello World ddf</h1>
</template>
