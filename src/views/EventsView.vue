<script setup>
import EventOpslag from '@/components/EventOpslag.vue';
import EventTekst from '@/components/EventTekst.vue';
import FooterBar from '@/components/FooterBar.vue';
import ManualBar from '@/components/ManualBar.vue';
import TheHeader from '@/components/TheHeader.vue';
</script>

<template>
  <main>
    <the-header />
    <EventTekst />
    <EventOpslag />
    <ManualBar />
    <FooterBar />
  </main>
</template>
