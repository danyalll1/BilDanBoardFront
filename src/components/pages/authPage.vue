<script setup lang="ts">
import { AuthWidget } from "@/components/authWidget";
</script>

<template>
  <section class="auth">
    <div class="container">
      <AuthWidget class="auth__form"/>
    </div>
  </section>
</template>

<style lang="sass" scoped>
.auth

  &__form
    max-width: 674px
    margin: auto auto
</style>