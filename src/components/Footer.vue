<template>
  <nav id="app-footer" class="navbar navbar-default">
    <div class="container-fluid">
      <!-- <div class="navbar-header">
        <a class="navbar-brand" href="#">WebSiteName</a>
      </div>
      <ul class="nav navbar-nav">
        <li><router-link :to="{name: 'home'}">Šta je SPA?</router-link></li>
        <li><router-link :to="{name: 'implementation'}">Implementacija</router-link></li>
        <li><router-link :to="{name: 'about'}">Vue.js</router-link></li>
        <li><router-link :to="{name: 'routing'}">Rutiranje</router-link></li>
        <li><router-link :to="{name: 'resource'}">AJAX</router-link></li>
        <li><router-link :to="{name: 'test'}">Test</router-link></li>
      </ul> -->
      <div class="row">
        <div class="col-md-3"><a href="" target="blank">Profesor</a></div>
        <div class="col-md-3"><a href="" target="blank">Asistent</a></div>
        <div class="col-md-3"><a href="" target="blank">Milija Nedović</a></div>
        <div class="col-md-3"><a href="" target="blank">Marko Tomić</a></div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar-inverse {
  border-radius: 0;
}
.navbar {
  margin-bottom: 0;
}
</style>
