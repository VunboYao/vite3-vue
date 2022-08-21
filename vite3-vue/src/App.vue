<script setup>
import HelloWorld from '@/components/HelloWorld.vue'
import ResolveFoo from "comp/ResolveFoo.vue";
</script>

<template>
  <HelloWorld msg="Vite + Vue" />
  <ResolveFoo/>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
