<script setup>
import { ref } from "vue"

let popupTrigger = ref(false);
let afmeldTrigger = ref(false);
let tilmeldOverskrift = "";
let eventImg = ref("");
let eventList = [
  {
    "EventNavn": "Mike Andersen Instore Koncert & Album Release",
    "EventID" : "01",
    "EventActive" : localStorage.getItem("01") === "true" ? true : false,
  },
  {
    "EventNavn": "Jacob Aksglæde Instore Koncert & Album Release",
    "EventID" : "02",
    "EventActive" : localStorage.getItem("02") === "true" ? true : false
  },
  {
    "EventNavn": "Lagersalg på vestrebro",
    "EventID" : "03",
    "EventActive" : localStorage.getItem("03") === "true" ? true : false
  }
];
let currentEvent = "";

//Tilmeld Funktioner
function openPopup(Overskrift, EventIndex, Img){
  currentEvent = EventIndex;
  tilmeldOverskrift = Overskrift;
  eventImg.value = Img;
  popupTrigger.value = true;
}

async function tilmeldButton(){
  eventList[currentEvent].EventActive = true;
  localStorage.setItem(`${eventList[currentEvent].EventID}`, `${eventList[currentEvent].EventActive}`);
  popupTrigger.value = false;
  try {
    // 1. Get current value
      const getRes = await fetch(`https://eksamen3sem-40c2e-default-rtdb.europe-west1.firebasedatabase.app/event${eventList[currentEvent].EventID}/tilmeldinger.json`);
      let currentValue = await getRes.json(); // current number
      if (!currentValue) currentValue = 0;

      // 2. Increment
      const newValue = currentValue + 1;

      // 3. Write it back
      const res = await fetch(`https://eksamen3sem-40c2e-default-rtdb.europe-west1.firebasedatabase.app/event${eventList[currentEvent].EventID}/tilmeldinger.json`, {
          method: "PUT",
          body: JSON.stringify(newValue),
      });

      if (!res.ok) throw new Error("Failed to update tilmeldinger");
  } catch (error) {
      console.error(error);
  }
}

//Afmeld Funktioner
function afmeldPopup(Overskrift, EventIndex, Img){
  currentEvent = EventIndex;
  tilmeldOverskrift = Overskrift;
  eventImg.value = Img;
  afmeldTrigger.value = true;
}

async function afmeldButton(){
  eventList[currentEvent].EventActive = false;
  localStorage.setItem(`${eventList[currentEvent].EventID}`, `${eventList[currentEvent].EventActive}`);
  afmeldTrigger.value = false;
  try {
    // 1. Get current value
      const getRes = await fetch(`https://eksamen3sem-40c2e-default-rtdb.europe-west1.firebasedatabase.app/event${eventList[currentEvent].EventID}/tilmeldinger.json`);
      let currentValue = await getRes.json(); // current number
      if (!currentValue) currentValue = 0;

      // 2. Increment Minus
      const newValue = currentValue - 1;

      // 3. Write it back
      const res = await fetch(`https://eksamen3sem-40c2e-default-rtdb.europe-west1.firebasedatabase.app/event${eventList[currentEvent].EventID}/tilmeldinger.json`, {
          method: "PUT",
          body: JSON.stringify(newValue),
      });

      if (!res.ok) throw new Error("Failed to update tilmeldinger");
  } catch (error) {
      console.error(error);
  }
}

//Annuller Button
function annullerButton(){
  popupTrigger.value = false;
  afmeldTrigger.value = false;
}


</script>

<template>

  <div v-if="popupTrigger">
    <div class="popup">
    <div class="popup-inner">
      <img v-bind:src="eventImg" class="popupImage">
      <p>
        Vil du tilmelde dig
      </p>
      <p class="popupTekst">
        {{ tilmeldOverskrift }}
      </p>
      <div>
        <button class="tilmeldButton" v-on:click="annullerButton">
        Annuller
        </button>
        <button class="tilmeldButton" v-on:click="tilmeldButton">
        Tilmeld
        </button>
      </div>
    </div>
  </div>
</div>

<div v-if="afmeldTrigger">
    <div class="popup">
    <div class="popup-inner">
      <img v-bind:src="eventImg" class="popupImage">
      <p>
        Er du sikker på du vil afmelde dig
      </p>
      <p class="popupTekst">
        {{ tilmeldOverskrift }}
      </p>
      <div>
        <button class="tilmeldButton" v-on:click="annullerButton">
        Annuller
        </button>
        <button class="tilmeldButtonActive" v-on:click="afmeldButton">
        Afmeld
      </button>
      </div>
    </div>
  </div>
