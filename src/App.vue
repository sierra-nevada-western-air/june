<template>
  <header>
    <nav></nav>
  </header>
  <main>
    <RouterView />
  </main>
  <footer></footer>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
</script>
