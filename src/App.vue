<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div>
    <nav>
      <RouterLink to="/" class="text-4xl font-bold text-center">L'estanquette</RouterLink>
    </nav>
  </div>

  <RouterView />
</template>

<style scoped>
</style>
