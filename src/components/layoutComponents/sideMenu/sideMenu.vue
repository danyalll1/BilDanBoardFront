<script setup lang="ts">
import { menuList } from "./staticData.ts";
</script>

<template>
  <aside class="menu">
    <v-btn :to="link" v-for="{ link, text, permission } in menuList" >
      {{text}}
    </v-btn>
  </aside>
</template>

<style lang="sass" scoped>
.menu
  display: flex
  flex-direction: column
  gap: 8px
  max-width: 320px
  padding: 24px
</style>