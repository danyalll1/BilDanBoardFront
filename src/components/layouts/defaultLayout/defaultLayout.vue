<script setup lang="ts">
import {Header} from "@/components/layoutComponents/header";
import {SideMenu} from "@/components/layoutComponents/sideMenu";
</script>

<template>
    <div class="app">
      <div class="container">
        <div class="container__left">
          <SideMenu class="app__menu"></SideMenu>
        </div>
        <div class="container__right">
          <Header class="app__header"></Header>
          <div class="app__content">
            <router-view/>
          </div>
        </div>
      </div>
      <div class="app__footer">
        Footer
      </div>
    </div>
</template>

<style lang="sass" scoped>
.app
  position: relative
  min-height: 100vh
  
  .container
    display: flex
    gap: 24px
    height: 100%

    &__left

    &__right
      display: flex
      flex-direction: column
      gap: 24px

  &__header
    padding: 24px

  &__content
    padding: 24px

  &__menu
    position: relative
    top: 0
    bottom: 0

  &__footer
    margin-top: auto


</style>