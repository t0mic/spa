<template>
  <div class="hello">
    <h1>Udaljeni resursi i asinhroni pozivi</h1>
    <p>Upravljanje asinhronim pozivima u Vue.js-u moguće je pomoću već ugrađenog XMLHttpRequest objekta ali ovaj način nije previše praktičan te Vue.js preporučuje instaliranje nekih pakovanja koja asinhrone pozive u mnogome olakšavaju koristeci Promise.</p>
    <p>Primise predstavlja vrste callback funkcija koje vraćaju određene vrednosti u odnosu na istinitost odgovora sa servera.</p>
    <p>Pakovanje sa kojim ćemo mi raditi naziva se <a href="https://www.npmjs.com/package/vue-axios" target="blank">axios</a></p>
    <h4>Instalacija:</h4>
    <p>Pakovanje instaliramo unosom sledeće komande u našu konzolu:</p>
    <pre>
      <code>
        npm install --save axios vue-axios
      </code>
    </pre>
    <p>Uspešno instalirano pakovajne:</p>
    <div class="cmd-img-holder">
      <img src="../assets/installedaxios.png" alt="cmd - instalacija npm pakovanja za ajax pozive">
    </div>
    <p>Nakon uspesnog instaliranja ovog pakovanja u nas projekat moramo ga povezati sa nasom SPA.</p>
    <p>Pozicioniramo se u main.js fajl i imporujemo fajlove koje smo ranije instalirali (ovi fajlovi će nam biti dostupni preko node-modules foldera)</p>
    <pre>
      <code>
        import axios from 'axios'
        import VueAxios from 'vue-axios'
      </code>
    </pre>
    <p>Nakon njikovog uključivanja u stranicu potrebno ih je dati vue na korišćenje:</p>
    <pre>
      <code>
        Vue.use(VueAxios, axios)
      </code>
    </pre>
    <p>Nakon ovoga sve je spremno za pozivanje i upravljanje asinhronim pozivima. Sledeći deo koda nam pokazuje kako da uhvatimo podatke sa udaljenog resursa, u then deo nam se vraćaju podaci koje kasnije možemo da koristimo bilo gde u našoj aplikaciji.</p>
    <pre>
      <code>
        Vue.axios.get(api).then((response) => {
          console.log(response.data)
        })
      </code>
    </pre>
    <h4>Primer:</h4>
    <p>U sledećem primeru ćemo pokazati kako se povlače podaci sa udaljenog resursa i prikazuju u bootstrap tabeli korišćenjem vue.js direktiva</p>
    <p>Prvi korak je da pokupimo podatke</p>
    <pre>
      <code>
        <textarea disabled="true" style="border: none;background-color:inherit; width: 100%; resize:none;">
          <button @click="pokupiPodatke">pokupi podatke</button>
        </textarea>
      </code>
    </pre>
    <p>Definisemo metodu za prikupljnje podataka:</p>
    <pre>
      <code>
        methods: {
          pokupiPodatke () {
            this.axios.get('https://jsonplaceholder.typicode.com/posts')
              .then(response => {
                this.podaci = response.data
              })
          }
        }
      </code>
    </pre>
    <p>Tip podataka koji dobijamo je objekat koji sadrzi data objekat sa nama potrabnim podacima. Ove podatke moramo da sacuvamo lokalno:</p>
    <pre>
      <code>
        data () {
          return {
            podaci: []
          }
        }
      </code>
    </pre>
    <p>Nakon čuvanja podataka možemo raditi na njihovom prikazu:</p>
    <pre>
      <code>
        <textarea disabled="true" style="border: none;background-color:inherit; width: 100%; resize:none; height: 390px">
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th>User ID</th>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Content</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="podatak in podaci">
                  <td>((podatak.userId))</td>
                  <td>((podatak.id))</td>
                  <td>((podatak.title))</td>
                  <td>((podatak.body))</td>
                </tr>
              </tbody>
            </table>
          </div>
        </textarea>
      </code>
    </pre>
    <button @click="pokupiPodatke">pokupi podatke</button>
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th>User ID</th>
            <th>ID</th>
            <th>Title</th>
            <th>Content</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="podatak in podaci" :key="podatak.title">
            <td>{{podatak.userId}}</td>
            <td>{{podatak.id}}</td>
            <td>{{podatak.title}}</td>
            <td>{{podatak.body}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'resource',
  data () {
    return {
      podaci: []
    }
  },
  methods: {
    pokupiPodatke () {
      this.axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
          console.log(response, 'this is jsonplaceholder')
          this.podaci = response.data
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
