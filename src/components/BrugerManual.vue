<script setup>
    function scrollTo(id) {
        const el = document.getElementById(id)
        if (el) {
            el.scrollIntoView({behavior: 'smooth'})
        }
    }
</script>

<template>
    <div class="apply">

        <h1>Brugermanual til events</h1>
        <div class="sections__steps">
            <div class="content__steps">
                    <h2>Indholdsfortegnelse</h2>
                    <div class="buttons__grid">
                        <button @click="scrollTo('install')">1. Installér programmer</button>
                        <button @click="scrollTo('vue')">2. Opret Vue</button>
                        <button @click="scrollTo('firebase')">3. Opret Firebase</button>
                        <button @click="scrollTo('firebasevue')">4. Tilføj Firebase til Vue</button>
                        <button @click="scrollTo('routing')">5. Opsæt routing</button>
                        <button @click="scrollTo('komponenter')">6. Lav komponenter</button>
                        <button @click="scrollTo('data')">7. Datafunktionalitet</button>
                        <button @click="scrollTo('styling')">8. Styling og layout</button>
                        <button @click="scrollTo('udvikling')">9. Udvikling af komponenter</button>
                        <button @click="scrollTo('deploy')">10. Build og Deploy</button>
                        <button @click="scrollTo('test')">11. Test og fejlfinding</button>
                        <button @click="scrollTo('drift')">12. Drift og vedligeholdelse</button>
                    </div>
            </div>

            <div class="first__step" id="install">
                    <h2>1. Installér de nødvendige programmer</h2>
                    <h3>1.1 Installér Node.js</h3>
                    <p>Node bruges til at køre Vue-projekter og npm-kommandoer.</p>
                    <h3>1.2 Installér Vue CLI eller Vite</h3>
                    <p>Vite bruges til at oprette og køre Vue-projekter hurtigt og moderne.</p>
                    <p>Vi har brugt Vue, fordi det gør det nemt at bygge en interaktiv og dynamisk side.</p>
                    <p>Kommando: npm create vite@latest</p>
                    <h3>1.3 Installér Firebase CLI</h3>
                    <p>Firebase CLI gør det muligt at logge ind, initialere og deploye projektet.</p>
                    <p>Vi bruger Hosting, fordi siden er statisk, og almindelig hosting er enklere at implementere. Vi bruger Realtime Database, fordi vi har brug for hurtige realtidsopdateringer.</p>
                    <p>Kommando: npm install -g firebase-tools</p>
                    <h3>1.4 Opret Google-konto</h3>
                    <p>Firebase kræver en Google-konto for adgang til Console og Hosting.</p>
                    <h3>1.5 Installér VS Code</h3>
                    <p>VS Code er udviklingsværktøjet til at skrive og administrere projektets filer.</p>
            </div>

            <div class="second__step" id="vue">
                    <h2>2. Opret nyt Vue-projekt</h2>
                    <h3>2.1 Initialisér Vue projekt</h3>
                    <p>Opretter et nyt Vue-projekt via Vite og gør det klar til udvikling.</p>
                    <p>Kommando: npm create vite@latest my-vue-app --template vue</p>
                    <p>cd my-vue-app</p>
                    <p>npm install</p>
                    <h3>2.2 Mappestruktur gennemgang</h3>
                    <p>Introduktion til mapper som src/, components/ og public/.</p>
                    <h3>2.3 Start projektet lokalt</h3>
                    <p>Starter udviklingsserveren så siden kan ses live i browseren.</p>
                    <p>Kommando: npm run dev</p>
                    <h3>2.4 Opsætning af komponentmappestruktur</h3>
                    <p>Organiserer komponenter og views i en logisk mappestruktur.</p>
                    <img src="/componentsPicture.png" alt="komponenter opsat i orden under components-mappen">
            </div>

            <div class="first__step" id="firebase">
                <h2>3. Opret Firebase-projekt</h2>
                <h3>3.1 Initialisér Git repo</h3>
                <p>Opretter versionsstyring og forbedrer projektet til Github.</p>
                <h3>3.2 Push til Github</h3>
                <p>Uploader projektet til Github for backup og samarbejde.</p>
                <h3>3.3 Beskrivelse af filstruktur for versionsstyring</h3>
                <p>Gennemgår hvilke filer, der bør versionsstyres, og hvilke der ikke skal.</p>
            </div>

            <div class="second__step" id="firebasevue"> 
                    <h2>4. Tilføj Firebase til Vue</h2>
                    <h3>4.1 Log in i Firebase</h3>
                    <p>Forbinder terminalen til Firebase-kontoen.</p>
                    <p>Kommando: firebase login og aktivér Firebase Console</p>
                    <h3>4.2 Opret nyt Firebase projekt</h3>
                    <p>Laves i Firebase Console, og bruges som backend for Vue-projektet.</p>
                    <h3>4.3 Aktiver Firebase Hosting</h3>
                    <p>Gør det muligt at hoste Vue-projektet online.</p>
                    <h3>4.4 Aktiver Firebase Database</h3>
                    <p>Realtime Database bruges til at gemme og hente data fra projektet.</p>
                <img src="/eventsDatabase.png" alt="eksempel på database i Firebase">
            </div>

            <div class="first__step" id="routing">
                    <h2>5. Opsæt routing i Vue</h2>
                    <h3>5.1 Installér Firebase i Vue</h3>
                    <p>Installerer Firebase-pakken som giver adgang til hosting og database.</p>
                    <p>Kommando: npm install firebase</p>
                    <h3>5.2 Opret firebase.js i /src mappen</h3>
                    <p>En fil hvor Firebase appen initialeres og eksporteres.</p>
                    <h3>5.3 Indsæt Firebase credentials</h3>
                    <p>Kopier dit projekt til API-nøgler og konfiguration fra Firebase Console.</p>
                    <h3>5.4 Initialisér Firebase App</h3>
                    <p>Starter Firebase i projektet så database og hosting kan bruges.</p>
                    <h3>5.5 Eksportér Firebase database</h3>
                    <p>Gør databasen tilgængelig i dine komponenter.</p>
                <img src="/routingExp.png" alt="de forskellige links sat op til routing i en index.js">
            </div>

            <div class="second__step" id="komponenter">
                <h2>6. Lav komponenter og sider</h2>
                <h3>6.1 Læse data fra databasen</h3>
                <p>Henter data fra Firebase og viser det i Vue-komponenter.</p>
                <h3>6.2 Skrive data til databasen</h3>
                <p>Sender nye data til Firebase via push() eller set().</p>
                <h3>6.3 Realtime listeners ??</h3>
                <p>Lytter efter ændringer i databasen i realtid.</p>
                <h3>6.4 Strukturering af data i Firebase</h3>
                <p>Organiserer dine data i klare, navngivne noder.</p>
                <h3>6.5 Error handling og validering</h3>
                <p>Forhindrer ugyldige inputs og viser fejlbeskeder</p>
            </div>

            <div class="first__step" id="data">
                <h2>7. Lav datafunktionalitet</h2>
                <h3>7.1 Installér Vue Router</h3>
                <p>Gør det muligt at navigere mellem sider uden reload.</p>
                <p>npm install vue-router</p>
                <h3>7.2 Opret routes</h3>
                <p>Definerer hvilke komponenter der vises ved forskellige URL'er.</p>
                <h3>7.3 Opret views</h3>
                <p>Views er hele sider, der bruges sammen med routeren.</p>
                <h3>7.4 Aktiv navigation i navbar</h3>
                <p>Bruger router-link til at navigere mellem sider.</p>
            </div>

            <div class="second__step" id="styling">
                    <h2>8. Tilføj styling og layout</h2>
                    <h3>8.1 Opret SCSS struktur</h3>
                    <p>Opdel styling i globale filer og komponentfiler.</p>
                    <h3>8.2 Brug af globale styles</h3>
                    <p>Definer generelle farver, fonte og reset CSS ét sted.</p>
                    <h3>8.3 Brug af komponentbaseret styling</h3>
                    <p>Hver .vue-fil har sin egen scoped styling.</p>
                    <h3>8.4 Implementering af responsivt design</h3>
                    <p>Sikrer layout fungerer på både mobil og desktop.</p>
                    <h3>8.5 Brug af font libraries og ikoner</h3>
                    <p>Tilføjer typografi og ikoner via fx Google Fonts og Font Awesome.</p>
                <img src="/cssFiles.png" alt="hvordan farver er sat op i css som et seperat dokument udover den originale css-fil">
            </div>

            <div class="first__step" id="udvikling">
                <h2>9. Udvikling af komponenter</h2>
                <h3>9.1 Opbyg Navbar-komponent</h3>
                <p>Kaver menuen med router-links og mobilversion.</p>
                <h3>9.2 Opbyg Footer-komponent</h3>
                <p>Nederste sektion med kontaktinfo og links.</p>
                <h3>9.3 Opbyg Produktvisning / karusel</h3>
                <p>Viser produkter dynamisk og kan bladre mellem elementer.</p>
                <h3>9.4 Opbyg Event-side</h3>
                <p>Viser kommende events hentet fra databasen.</p>
                <h3>9.5 Opbyg Kontaktformular</h3>
                <p>Sender kontaktinformatiner til databasen.</p>
                <h3>9.6 Integration med Firebase ved tilmelding</h3>
                <p>Push'er deltagerdata til databasen når en bruger tilmelder sig.</p>
            </div>

            <div class="second__step" id="deploy">
                <h2>10. Build og Deploy til Firebase Hosting</h2>
                <h3>10.1 Log ind i Firebase via terminal.</h3>
                <p>Forbinder terminalen med Firebase-kontoen.</p>
                <p>Kommando: firebase login</p>
                <h3>10.2 Initialisér Firebase hosting.</h3>
                <p>Opsætter hosting-mappen og projektet til deployment.</p>
                <p>Kommando: firebase init hosting</p>
                <h3>10.3 Vælg build folder - dist</h3>
                <p>Dist-mappen indeholder det færdige 'build' efter kommandoen 'npm run build'.</p>
                <h3>10.4 Build Vue-projekt.</h3>
                <p>Genererer en optimeret, klar-til-hosting version af projektet.</p>
                <p>Kommando: npm run build</p>
                <h3>10.5 Deploy til Firebase.</h3>
                <p>Lægger projektet online på Firebase Hosting.</p>
                <p>Kommando firebase deploy</p>
            </div>

            <div class="first__step" id="test">
                <h2>11. Test og fejlfinding</h2>
                <h3>11.1 Test lokal build</h3>
                <p>Brug 'npm run preview' for at teste build lokalt.</p>
                <h3>11.2 Test live-siden på Hosting URL</h3>
                <p>Kontrollér den offentliggjorte side for fejl og layout.</p>
                <h3>11.3 Brug Firebase Debugging Tools</h3>
                <p>Overvåg database, regler og logfiler i Firebase Consol.</p>
                <h3>11.4 Håndtering af fejl i databasen og deployment</h3>
                <p>Find og ret typiske fejl i konfiguration, regler eller build.</p>
            </div>

            <div class="second__step" id="drift">
                <h2>12. Drift og vedligeholdelse</h2>
                <h3>12.1 Opdatering i Firebase</h3>
                <p>Hold hosting, database og ergler opdateret i konsollen.</p>
                <h3>12.2 Opdatering af Vue- eller npm-pakker</h3>
                <p>Sørger for at projektet forbliver sikkert og up to date.</p>
                <h3>12.3 Håndtering af nye komponenter</h3>
                <p>Tilføj nye views, routes og funktioner afhængig af behov.</p>
                <h3>12.4 Backup af database</h3>
                <p>Eksporter data fra Firebase løbende.</p>
                <h3>12.5 Versionsstyring og Github workflow</h3>
                <p>Arbejd med commits, branches og pull requests.</p>
            </div>

        </div>

            <hr class="eventhr"></hr>

       <div class="faq__section">
            <h2>FAQ</h2>
            <div class="faq__boxes">

                <div>
                    <h3>Hvordan installerer jeg Vue?</h3>
                    <p>Skriv i terminalen i den korrekte installationsmappe 'npm install vite@latest'</p>
                    <p>Så vil du automatisk installere den nyeste version af Vue.</p>
                    <p>Herefter skal du gennem nogle forskellige afkrydsningsfelter.</p>
                </div>

                <div>
                    <h3>Hvilke bokse skal jeg vinge af i Firebase installation?</h3>
                    <p>Der skal vælges Realtime Database. Der kan også vælges Firestone Database, afhængig af behov.</p>
                    <p>Hosting skal vælges. Der vil også være mulighed for App Hosting, afhængig af behov.</p>
                </div>

                <div>
                    <h3>Hvordan tilføjer jeg en ny farve til siden?</h3>
                    <p>I CSS-filen under /assets er '_colors.scss'</p>
                    <p>I denne kan der tilføjes en farve ved at skrive '$'et navn': #'en farve';'</p>
                </div>

                <div>
                    <h3>Hvordan skal en ny .vue fil se ud?</h3>
                    <p>Øverst skal man have Javascript-delen altså &lt;script setup&gt;&lt;/script&gt;. Hvorefter man har &lt;template&gt;&lt;/template&gt;</p>
                </div>

             </div>
             <div class="contact">
                <h2>Har du yderligere spørgsmål?</h2>
                <p>Har du yderligere spørgsmål, er du velkommen til at tage fat i vores udviklerteam:</p>
                <br>
                <p>Lucas Jæger</p>
                <p>E-Mail: luja66888@edu.ucl.dk</p>
                <br>
                <p>Lucas Mejer</p>
                <p>lucas.mm@live.dk</p>
            </div>
        </div>
    </div>
</template>