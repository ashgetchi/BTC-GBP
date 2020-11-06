<template>
  <h2> Bitcoin </h2>
  <h2>{{ returnBitcoin }} </h2>
</template>

<script>

export default {
  computed:{
    returnBitcoin(){
      return this.$store.getters.returnBitcoin
    }
  }
}

</script>

<style>

</style>