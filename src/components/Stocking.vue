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
    <h3 class="font-bold text-2xl uppercase pb-1 mb-2 px-2 border-b border-black">Stocking</h3>
    <div class="divide-black divide-y md:divide-y-0 divide-x-0 md:divide-x">
      <ul class="flex flex-row gap-8 px-2 mt-4 flex-wrap justify-start">
        <li v-for="animal in aquascape.stocking" :key="animal.id" class="basis-[45%] md:basis-32 ">
          <img :src="animal.img" :alt="animal.nameScientific" class="w-16 md:w-full h-16 md:h-32 mx-auto md:mx-0 object-cover">
          <p class="mt-2 text-center md:text-left">
            {{ animal.nameScientific }} <br/>
            <em>{{ animal.type }}</em>
          </p>

        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

</style>
