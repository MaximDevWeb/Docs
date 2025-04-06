<script setup>
defineProps({
  type: {
    type: String,
    required: true,
  },
  fill: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <span class="icon material-symbols-outlined" :class="{ icon__fill: fill }">
    {{ type }}
  </span>
</template>
