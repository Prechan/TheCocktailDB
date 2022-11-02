<template>
  <div id="wrapper" class="cursor-pointer">
    <slot name="image"></slot>
    <div id="recipe" class="transition-all mx-auto p-3 relative bottom-8 bg-white w-4/5 border border-black">
      <h2 class="text-3xl">
        <slot name="heading"></slot>
      </h2>
      <slot name="recipe"></slot>
    </div>
  </div>
</template>

<style scoped>
  #wrapper:hover #recipe {
    bottom: 50px;
  }
</style>
