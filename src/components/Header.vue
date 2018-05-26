<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" @click="toggleNav" class="navbar-toggle collapsed" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" target="blank" href="https://en.wikipedia.org/wiki/Single-page_application">SPA</a>
      </div>
      <!-- Collect the nav links, forms, and other content for toggling -->
      <div v-if="showNav" class="collapse navbar-collapse" :class="{in: showNav}">
        <ul class="nav navbar-nav navbar-right">
          <!-- <li class="active"><a href="#">Link</a></li>
          <li><a href="#">Link</a></li> -->
          <li><router-link :to="{name: 'home'}">Šta je SPA?</router-link></li>
          <li><router-link :to="{name: 'implementation'}">Implementacija</router-link></li>
          <li><router-link :to="{name: 'about'}">Vue.js</router-link></li>
          <li><router-link :to="{name: 'routing'}">Rutiranje</router-link></li>
          <li><router-link :to="{name: 'resource'}">AJAX</router-link></li>
        </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      showNav: true
    }
  },
  mounted () {
    window.addEventListener('resize', this.checkWidth)
  },
  methods: {
    toggleNav () {
      this.showNav = !this.showNav
    },
    checkWidth () {
      if (window.innerWidth > 768) {
        this.showNav = true
      } else {
        this.showNav = false
      }
    }
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.checkWidth)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  text-decoration: none;
}
.navbar-inverse {
  border-radius: 0;
}
.navbar {
  margin-bottom: 0;
}
.router-link-exact-active {
  text-decoration: underline;
}
.router-link-exact-active:focus {
  text-decoration: underline;
}
</style>
