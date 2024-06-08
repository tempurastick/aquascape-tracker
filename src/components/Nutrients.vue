<script setup>
import {defineProps} from 'vue';

const props = defineProps({
  aquascape: {
    type: Object,
    required: true,
  }
})

</script>

<template>
  <div class="flex flex-col pt-2 pb-3 px-2 col-span-3">
    <h3 class="font-bold uppercase">Nutrients</h3>
    <table class="grid col-auto gap-1 w-full text-left">
      <thead class="bg-gray-200">
      <tr>
        <th v-for="(param, title) in aquascape.parameters">{{ title }}</th>
      </tr>
      </thead>
      <tr>
        <td v-for="(param, title) in aquascape.parameters">
          {{ param }}
        </td>
      </tr>

    </table>
  </div>
</template>

<style scoped>

</style>
