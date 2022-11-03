<script setup>
import MenuItem from "./MenuItem.vue";
</script>

<template>
    <nav class="flex justify-center gap-8 pb-4 mb-4 max-w-min m-auto border-b-2 border-dotted">
        <MenuItem>
            <template #image><img src="./icons/cocktail.svg" class="w-8 h-8" alt="cocktail" /></template>
            <template #text>Cocktails</template>
        </MenuItem>
        <MenuItem>
            <template #image><img src="./icons/beer.svg" class="w-8 h-8" alt="beer" /></template>
            <template #text>Bières</template>
        </MenuItem>
        <MenuItem>
            <template #image><img src="./icons/martini.svg" class="w-8 h-8" alt="martini" /></template>
            <template #text>Martinis</template>
        </MenuItem>
        <MenuItem>
            <template #image><img src="./icons/wine.svg" class="w-8 h-8" alt="wine" /></template>
            <template #text>Vins</template>
        </MenuItem>
    </nav>
</template>

<style scoped>
</style>