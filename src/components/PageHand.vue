<script lang="ts" setup>
import {ref} from "vue";
const domain = ref(window.location.host)
</script>

<template>
  <div class="flex justify-center items-center h-full text-5xl fw-100">
    <img src="../assets/images/avatar.webp" alt="Avatar" />
    <h1>
      name := {{ domain }}
    </h1>
  </div>
</template>

<style scoped>

</style>