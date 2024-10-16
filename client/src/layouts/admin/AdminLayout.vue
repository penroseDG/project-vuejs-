<template>
  <div class="flex w-full">
    <Menu />
    <div class="flex-1">
      <Header />
      <div class="bg-green-300 h-[calc(100vh-64px)]">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from "./Header.vue";
import Menu from "./Menu.vue";
</script>

<style></style>
