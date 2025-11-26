<script setup>
import { onMounted, ref } from "vue"

const vinyls = [
  {name:"Imaginal Disk (Indie Exclusive Edition) - 2LP (Hvid Vinyl)", artist:"Magdalena Bay", src:"/magdalenabay.jpg", key:"vinyl-1", price:"679,95 DKK"},
  {name:"Run The Jewels - 2LP (Split-Farvet Vinyl)", artist:"Run The Jewels", src:"/runthejewels.jpg", key:"vinyl-2", price:"329,95 DKK"},
  {name:"Faces - 3LP (Gul Vinyl)", artist:"Mac Miller", src:"/macmiller.jpg", key:"vinyl-3", price:"499,95 DKK"},
  {name:"Melt My Eyez, See Your Future - CD", artist:"Denzel Curry", src:"/denzelcurry.jpg", key:"vinyl-4", price:"129,95 DKK"},
  {name:"Wlfgrl (10+ Anniversary Edition) - 2LP", artist:"Machine Girl", src:"/machinegirl.jpg", key:"vinyl-5", price:"319,95 DKK"},
  {name:"The Crux - LP", artist:"Djo", src:"/djo.jpg", key:"vinyl-6", price:"189,95 DKK"}
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
  <h2 class="carouselHeader">NYHEDER</h2>
  <div class="productsDiv">
    <button v-on:click="prev" class="buttonLeft" aria-label="Scroll to the left"></button>
    <div class="carousel">
      <div class="inner" :style="{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }">
        <div class="card" v-for="vinyl in vinyls" :key="vinyl.key">
          <img :src="vinyl.src" :alt="vinyl.name" />
          <p class="productTitle"> {{ vinyl.name }} </p>
          <p class="productArtist"> {{ vinyl.artist }} </p>
          <p class="productPrice"> {{ vinyl.price }} </p>
          <button class="kurvButton">LÆG I KURV</button>
        </div>
      </div>
    </div>
    <button v-on:click="next" class="buttonRight" aria-label="Scroll to the right"></button>
  </div>
</template>
