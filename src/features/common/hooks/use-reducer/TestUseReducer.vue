<template>
  {{ state }}
  <button @click="(): void => dispatcher('increase')">Increase</button>
  <button @click="(): void => dispatcher('decrease')">Decrease</button>
  <button @click="(): void => dispatcher('default')">Default</button>
</template>

<script setup lang="ts">
import useReducer from "./UseReducer";

const reducer = (state: number, action: string): number => {
  switch (action) {
    case "increase": {
      return ++state;
    }
    case "decrease": {
      return --state;
    }
    default: {
      return state;
    }
  }
};

const [state, dispatcher] = useReducer(reducer, 0);
</script>
