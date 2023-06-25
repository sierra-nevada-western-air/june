<template>
  <p>{{ state }}</p>
  <button @click="(): void => setState(++state)">Increase</button>
</template>

<script setup lang="ts">
import useState from "./UseState";

const [state, setState] = useState<number>(0);
</script>
