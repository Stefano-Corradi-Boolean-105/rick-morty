<script>
export default {
  name: 'CharacterCard',
  props:{
    name: String,
    status: String,
    species: String,
    image: String
  }
}
</script>

<template>
  <div class="col-3">
    <div class="sc-card">
      <img :src="image" :alt="name">
      <h4>{{ name }}</h4>
      <p>{{ status }}</p>
      <p>{{ species }}</p>
    </div>
  </div>
  
</template>



<style lang="scss">

@use '../../scss/partials/vars' as *;

.sc-card{
  text-align: center;
  margin-bottom: 50px;
  img{
    border-radius: 50%;
    box-shadow: 0 0 5px 3px rgba(#000000, .2);
    margin-bottom: 15px;
    transition: all .2s;
    &:hover{
      transform: scale(1.05);
    }
  }
  h4{
    text-transform: capitalize;
    &::after{
      content: '';
      display: block;
      border-bottom: 1px solid $primary-color;
      width: 50px;
      margin: 1rem auto;
    }
  }
}
</style>