<template>
  <div id="app">
    <app-header />
    <div class="container container-heigth">
      <router-view/>
    </div>
    <app-footer />
  </div>
</template>

<script>
import AppHeader from './components/Header'
import AppFooter from './components/Footer'
export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style>
#app {
  font-family: 'Montserrat', sans-serif;
}
.container-heigth {
  min-height: calc(100vh - 104px);
}
p {
  font-size: 16px;
}
a {
  text-decoration: underline;
}
.cmd-img-holder {
  max-width: 655px;
  margin: 20px auto 20px;
  overflow: hidden;
}
.browser-img-holder {
  max-width: 100%;
  margin: 20px auto 20px;
  overflow: hidden;
}
.browser-img-holder img {
  width: 100%;
}
</style>
