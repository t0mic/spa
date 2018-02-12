<template>
  <div class="hello">
    <h1>Single-Page Application</h1>
    <p>
      Single-page application predstavlja vrstu web aplikacije koja radi unutar pretraživača i ne zahteva dodatno učitavanje strana prilikom upotrebe. Ovakav tip aplikacija koristimo svakodnevno. Koristimo ovaj vid web aplikacije kada koristimo Gmail, Google Maps, Facebook ili GitHub. SPA se zasnivaju na prikazivanju sadržaja i imitaciji "prirodnog" okruženja u pretraživaču. Nema osveživanja strane - nema dodatnog čekanja. Sve je jedna web strana a ono što mi kao korisnici vidimo na ekranu kontroliše JavaScript.
    </p>
    <p>
      SPA dobija markup strane i podatke nezavisno, renderovanje strane se izvršava direktno u prozoru pretraživača. Ovo je moguće izvesti korišćenjem JavaScript fremvorkova kao što su: VueJS, AngularJS, React, Ember.js itd...
      SPA pomažu korisniku da ostane u jednom "udobnom" web prostoru gde je sadržaj predstavljen korisniku na jednostavan i čitljiv način.
    </p>
    <h1>Prednosti SPA</h1>
    <ul>
      <li>SPA su brze jer se većina resursa (HTML + CSS + Scripts) učitaju jednom u toku životnog ciklusa aplikacije (dok je uključena u pretraživaču). Podaci su jedina stvar koja se prenosi kroz aplikaciju.</li>
      <li>Razvoj aplikacija je pojednostavljen i usmeren. Nema potrebe za pisanje koda koji se renderuje na serveru.</li>
      <li>SPA se lako debaguju uz pomoć Chrome Developer Tool-a jer možemo da pratimo celokupan tok učitavanja pojedinih delova aplikacije.</li>
      <li>Lakše pravljenje mobilnih aplikacija jer developer može da koristi isti backend kod za pravljanje web i native aplikacije.</li>
      <li>SPA može da kešira podatke vrlo efikasno. Aplikacija šalje samo jedan zahtev, čuva podatke i potom koristi te podatke. Ovakve aplikacije mogu da rade i kada ostanemo bez internet konekcije.</li>
    </ul>
    <h1>Mane SPA:</h1>
    <ul>
      <li>Nije lako vršiti SEO optimizaciju Single-Page Aplikacija iz razloga što se sadržaj učitava asinhrono AJAX-om</li>
      <li>Zahteva upaljen JavaScript kako bi sadržaj mogao da bude pavilno prikazan.</li>
      <li>U poređenju sa standardnim web aplikacijama SPA su manje sigurnije zbog XSS (Cross-Site Scripting). Napadač može lakše da ubaci klijentske skripte.</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Uvod',
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
