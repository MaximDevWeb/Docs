<script setup>
import logo from './../assets/images/logo_docs.svg';
import Icon from './Icon.vue';
</script>

<template>
  <div class="left-menu">
    <div class="left-menu__logo">
      <img :src="logo" alt="logo" />
    </div>

    <div class="left-menu__list">
      <RouterLink class="left-menu__item" to="/">
        <Icon type="hub" fill />
        API
      </RouterLink>

      <RouterLink class="left-menu__item" to="/settings">
        <Icon type="settings" fill />
        Конфиг
      </RouterLink>
    </div>
  </div>
</template>
