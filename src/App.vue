<template>
<the-pound-display>
    <h2>GBP</h2>
</the-pound-display>
<the-pound-changer>
</the-pound-changer>
<the-bitcoin-displayer></the-bitcoin-displayer>
</template>

<script>

import ThePoundChanger from './components/ThePoundChanger'
import TheBitcoinDisplayer from './components/TheBitcoinDisplayer'

export default {
  name: 'App',
  components: {
    ThePoundChanger,
    TheBitcoinDisplayer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
