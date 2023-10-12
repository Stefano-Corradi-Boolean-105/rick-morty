<script>
export default {
  name: 'Header',
  props:{
    titleStr: String
  }
}
</script>


<template>
  <header class="text-center my-5">
    <h1>{{ titleStr }}</h1>
  </header>
  
</template>



<style lang="scss" scoped>

</style>