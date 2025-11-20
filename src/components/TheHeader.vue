<script setup>

/* HAMBURGERMENU */
import { onMounted } from 'vue'

onMounted(() => {

  // HAMBURGER MENU
  const menuToggle = document.querySelector('.menu__toggle')
  const linkSites = document.querySelector('.link__sites')

  if (menuToggle && linkSites) {

    // Toggle hele menu-containeren
    menuToggle.addEventListener('click', () => {
      linkSites.classList.toggle('active')
    })

    // Luk menu når et link klikkes
    const allLinks = linkSites.querySelectorAll('a')
    allLinks.forEach(link => {
      link.addEventListener('click', () => {
        linkSites.classList.remove('active')
      })
    })
  }

  // FOOTER KNAPPER
  const coll = document.querySelectorAll('.button__collapsible')

  coll.forEach(button => {
    button.addEventListener('click', () => {
      button.classList.toggle('active')
      const content = button.nextElementSibling

      if (content.style.display === 'block') {
        content.style.display = 'none'
      } else {
        content.style.display = 'block'
      }
    })
  })
})


</script>

<template>

<head>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;600&family=Playfair+Display:wght@500;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css" integrity="sha512-5Hs3dF2AEPkpNAR7UiOHba+lRSJNeM2ECkwxUIxC1Q/FLycGTbNapWXB4tP889k5T5Ju8fs4b1P5z/iB4nMfSQ==" crossorigin="anonymous" referrerpolicy="no-referrer">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>

<!-- NAV BAR FIRST -->

<body>
    <nav class="navbar__info">
        <div class="info__text">
            <p>Specialforretning for lp'er, cd'er og dvd'er | Fri fragt i Danmark ved køb over 700,-</p>
        </div>
        <div class="info__reviews">
            <p>4,7</p>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half"></i>
            <p><u>365 anmeldelser</u> på Google</p>
            
            <div class="denmark__image">
                <img src="/public/flag_of_denmark.png" alt="flag af danmark til skift af sprog">
            </div>
        </div>
    </nav>

<!-- LOGO NAV BAR WITH SHOP -->

    <nav class="navbar__name">

        <div class="menu__toggle">
            <span class="menu__bar"></span>
            <span class="menu__bar"></span>
            <span class="menu__bar"></span>
        </div>

        <div class="name__moby">
            <img src="/public/mobydisc_horizontal_black.png" alt="logo til forside øverst nav bar moby disc">

            <div class="shop__logos">
                <div class="logo__cart">
                    <a href="#" class="fa-solid fa-magnifying-glass"></a>
                </div>
                <div class="logo__search">
                    <a href="#" class="fa-solid fa-cart-shopping"></a>
                </div>
                <div class="logo__user">
                    <a href="#" class="fa-solid fa-user"></a>
                </div>
            </div>
        </div>
    </nav>

<!-- HAMBURGER MENU -->

    <nav class="navbar__menu">
        <div class="link__sites">
            <ul class="nav__links--first">
                <li><router-link to="/" class="router-link-active">VINYL</router-link></li>
                <li><router-link to="/cd">CD</router-link></li>
                <li><router-link to="/cd">FILM</router-link></li>
                <li><router-link to="/cd">TILBEHØR</router-link></li>
                <li><router-link to="/cd">FORUDBESTILLING</router-link></li>
            </ul>

            <ul class="nav__links--second">
                <li><router-link to="/cd">OM OS</router-link></li>
                <li><router-link to="/events">EVENTS</router-link></li>
                <li><router-link to="/kontakt">KONTAKT</router-link></li>
            </ul>
        </div>
    </nav>
</body>

</template>
