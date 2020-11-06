<template>
<slot></slot>
  <h2>{{ returnPound }}</h2>
  
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  setup(){
  const store = useStore()
  
  const returnPound = computed(function(){
    return store.getters.returnPound
  })





return{
  returnPound,
}
  }

  



}
</script>

<style>

</style>