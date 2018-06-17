<template>
  <div class="hello">
    <h1>Komponente</h1>
    <p>
      Vue.js aplikacija se sastoji od mnogo komponenata (fajlova) sa ekstenzijom .vue; Ono što karakteriše vue komponente za razliku od komponenata nekih drugih framework-ova je to da se u vue komponenti nalazi html, logika i stilovi vezani samo za tu komponentu. Na ovaj način app je podeljena u manje delove i upravljanje istom je znatno olakšano.
    </p>
    <div class="browser-img-holder">
      <img src="../assets/components.png" alt="prikaz strukture komponenti">
    </div>
    <p>Importovanje komponenata se vrši tako što se u script tagu importuje komponenta:</p>
    <pre>
      <code>
        import AppHeader from './components/Header'
      </code>
    </pre>
    <p>Zatim se komponenta registruje u vue.js objektu:</p>
    <pre>
      <code>
        export default {
          name: 'App',
          components: {
            AppHeader
          }
        }
      </code>
    </pre>
    <p>Na kraju se koristi u HTML-u:</p>
    <pre>
      <code>
        <textarea disabled="true" style="border: none;background-color:inherit; width: 100%; resize:none;">
          <app-header />
        </textarea>
      </code>
    </pre>
    <p>
      Sav html se nalazi u okviru template taga i u njemu može biti samo jedan koreni tag
    </p>
    <div class="browser-img-holder">
      <img src="../assets/prazanvue.png" alt="code editor default">
    </div>
    <p>U okviru script taga možemo koristi svako svojstvo es6 javascript standarde (importovati kod, ekstportovati ga, koristiti arrow funkcije itd...)</p>
    <p>Logika vezana isključivo za komponentu se nalazi defaultnom objektu koji se exportuje. U ovom objektu se nalazi sva vue magija. U njemu skladištimo podatke koji su vezani za našu komponentu, pišemo metode koje će se izvršavati u komponenti, primamo podatke sa udaljenih resursa i prikazujemo ih, osluškujemo promene i reagujemo na njih, u njemu radimo svo javascript programiranje.</p>
    <h1>Direktive</h1>
    <p>Prikaz vrednosti iz logike u naš html vršimo pomoću sledećih karakera "(())"</p>
    <div class="browser-img-holder">
      <img src="../assets/prikaztekstaeditor.png" alt="prikaz teksta u vue-editor">
    </div>
    <div class="browser-img-holder">
      <img src="../assets/prikaztekstabrowser.png" alt="prikaz teksta u vue-browser">
    </div>
    <p>Pristup promenljivama unutar metoda vrši se dodavanjem "this." ispred njihovog imena</p>
    <p>Vue.js ima veliki broj ugrađenih direktiva koje nam omogućavaju vezu između logike i njenog prikaza na stranu</p>
    <p>v-if direktiva nam omogućava da prikazujemo određeni sadržaj na osnovu istinitosti određene promenljive:</p>
    <div class="browser-img-holder">
      <img src="../assets/prikaztekstabrowser.png" alt="prikaz sadrzaja na osnovu odredjene vrednosti">
    </div>
    <p>click direkiva nam omogućava da osluškujemo klikove na strani i reagujemo na njih:</p>
    <div class="browser-img-holder">
      <img src="../assets/codeclick.png" alt="test click direktive">
    </div>
    <h4 v-if="showMsg">{{msg}}</h4>
    <button @click="toggleMessage">prikaži/ukloni h4 element iznad dugmeta</button>
    <p>Dinamičko dodeljivanje klasa se vrši putem :class direktive</p>
    <p>U slučaju da je tekst sakriven, dugme će biti crvene boje:</p>
    <button @click="toggleMessage" :class="[showMsg ? '' : redButton]">show/hide message</button>
    <h4>Primer:</h4>
    <p>HTML</p>
    <pre>
      <code>
        <textarea disabled="true" style="border: none;background-color:inherit; width: 100%; resize:none;">
          <button @click="toggleMessage" :class="[showMsg ? '' : redButton]">show/hide message</button>
        </textarea>
      </code>
    </pre>
    <p>Vue.js</p>
    <pre>
      <code>
        data () {
          return {
            msg: 'This is our SAP',
            showMsg: true,
            redButton: 'red-button'
          }
        }
      </code>
    </pre>
    <p>CSS</p>
    <pre>
      <code>
        .red-button {
          background-color: red;
        }
      </code>
    </pre>
    <p>Izlistavanje vrednosti nizova i objekata vrši se pomoću v-for direktive</p>
    <p>Vue.js:</p>
    <pre>
      <code>
        export default {
        name: 'testpage',
        data () {
          return {
            proizvodjaci: ['Honda', 'Škoda', 'BMW', 'Audi', 'Toyota']
          }
        }
      }
      </code>
    </pre>
    <p>HTML:</p>
    <pre>
      <code>
        <textarea disabled="true" style="border: none;background-color:inherit; width: 100%; resize:none; height: 115px">
          <ul>
            <li v-for="marka in proizvodjaci" :key="marka">
              ((marka))
            </li>
          </ul>
        </textarea>
      </code>
    </pre>
    <p>I to izlgeda ovako:</p>
    <ul>
      <li v-for="marka in proizvodjaci" :key="marka">
        {{marka}}
      </li>
    </ul>
    <p>v-model direktivu koristimo kada želimo da preuzmemo ili zadamo vrednost određenom input elementu:</p>
    <label>Obicno input polje:</label>
    <input type="text" v-model="modelTest" placeholder="Unesi vrednost">
    <p>Vrednost input polja:</p>
    <h4>{{modelTest}}</h4>
    <h4>Primer:</h4>
    <p>HTML</p>
    <pre>
      <code>
        <textarea disabled="true" style="border: none;background-color:inherit; width: 100%; resize:none;">
          <input type="text" v-model="modelTest">
        </textarea>
      </code>
    </pre>
    <p>Vue.js</p>
    <pre>
      <code>
        data () {
          return {
            modelTest: 'Hello'
          }
        }
      </code>
    </pre>
    <p>Za spisak svih direktiva posetite oficijalnu <a href="vuejs.org" target="blank">dokumentaciju</a> vue.js framework-a.</p>
  </div>
</template>

<script>
export default {
  name: 'Vuejs',
  data () {
    return {
      msg: 'Ovaj tekst će biti prikazan u zavisnosti od vrednosti showMsg promenljive',
      showMsg: true,
      redButton: 'red-button',
      modelTest: 'Hello',
      proizvodjaci: ['Honda', 'Škoda', 'BMW', 'Audi', 'Toyota']
    }
  },
  methods: {
    toggleMessage () {
      this.showMsg = !this.showMsg
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .red-button {
    background-color: red;
  }
</style>
