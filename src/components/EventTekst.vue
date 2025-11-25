<script setup>
import { ref } from "vue";

const mail = ref("");

let erTilmeldt = ref(false);
let tilmeldFejl = ref(false);

async function sendMail(){

  erTilmeldt.value = false;
  tilmeldFejl.value = false;

  if(mail.value.includes("@")){
    try {
        const res = await fetch ("https://eksamen3sem-40c2e-default-rtdb.europe-west1.firebasedatabase.app/mails.json", {
            method: "POST",
            body: JSON.stringify({
                mail: mail.value,
            }),
        });
        if(!res.status === 200){
            throw new Error("Could not register mail");
        }
    } catch(error) {
        console.error(error);
    }
    mail.value = "";
    erTilmeldt.value = true;
  }
  else{
    tilmeldFejl.value = true;
  }
};

</script>

<template>
  <div class="eventIntroTekstDiv">
    <h1 class="eventOverskrift">
      Events
    </h1>
    <p>Hos Moby Disc er musik mere end bare handel og køb af plader og CD'er - det handler om fællesskabet og menneskene bag.
      Derfor elsker vi at samle jer musikelskere og dele de fede øjeblikke med jer.
      Følg med på vores Instagram og Facebook, eller tilmeld dig vores nyhedsbrev for at holde dig opdateret
      om kommende events som pladesigneringer, in-store koncerter, lagersalg og mange andre fede musikoplevelser!
    </p>


    <h4>Har du brug for <span style="font-size: bold; color:#F9B333">hjælp</span> til at tilmelde dig et event, så klik på knappen her og få en step for step guide.</h4>
    <div class="guide__tilmelding">
      <p>Guide til til- og afmelding af events</p>
      <button class="guideButton">Se Guide</button>
    </div>

    <span class="nyhedsbrevOverskrift">
      Tilmeld dig Vores nyhedsbrev
    </span>
    <p class="nyhedsbrevTekst">Vi sender et nyhedsbrev 1-4 gange om måneden med nyheder, gode tilbud og informationer.
      Du kan altid afmelde dig nyhedsbrevet nederst i nyhedsbrevet, eller kontakte os for at blive afmeldt.
    </p>
    <div>
      <input type="text" placeholder="Skriv din e-mail her..." class="emailInput" v-model="mail">
      <button class="nyhedsbrevButton" v-on:click="sendMail">TILMELD DIG</button>
    </div>
    <p class="nyhedsbrevOverskrift" v-if="erTilmeldt">
      Du er nu tilmeldt!
    </p>
    <p class="nyhedsbrevFejl" v-if="tilmeldFejl">
      Ikke gyldig mail
    </p>
  </div>
</template>
