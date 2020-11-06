<template>
  <button @click="changer"> Add 10 </button>
  <button @click='subtractPound'> minus 10 </button>
</template>

<script>
import { useStore } from 'vuex'

export default {
  setup(){

const store = useStore()

const changer = () =>{
  store.dispatch('changePoundThree') 
  }

  const subtractPound = () => {
    store.dispatch('subtractPound')
  }

    return {
      changer,
      subtractPound
    }
  }
}
  
</script>

<style>

</style>