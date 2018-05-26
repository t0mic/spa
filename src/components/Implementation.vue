<template>
  <div class="hello">
    <h1>Implementacija:</h1>
    <p>
      Implementacija SPA se izvodi pomoću javascript framework-ova kao što su: Angular.js, React.js, Vue.js, Ember.js itd...
    </p>
    <p>Naša web prezentacija biće implementirana pomoću vuejs frameworka.</p>
    <p>Da bi mogli da radimo sa vuejsom na radnoj mašini mora biti instaliran node.js koji se može naći na:
    <a href="https://nodejs.org/en/" target="blank">https://nodejs.org/en/</a> odakle je potrebno skinuti najnoviju verziju.
    </p>
    <div class="cmd-img-holder">
      <img src="../assets/Screenshot_2.png">
    </div>
    <p>
      Posle instaliranja nodea možemo preći na instaliranje samog vue CLI (command line interface)
    </p>
    <pre>
      <code>
        $ npm install --global vue-cli
      </code>
    </pre>
    <div class="cmd-img-holder">
      <img src="../assets/Screenshot_4.png">
    </div>
    <p>Završena instalacija...</p>
    <div class="cmd-img-holder">
      <img src="../assets/Screenshot_5.png">
    </div>
    <p>Nakon što smo globalno instalirali vue-cli imamo mogućnost da bilo gde na našem računaru kreiramo vue.js projekat. VueCLI kreira projekat putem <a href="https://webpack.js.org/" target="blank">webpack-a</a> i time nam mnogo pomaže jer sve svi .js fajlovi na kraju spajaju u jedan minifikovan .js fajl i time nam omogućava bolje performanse. Sledećom komandom kreiramo projekat gde je "my-project" direktorijum u kome će se naš projekat nalaziti</p>
    <pre>
      <code>
        $ vue init webpack my-project
      </code>
    </pre>
    <div class="cmd-img-holder">
      <img src="../assets/Screenshot_6.png">
    </div>
    <p>Posle pokretanja komande za kreiranje projekta CLI nam daje mogućnost da inicijalizujem naš projekat dajući mu ime, opis, tim. Dobijamo mogućnost da instaliramo dodatna pakovanja koja nam obogaćuju vue okruženje kao što je npr. <a href="https://router.vuejs.org/" target="blank">"vue-router"</a> o kome će reči biti kasnije. Dobijamo mogućnost inicijalzovanja unit testova kao i eslint pakovanje koje prati naš kod i upozorava nas na greške u kodu.</p>
    <div class="cmd-img-holder">
      <img src="../assets/Screenshot_7.png">
    </div>
    <p>Nakon što je projekat uspešno instaliran...</p>
    <div class="cmd-img-holder">
      <img src="../assets/Screenshot_8.png">
    </div>
    <p>Sledećim komandama se pozicioniramo u sam projekat i pokrećemo ga.</p>
    <pre>
      <code>
        cd my-project
        $ npm run dev
      </code>
    </pre>
    <div class="cmd-img-holder">
      <img src="../assets/Screenshot_9.png">
    </div>
    <p>Nakon izvršenja $ npm run dev vue-cli putem webpack-a za nas startuje lokalni server i o tome nas obaveštava sledećom porukom u konzoli:</p>
    <div class="cmd-img-holder">
      <img src="../assets/Screenshot_10.png">
    </div>
    <p>Dok setovan projekat u brauzeru izglda ovako:</p>
    <div class="browser-img-holder">
      <img src="../assets/Screenshot_11.png">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Implementacija',
  data () {
    return {
      srcDir: '../assets/'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
