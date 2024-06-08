<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  aquascape: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="container mx-auto max-w80 px-4 md:px-0 mt-4 mb-8">
    <h3 class="font-bold text-2xl uppercase pb-1 mb-2 px-2 border-b border-black">Layout</h3>
    <dl class="grid grid-cols-1 md:grid-cols-2 divide-black divide-y md:divide-y-0 divide-x-0 md:divide-x">
      <div class="flex flex-col pt-2 pb-3 px-2">
        <span class="font-bold uppercase"> Hardscape</span>
        <ul class="">
<!-- can I cross-reference items from this list and map them onto a different database as keywords?  -->
        <li v-for="item in aquascape.hardscape" :key="item.id">
          {{ item.name }}
        </li>
        </ul>
      </div>

      <div class="flex flex-col pt-2 pb-3 px-2">
        <dt class="font-bold uppercase">Soil</dt>
        <dd > {{ aquascape.soil }} </dd>
      </div>
    </dl>
  </div>
</template>

<style scoped>

</style>
