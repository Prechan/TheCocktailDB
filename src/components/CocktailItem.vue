<template>
  <div class="cursor-pointer wrapper" @click="modalTransition($event)" ref="cocktailItemWrapper" :style="styleObject">
    <slot name="image"></slot>
    <div class="transition-all mx-auto p-3 relative bottom-8 bg-white w-4/5 sm:w-11/12 md:w-4/5 border border-black ingredients">
      <h2 class="text-3xl sm:text-xl mb-2">
        <slot name="heading"></slot>
      </h2>
      <slot name="ingredients"></slot>
      <img class="hidden sm:block sm:w-6 sm:mx-auto sm:my-2 transition-all" :class="recipeIsVisible ? 'rotate-180' : ''" src="./icons/downArrow.svg" alt="arrow" @click="displayIngredients" />
      <p class="recipe text-sm transition-all" :class="recipeIsVisible ? 'opacity-100 scale-100 h-100' : 'h-0 opacity-0 scale-0'"><slot name="recipe"></slot></p>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      styleObject: {
        transform: 'translate(0px, 0px)'
      },
      recipeIsVisible: false
    }
  },
  methods: {
    modalTransition() {
      this.$refs['cocktailItemWrapper'].classList.toggle('open')
      // Grab des coordonnées pour mettre la carte en haut
      let viewportOffset = this.$refs['cocktailItemWrapper'].getBoundingClientRect()

      // Si la carte est ouverte...
      if(this.$refs['cocktailItemWrapper'].classList.contains('open') && window.innerWidth < 425) {
        // Prevent scroll
        document.body.style.top = '-' + window.scrollY + 'px'
        document.body.style.position = 'fixed'
        // On affiche la recette
        this.recipeIsVisible = true
        
        // ...Calcul du scroll pour mettre la carte en haut
        this.styleObject.transform = 'translate(' + viewportOffset.left * -1 + 'px, ' + viewportOffset.top * -1 + 'px)'
      } else {
        // Eviter le snap sur desktop où l'effet n'est pas présent
        if (window.innerWidth < 425) {
          // Remise à zéro
          this.styleObject = {
            transform: 'translate(0,0)'
          }
          // Reset du prevent scroll
          let scrollY = document.body.style.top
          document.body.style.position = ''
          document.body.style.top = ''
          window.scrollTo(0, parseInt(scrollY) * -1)
          // Reset visibilité recette
          this.recipeIsVisible = false
        }
      }
    },

    displayIngredients () {
      this.recipeIsVisible = !this.recipeIsVisible
    }
  }
}
</script>


<style scoped>
  .wrapper:hover .ingredients {
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  }

  @media screen and (max-width: 424px) {
    .wrapper {
      transition: all .5s cubic-bezier(.6, 0, 0.45, 1.3);
      background: white;
    }

    .wrapper.open {
      z-index: 100;
      width: 100vw;
      height: 100vh;
      overflow-y: hidden;
    }

    .wrapper.open .recipe {
      margin-top : 6px;
      padding-top: 6px;
      border-top: 2px dashed #e5e7eb;
    }
  }
</style>
