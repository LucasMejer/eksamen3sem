<script setup>
import { ref } from "vue"

let popupTrigger = ref(false);
let tilmeldOverskrift = "";

function openPopup(Overskrift){
  tilmeldOverskrift = Overskrift;
  popupTrigger.value = true;
}

function tilmedButton(){
  popupTrigger.value = false;
}

</script>

<template>

  <div v-if="popupTrigger">
    <div class="popup">
    <div class="popup-inner">
      <p>
        Tilmelding til {{ tilmeldOverskrift }}
      </p>
      <button class="tilmedButton" v-on:click="tilmedButton">
        Tilmeld
      </button>
    </div>
  </div>
</div>


  <hr class="eventhr" />
  <div class="eventOpslagDiv">
    <img src="/mikeandersen.png" alt="">
    <div class="eventTekstDiv">
      <h1>Mike Andersen Instore Koncert & Album Release</h1>
      <p class="eventAdresse">Nørrebrogade 5C, 7100 Vejle, Danmark</p>
      <p>Instore koncert i Vejle med den prisvindende bluesmusiker Mike Andersen.
        Efter næsten tre årtier på scenen er Mike Andersen klar med sit 10. studiealbum "All Out Of Love" -
        et personligt og kompromisløst værk, der kredser om livet på den anden side af en skilsmisse.
        Albummet er skabt i tæt samarbejde med producer Christian Ki, og sammen har de kastet alle genre-regler over bord for at finde en lyd,
        der er lige så fri som den er nærværende.
         </p>
        <p>
          Gratis entré, Gratis øl/vand, Mulighed for køb af signeret LP/CD,  Oplagt fredagsbar!
        </p>
    </div>
    <div class="eventDatoDiv">
      <div class="datoInformation">
        <h2>SEP</h2>
        <h2>26</h2>
        <h2>2025</h2>
        <h3>KL 16:00</h3>
      </div>
      <button class="eventButton" v-on:click="openPopup(`Mike Andersen Instore Koncert & Album Release`)">PÅMIND MIG</button>
    </div>
  </div>


  <hr class="eventhr" />
  <div class="eventOpslagDiv">
    <img src="/jacobaksglaede.png" alt="">
    <div class="eventTekstDiv">
      <h1>Jacob Aksglæde Instore Koncert & Album Release</h1>
      <p class="eventAdresse">Sankt Knuds Kirkestr. 2A, 5000 Odense, Denmark</p>
      <p>Jacob Aksglaede udgiver sit nye album "Blåbærvej" - og det er tilmed hans fødselsdag!
        Vi fejrer det i vores Odense-butik, hvor Jacob spiller en instore-koncert og vi byder på lidt godt til ganen.
        Du kan selvfølgelig også købe et signeret eksemplar af LP'en!
         </p>
        <p>
          Gratis entré, Gratis øl/vand, Mulighed for køb af signeret LP/CD
        </p>
    </div>
    <div class="eventDatoDiv">
      <div class="datoInformation">
        <h2>SEP</h2>
        <h2>19</h2>
        <h2>2025</h2>
        <h3>KL 15:00</h3>
      </div>
      <button class="eventButton" v-on:click="openPopup(`Jacob Aksglæde Instore Koncert & Album Release`)">PÅMIND MIG</button>
    </div>
  </div>

  <hr class="eventhr" />
  <div class="eventOpslagDiv">
    <img src="/lagersalg.png" alt="">
    <div class="eventTekstDiv">
      <h1>Lagersalg på vestrebro</h1>
      <p class="eventAdresse">Vesterbro 13, 5000 Odense C</p>
      <p>Vores populære lagersalg er tilbage for første gang i mange år!
        Vi rydder op på lageret med billige varer fra 5 kroner stykket!+1000 LP'er fra 5 kroner,
        Flere hundrede 7" singler til 5 kroner, Flere hundrede CD'er fra 5 kroner, Flere hundrede DVD'er fra 5 kroner,
        En god stak kassettebånd fra 5 kroner, Tøj (merchandise, vintage m.m.) fra 20 kroner
        Gratis øl/vand
         </p>
        <p>
          Bemærk: Grundet rod på lageret, vil det meste af salget foregå ude i gården og kun en lille del af salget vil være indenfor.
        </p>
    </div>
    <div class="eventDatoDiv">
      <div class="datoInformation">
        <h2>JULI</h2>
        <h2>21</h2>
        <h2>2025</h2>
        <h3>KL 13 - 16</h3>
      </div>
      <button class="eventButton" v-on:click="openPopup(`Lagersalg på vestrebro`)">PÅMIND MIG</button>
    </div>
  </div>
</template>
