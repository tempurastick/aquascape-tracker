<script setup>
  import { defineProps } from 'vue';
  import Nutrients from "@/components/Nutrients.vue";

  const props = defineProps({
    aquascape: {
      type: Object,
      required: true,
    }
  })
</script>

<template>
  <div class="container mx-auto max-w80 px-4 md:px-0 mt-4 mb-8">
    <h3 class="font-bold text-2xl uppercase pb-1 mb-2 px-2 border-b border-black">Upkeep</h3>
    <dl class="grid grid-cols-1 md:grid-cols-4 divide-black divide-y md:divide-y-0 divide-x-0 md:divide-x">
      <div class="flex flex-col pt-2 pb-3 px-2 md:col-span-1">
        <dt class="font-bold uppercase">Water Change</dt>
        <dd > Latest: {{ aquascape.upkeep.waterChange }} </dd>
        <dd > Rhythm: {{ aquascape.upkeep.waterChangeCycle }} </dd>
      </div>
      <nutrients :aquascape="aquascape.upkeep" />
    </dl>
  </div>
</template>

<style scoped>

</style>
