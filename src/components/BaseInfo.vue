<script setup>
import {computed, defineProps} from 'vue';

  const props = defineProps({
    aquascape: {
      type: Object,
      required: true
    },
    volume: {
      type: Number,
      required: true
    }
  });

</script>

<template>
  <div class="container mx-auto max-w80 px-4 md:px-0 mt-4 mb-8">

    <h3 class="font-bold text-2xl uppercase pb-1 mb-2 px-2 border-b border-black">Base Info</h3>
    <dl class="grid grid-cols-1 md:grid-cols-2 divide-black divide-y md:divide-y-0 divide-x-0 md:divide-x">
      <div class="flex flex-col pt-2 pb-3 px-2">
        <dt class="font-bold uppercase">Dimensions</dt>
<!--    TODO: add dimension picker    -->
        <dd> {{ aquascape.dimensions.width }} x {{ aquascape.dimensions.height }} x {{ aquascape.dimensions.depth }}</dd>
      </div>

      <div class="flex flex-col pt-2 pb-3 px-2">
        <dt class="font-bold uppercase">Volume</dt>
<!-- TODO: add gallon to volume converter -->
        <dd > {{ volume }} </dd>
      </div>

      <div class="flex flex-col pt-2 pb-3 px-2">
        <dt class="font-bold uppercase">Filter</dt>
        <dd>{{ aquascape.technical.filter }}</dd>
      </div>
      <div class="flex flex-col pt-2 pb-3 px-2">
        <dt class="font-bold uppercase">Light</dt>
        <dd>{{ aquascape.technical.light }}</dd>
      </div>
    </dl>
  </div>
</template>

<style scoped>

</style>
