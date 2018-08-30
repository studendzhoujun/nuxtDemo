<template>
  <section class="container">
    <img src="../assets/img/tx.png" alt="" class="logo" />
    <h1 @click="add" class="title">
      about nuxt demo {{name}}
    </h1>
    <nuxt-link class="button" to="/about">
      about
    </nuxt-link>
  </section>
</template>

<style scoped>
.title
{
  margin: 50px 0;
}
</style>
<script>
    import {mapState} from 'vuex'
    export default{
      computed:mapState([
        'name'
      ]),
      methods:{
        add(){
          // this.$store.commit('increment')
          this.$store.dispatch('goAbout')
        }
      }
    }
</script>
