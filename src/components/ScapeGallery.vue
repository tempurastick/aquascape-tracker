<script setup>
  import axios from "axios";
  import {ref, reactive,  onMounted, computed} from 'vue';
  const img = ref([]);

  const getImgs = () => {
    return axios
        .get('https://random.dog/woof.json')
        .then((res) => img.value = res.data)
        .catch((error) => console.log(error))
  }

  onMounted( () => {
    getImgs();
  })

</script>

<template>
  <img :src="img.url" alt="Dummy Data" class="scapeGallery w-100 h-lvh-80 mx-auto">
  <div class="container mx-auto">
    <h2 class="font-bold text-4xl uppercase text-center">Name of Aquascape</h2>
  </div>
</template>

<style scoped>

</style>
