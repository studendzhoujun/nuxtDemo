<template>
  <section class="container">
    <img src="../assets/img/tx.png" alt="Nuxt.js Logo" class="logo" />
    <h1 class="title">
      server render  code: {{ name }}
    </h1>
    <nuxt-link class="button" to="/">
      Home
    </nuxt-link>
  </section>
</template>
<script>
import axios from '../utils/fetch.js'
export default {
  asyncData({ req, params }) {
    // return {
    //   name: req ? 'server' : 'client'
    // }
    return axios.get('getMove?id=1054521')
      .then((res) => {
        // return { posts: res.data.slice(0, 5) }
        console.log('服务端请求')
        return {name:res.status}
      })
  },
  head() {
    return {
      title: `About Page (${this.name}-side)`
    }
  }
}
</script>

<style scoped>
.title
{
  margin-top: 50px;
}
.info
{
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
  margin-top: 10px;
}
.button
{
  margin-top: 50px;
}
</style>
