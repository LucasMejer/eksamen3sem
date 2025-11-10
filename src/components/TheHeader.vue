<script setup>

/* HAMBURGERMENU */
import { onMounted } from 'vue'

onMounted(() => {
  // HAMBURGER MENU
  const menuToggle = document.querySelector('.menu__toggle')
  const navLinksAll = document.querySelectorAll('.nav__links--first, .nav__links--second')

  if (menuToggle && navLinksAll.length > 0) {
    menuToggle.addEventListener('click', () => {
      navLinksAll.forEach(nav => nav.classList.toggle('active'))
    })

    navLinksAll.forEach(nav => {
      const links = nav.querySelectorAll('a')
      links.forEach(link => {
        link.addEventListener('click', () => {
          navLinksAll.forEach(n => n.classList.remove('active'))
        })
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
});

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
            <div class="telefon">
                <i class="fa-solid fa-phone icon"></i>
                +45 66 14 41 48
            </div>

            <div class="email">
                <i class="fa-solid fa-envelope icon"></i>
                post@moby-disc.dk
            </div>
        </div>

        <div class="some__logos">
            <div class="instagram">
                <a href="#" class="fa fa-instagram"></a>
            </div>

            <div class="facebook">
                <a href="#" class="fa fa-facebook-f"></a>
            </div>
        </div>
    </nav>

<!-- LOGO NAV BAR WITH SHOP -->

    <nav class="navbar__name">
        <div class="name__moby">
            <img src="/public/mobydisc_logotype_fullcolor_rgb.png" alt="logo til forside øverst nav bar moby disc">
        </div>

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
    </nav>

<!-- HAMBURGER MENU -->

    <nav class="navbar__menu">
        <div class="link__sites">    
            <ul class="nav__links--first">
                <li><a href="#" class="activated">VINYL</a></li>
                <li><a href="#">CD</a></li>
                <li><a href="#">FILM</a></li>
                <li><a href="#">TILBEHØR</a></li>
                <li><a href="#">FORUDBESTILLING</a></li>
            </ul>

            <ul class="nav__links--second">
                <li><a href="#">OM OS</a></li>
                <li><a href="#">EVENTS</a></li>
                <li><a href="#">KONTAKT</a></li>
            </ul>
        </div>

        <div class="menu__toggle">
            <span class="menu__bar"></span>
            <span class="menu__bar"></span>
            <span class="menu__bar"></span>
        </div>
    </nav>

<!-- SCROLL UP KNAP -->

  <button id="scrollUpBtn"><i class="fa-solid fa-chevron-up"></i></button>


</body>
 
</template>