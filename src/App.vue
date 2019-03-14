<template>
  <div id="add">
    <h1>{{message}}</h1>
    <users></users>
  </div>
</template>

<script>
import Users from './pages/Users'
export default {
  name:'App',
  data () {
    return {
      message: 'message vue'
    }
  },
  components:{
    'users': Users
  }
  
}
</script>