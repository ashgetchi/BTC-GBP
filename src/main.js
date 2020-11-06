import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import ThePoundDisplay from './components/ThePoundDisplay'


const store = createStore({
  state(){
    return{
      pound: 0
    }
  },
  mutations:{
    changePoundTwo(state){
      state.pound += 10
    },
    subtractPound(state){
      state.pound -= 10
    }
  },
  actions:{
    changePoundThree(context){
      context.commit('changePoundTwo')
    },
    subtractPound(context){
      context.commit('subtractPound')
    }
  },
  getters:{
    returnPound(state){
      return state.pound
    },
    returnBitcoin(state){
      return state.pound / 800000
    },
  }
})
const app = createApp(App)
app.component('ThePoundDisplay', ThePoundDisplay)
app.use(store)
app.mount('#app')
