<script setup lang="ts">
import { ClearLayout } from "@/components/layouts/clearLayout";
import { DefaultLayout } from "@/components/layouts/defaultLayout";
import {computed} from "vue";
import {useRoute} from "vue-router";

const route = useRoute()
const layoutComponent = computed(()=>{
  if(route.meta.layout === 'default'){
    return DefaultLayout
  }
  if(route.meta.layout === 'clear'){
    return ClearLayout
  }
  else{
    return DefaultLayout
  }
})

</script>

<template>
  <component :is="layoutComponent"/>
</template>

<style lang="sass" scoped>

</style>