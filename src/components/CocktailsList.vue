<script setup>
import CocktailItem from "./CocktailItem.vue";
import axios from "axios";
</script>

<template>
  <div v-if="isDataLoaded">
    <div
      class="mx-auto sm:w-4/5 grid sm:gap-3 sm:grid-cols-2 md:gap-6 md:grid-cols-3"
    >
      <template v-for="(drink, key) in arrayData" :key="'drink' + key">
        <CocktailItem>
          <template #image>
            <img
              :src="drink.drinks[0].strDrinkThumb + '/preview'"
              :srcset="
                drink.drinks[0].strDrinkThumb +
                '/preview 200w, ' +
                drink.drinks[0].strDrinkThumb +
                ' 300w'
              "
              class="w-full transition-all"
            />
          </template>
          <template #heading>{{ drink.drinks[0].strDrink }}</template>
          <template #ingredients>
            <ul>
              <li v-for="n in 12" :key="'ingredient' + n" class="sm:text-sm">
                {{ drink.drinks[0]["strMeasure" + n] }}
                {{ drink.drinks[0]["strIngredient" + n] }}
              </li>
            </ul>
          </template>
          <template #recipe>{{ drink.drinks[0].strInstructions }}</template>
        </CocktailItem>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "CocktailsList",

  data() {
    return {
      arrayData: [],
      isDataLoaded: false,
    };
  },

  created() {
    this.fetchData();
  },

  methods: {
    async fetchData() {
      for (let index = 0; index < 3; index++) {
        await axios({
          method: "GET",
          redirect: "follow",
          url: "https://www.thecocktaildb.com/api/json/v1/1/random.php",
        })
          .then((result) => {
            this.arrayData[index] = result.data;
          })
          .then(() => {
            if (index === 2) {
              this.isDataLoaded = true;
            }
          })
          .catch((error) => console.log(error));
      }
    },
  },
};
</script>
