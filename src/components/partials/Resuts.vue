<script>

import { store } from '../../data/store';

export default {
  name: 'Results',
  data(){
    return{
      
    }
  },
  computed:{
    outputResult(){
      if(store.charctersList.length > 0){
        return 'Risultati trovati:' + store.charctersList.length;
      }
      return 'Nessun  Risultato';
    }
  }
}
</script>


<template>
  <p>{{ outputResult }} </p>
</template>



<style lang="scss" scoped>
  p{
    margin-bottom: 50px;
    text-align: center;
  }
</style>