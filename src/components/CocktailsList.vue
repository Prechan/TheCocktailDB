<script setup>
import CocktailItem from "./CocktailItem.vue";
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav>
    <RouterLink to="/cocktail1">
      <CocktailItem>
        <template #heading>Nom du cocktail 1</template>
        Recette du cocktail 1
      </CocktailItem>
    </RouterLink>

    <RouterLink to="/cocktail2">
      <CocktailItem>
        <template #heading>Nom du cocktail 2</template>
        Recette du cocktail 2
      </CocktailItem>
    </RouterLink>
  </nav>

  <RouterView />
</template>
