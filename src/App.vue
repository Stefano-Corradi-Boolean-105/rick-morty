<script>

import axios from 'axios';
import { store } from './data/store';
import Header from './components/Header.vue';
import CardsContainer from './components/CardsContainer.vue';
import Resuts from './components/partials/Resuts.vue';
import SearchBar from './components/partials/SearchBar.vue';
import Loader from './components/partials/Loader.vue';

export default {
  name: 'App',
  components:{
    Header,
    CardsContainer,
    Resuts,
    SearchBar,
    Loader
  },
  data(){
    return{
      store
    }
  },
  methods:{
    getApi(){
      store.isLoading = true;
      axios.get(store.apiUrl,{
        params:{
          name: store.nameToSearch,
          status: store.statusToSearch
        }
      })
        .then( res =>{
          
          store.charctersList = res.data.results;
          console.log(store.charctersList);
          store.isLoading = false;

          // ciclo tutti i caratteri per prendere tutti gli stati
          store.charctersList.forEach( char => {
            // se lo status non è incluso nell'array degli status lo pusho
            if(!store.statusList.includes(char.status)){
              store.statusList.push(char.status)
            }
          })

        })
        .catch(err => {
          //console.log(err);
          // in caso di errore (qnado l'API non trova nulla) resetto la lista dei caratteri
          store.charctersList = [];
          store.isLoading = false;
        })

    }
  },
  mounted(){
    this.getApi();
  }
}
</script>

<template>
  <Header titleStr="- Rick&Morty -" />
  <SearchBar @startSearch="getApi" />
  <Loader v-if="store.isLoading" title="Loarding Rick&Morty API" />
  <CardsContainer v-else />
  <Resuts v-if="!store.isLoading" />
  
</template>



<style lang="scss" >

@use './scss/main.scss';

</style>