<template>
  <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">WebSiteName</a>
      </div>
      <ul class="nav navbar-nav">
        <li><router-link :to="{name: 'home'}">Šta je SPA?</router-link></li>
        <li><router-link :to="{name: 'implementation'}">Implementacija</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: 'This is our SAP'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
