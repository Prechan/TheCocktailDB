<script setup>
import CocktailsList from "../components/CocktailsList.vue";
</script>

<template>
  <main>
    <h2 class="text-3xl text-center mb-6 px-4">
      {{ title }}
    </h2>
    <CocktailsList />
  </main>
</template>

<script>
export default {
  name: "CocktailsList",

  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