</div>


  <hr class="eventhr" />
  <div class="eventOpslagDiv">
    <img src="/mikeandersen.png" alt="">
    <div class="eventTekstDiv">
      <h2>Mike Andersen Instore Koncert & Album Release</h2>
      <p class="eventAdresse">Nørrebrogade 5C, 7100 Vejle, Danmark</p>
      <p class="eventDesc">Instore koncert i Vejle med den prisvindende bluesmusiker Mike Andersen.
        Efter næsten tre årtier på scenen er Mike Andersen klar med sit 10. studiealbum "All Out Of Love" -
        et personligt og kompromisløst værk, der kredser om livet på den anden side af en skilsmisse.
        Albummet er skabt i tæt samarbejde med producer Christian Ki, og sammen har de kastet alle genre-regler over bord for at finde en lyd,
        der er lige så fri som den er nærværende.
      </p>
      <p class="eventDesc">
        Gratis entré, Gratis øl/vand, Mulighed for køb af signeret LP/CD,  Oplagt fredagsbar!
      </p>
    </div>
    <div class="eventDatoDiv">
      <div class="datoInformation">
        <div>
          <h2>SEP</h2>
          <h2 class="datoBold">26</h2>
          <h2>2025</h2>
        </div>
        <h2 class="datoTid">KL 16:00</h2>
      </div>
      <button v-if="eventList[0].EventActive == false" class="eventButton" v-on:click="openPopup(`Mike Andersen Instore Koncert & Album Release`, 0, `/mikeandersen.png`)">TILMELD DIG</button>
      <button v-if="eventList[0].EventActive == true" class="eventButtonActive" v-on:click="afmeldPopup(`Mike Andersen Instore Koncert & Album Release`, 0, `/mikeandersen.png`)"></button>
    </div>
  </div>


  <hr class="eventhr" />
  <div class="eventOpslagDiv">
    <img src="/jacobaksglaede.png" alt="">
    <div class="eventTekstDiv">
      <h2>Jacob Aksglæde Instore Koncert & Album Release</h2>
      <p class="eventAdresse">Sankt Knuds Kirkestr. 2A, 5000 Odense, Denmark</p>
      <p class="eventDesc">Jacob Aksglaede udgiver sit nye album "Blåbærvej" - og det er tilmed hans fødselsdag!
        Vi fejrer det i vores Odense-butik, hvor Jacob spiller en instore-koncert og vi byder på lidt godt til ganen.
        Du kan selvfølgelig også købe et signeret eksemplar af LP'en!
         </p>
        <p class="eventDesc">
          Gratis entré, Gratis øl/vand, Mulighed for køb af signeret LP/CD
        </p>
    </div>
    <div class="eventDatoDiv">
      <div class="datoInformation">
        <div>
          <h2>SEP</h2>
          <h2 class="datoBold">19</h2>
          <h2>2025</h2>
        </div>
        <h2 class="datoTid">KL 15:00</h2>
      </div>
      <button v-if="eventList[1].EventActive == false" class="eventButton" v-on:click="openPopup(`Jacob Aksglæde Instore Koncert & Album Release`, 1, `/jacobaksglaede.png`)">TILMELD DIG</button>
      <button v-if="eventList[1].EventActive == true" class="eventButtonActive" v-on:click="afmeldPopup(`Jacob Aksglæde Instore Koncert & Album Release`, 1, `/jacobaksglaede.png`)"></button>
      </div>
  </div>

  <hr class="eventhr" />
  <div class="eventOpslagDiv">
    <img src="/lagersalg.png" alt="">
    <div class="eventTekstDiv">
      <h2>Lagersalg på vestrebro</h2>
      <p class="eventAdresse">Vesterbro 13, 5000 Odense C</p>
      <p class="eventDesc">Vores populære lagersalg er tilbage for første gang i mange år!
        Vi rydder op på lageret med billige varer fra 5 kroner stykket!+1000 LP'er fra 5 kroner,
        Flere hundrede 7" singler til 5 kroner, Flere hundrede CD'er fra 5 kroner, Flere hundrede DVD'er fra 5 kroner,
        En god stak kassettebånd fra 5 kroner, Tøj (merchandise, vintage m.m.) fra 20 kroner
        Gratis øl/vand
         </p>
        <p class="eventDesc">
          Bemærk: Grundet rod på lageret, vil det meste af salget foregå ude i gården og kun en lille del af salget vil være indenfor.
        </p>
    </div>
    <div class="eventDatoDiv">
      <div class="datoInformation">
        <div>
          <h2>JULI</h2>
          <h2 class="datoBold">21</h2>
          <h2>2025</h2>
        </div>
        <h2 class="datoTid">KL 13 - 16</h2>
      </div>
      <button v-if="eventList[2].EventActive == false" class="eventButton" v-on:click="openPopup(`Lagersalg på vestrebro`, 2, `/lagersalg.png`)">TILMELD DIG</button>
      <button v-if="eventList[2].EventActive == true" class="eventButtonActive" v-on:click="afmeldPopup(`Lagersalg på vestrebro`, 2, `/lagersalg.png`)"></button>
    </div>
  </div>
</template>
