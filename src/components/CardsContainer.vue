<script>

import { store } from '../data/store';
import CharacterCard from './partials/CharacterCard.vue';

export default {
  name: 'CardsContainer',
  components:{
    CharacterCard
  },
  data(){
    return{
      store
    }
  },
  mounted(){
    console.log(store.charctersList);
  }
  
}

</script>


<template>

  <div class="container my-5">
    <div class="row">
      <CharacterCard
        v-for="character in store.charctersList"
        :key="character.id"
        :name="character.name"
        :status="character.status"
        :species="character.species"
        :image="character.image"
      />
    </div>
  </div>

  
</template>



<style lang="scss" scoped>

</style>