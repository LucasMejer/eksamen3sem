<script setup>
import { onMounted, ref } from "vue"

const vinyls = [
  {name:"Magna - LP", artist:"Aphaca", src:"/aphaca.png", key:"vinyl-1", price:"219,95 DKK"},
  {name:"Tændstikmand - CD (Signeret)", artist:"Hjalmer", src:"/hjalmer.png", key:"vinyl-2", price:"139,95 DKK"},
  {name:"When We All Fall Asleep, Where Do We Go - LP (Gul vinyl)", artist:"Billie Eilish", src:"/billie.jpg", key:"vinyl-3", price:"219,95 DKK"},
  {name:"Rasmus Seebach - LP (Grå vinyl)", artist:"Rasmus Seebach", src:"/rasmus.png", key:"vinyl-4", price:"219,95 DKK"},
  {name:"Chromakopia - 2LP (Hvid Vinyl)", artist:"Tyler, The Creator", src:"/tyler.jpg", key:"vinyl-5", price:"319,95 DKK"},
  {name:"Masterpiece - LP", artist:"Big Thief", src:"/bigthief.jpg", key:"vinyl-6", price:"219,95 DKK"},
  {name:"Imaginal Disk (Indie Exclusive Edition) - 2LP (Hvid Vinyl)", artist:"Magdalena Bay", src:"/magdalenabay.png", key:"vinyl-6", price:"679,95 DKK"}
]

// How far we've slid
const currentIndex = ref(0)

// How many cards visible at once
let visibleCount = 4

function next() {
  if (currentIndex.value < vinyls.length - visibleCount) {
    currentIndex.value++
  } else {
    currentIndex.value = 0 // loop back
  }
}

function prev() {
  if (currentIndex.value > 0) {
    currentIndex.value--
  } else {
    currentIndex.value = vinyls.length - visibleCount // jump to end
  }
}

onMounted(() => {
  checkScreenSize();
  const mediaQuery = window.matchMedia("(max-width: 768px)");
  mediaQuery.addEventListener("change", checkScreenSize);
})


function checkScreenSize() {
  if (window.matchMedia("(max-width: 768px)").matches){
    visibleCount = 2
  }else if(window.matchMedia("(max-width: 1024px) and (min-width: 768px)").matches){
    visibleCount = 3
  }else if(window.matchMedia("(min-width: 1024px)").matches){
    visibleCount = 4
  }
}

</script>


<template>
  <h1 class="carouselHeader">Mest populære produkter</h1>
  <div class="productsDiv">
    <button v-on:click="prev" class="buttonLeft"></button>
    <div class="carousel">
      <div class="inner" :style="{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }">
        <div class="card" v-for="vinyl in vinyls" :key="vinyl.key">
          <img :src="vinyl.src" :alt="vinyl.name" />
          <p class="productTitle"> {{ vinyl.name }} </p>
          <p class="productArtist"> {{ vinyl.artist }} </p>
          <p class="productPrice"> {{ vinyl.price }} </p>
        </div>
      </div>
    </div>
    <button v-on:click="next" class="buttonRight"></button>
  </div>
</template>
