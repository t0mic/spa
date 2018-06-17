<template>
  <div class="hello">
    <h1>VUE-ROUTER</h1>
    <p>Da bi naša SPA aplikacija bila SPA aplikacija u pravom smislu ona mora da obezbedi da kretanje kroz nju ostavlja isti utisak kao i kretanje kroz standardnu aplikaciju. Ovde uskače vue-router koji u zavisnosti od toga gde zelimo da idemo automatski menja url strane i servira nam onaj sadržaj koji je specificiran za taj url. Ovde je sva magija SPA jer u trenutku prelaska na drugi url sadrzaj nam se prikazuje istog trenutka, nema cekanja odgovora sa server jer u pozadini router samo prikriva i prikazuje odredjeni deo sadrzaja koji je namenjen odredjenoj stani.</p>
    <p>Router smo instalirali prilikom kreiranja projekta, mozemo proveriti da li se nalazi ukljucen u projekat ako odemo u main.js fajl</p>
    <div class="cmd-img-holder">
      <img src="../assets/routerinstalacija.png" alt="cmd konzola gde smo instalirali vue-router">
    </div>
    <p>U okviru našeg src foldera nalazimo router direktorijum koji sadrzi index.js fajl. U ovom fajlu importujemo komponente koje će se prikazati na određenoj ruti, definisemo rute, postavljamo defaultne rute, kao i rutu na koju ce korisnik biti poslat ako izabere nepostojecu rutu.</p>
    <div class="browser-img-holder">
      <img src="../assets/vue-router.png" alt="router index.js fajl sa rutama">
    </div>
    <p>Da bi se kretali između ruta vue-router nam obezbeđuje ugrađenu komponentu router-link koja ima diretivu :to u kojoj specificiramo rutu koju zelimo da posetimo</p>
    <pre>
      <code>
        <textarea disabled="true" style="border: none;background-color:inherit; width: 100%; resize:none;">
          <router-link :to="{name: 'home'}">Home</router-link>
        </textarea>
      </code>
    </pre>
    <div class="browser-img-holder">
      <img src="../assets/routerlink.png" alt="rutiranje u html delu">
    </div>
    <p>Sadržaj rute, tj. komponenta koja se prikazuje na osnovu odredjene rute se prikazuje u okviru ruterove ugrađene komponente: router-view</p>
    <pre>
      <code>
        <textarea disabled="true" style="border: none;background-color:inherit; width: 100%; resize:none;">
          <router-view/>
        </textarea>
      </code>
    </pre>
    <div class="browser-img-holder">
      <img src="../assets/routerview.png" alt="prikaz ruta koriscenjem router-view komponente">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Routing',
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
