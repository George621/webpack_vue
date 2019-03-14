
import Vue from 'vue';
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  data:{
    name:'george'
  },
  template:'<App />',
  
  components:{
    App
  }
})