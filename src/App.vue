<template>
  <header>
    <nav></nav>
  </header>
  <main>
    <RouterView />
  </main>
  <footer>
    {{ new Date().toString() }}
  </footer>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
</script>
