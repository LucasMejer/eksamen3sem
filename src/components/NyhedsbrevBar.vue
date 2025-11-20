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
     <div class="intro__section--nyhedsbrev">
        <div class="nyhedsbrevBarDiv">
            <div class="nyhedsbrevBarInputDiv">
                <input type="text" placeholder="Skriv din e-mail her..." class="emailInput" v-model="mail">
                <button class="nyhedsbrevButton" v-on:click="sendMail">TILMELD DIG</button>
                <p class="nyhedsbrevOverskrift" v-if="erTilmeldt">
                  Du er nu tilmeldt!
                </p>
                <p class="nyhedsbrevFejl" v-if="tilmeldFejl">
                  Ikke gyldig mail
                </p>
            </div>
            <div class="intro__text--nyhedsbrev">
              <h2>TILMELD DIG VORES NYHEDSBREV</h2>
                <p>Vi sender et nyhedsbrev 1-4 gange om måneden med nyheder, </p>
                <p>gode tilbud og informationer. Du kan altid afmelde dig nyhedsbrevet</p>
                <p>nederst i nyhedsbrevet, eller kontakte os for at blive afmeldt.</p>
            </div>
        </div>
    </div>
</template>
