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
        <div class="col-md-3 text-center"><a href="http://www.ftn.kg.ac.rs/nenad.stefanovic" target="blank">dr Nenad Stefanović</a></div>
        <div class="col-md-3 text-center"><a href="http://www.ftn.kg.ac.rs/mladen.janjic" target="blank">mr Mladen Janjić</a></div>
        <div class="col-md-3 text-center"><a href="https://www.facebook.com/milija.nedovic" target="blank">Milija Nedović</a></div>
        <div class="col-md-3 text-center"><a href="https://www.linkedin.com/in/marko-tomic-835193121/" target="blank">Marko Tomić</a></div>
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
a {
  text-decoration: none;
  color: #777;
  line-height: 50px;
}
a:hover {
  text-decoration: underline;
}
</style>
