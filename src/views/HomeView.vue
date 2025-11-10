<script setup>
import InfoBarFirst from '@/components/InfoBarFirst.vue';
import IntroVideo from '@/components/IntroVideo.vue';
import NyhederCarousel from '@/components/NyhederCarousel.vue';
import ProductCarousel from '@/components/ProductCarousel.vue';
import TheHeader from '@/components/TheHeader.vue';
import FooterBar from '@/components/FooterBar.vue';
import InfoBarSecond from '@/components/InfoBarSecond.vue';
</script>

<template>
  <main>
    <the-header />
    <IntroVideo />
    <ProductCarousel />
    <InfoBarFirst />
    <NyhederCarousel />
    <InfoBarSecond />
    <FooterBar />
  </main>
</template>