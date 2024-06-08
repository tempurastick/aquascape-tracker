<script setup>
import {computed, onMounted, ref} from 'vue';
  import ScapeGallery from "./components/ScapeGallery.vue";
  import BaseInfo from "@/components/BaseInfo.vue";
import Layout from "@/components/Layout.vue";
import Plants from "@/components/Plants.vue";
import Stocking from '@/components/Stocking.vue';
import Upkeep from "@/components/Upkeep.vue";

  const aquascape = ref({
    name: 'cool scape xoxo',
    dimensions: {
      width: 90,
      height: 30,
      depth: 40
    },
    technical: {
      filter: 'HOB',
      light: 'Kessel'
    },
    type: 'freshwater',
    hardscape: [
      { id: 0, name: 'Seiryuu', type: 'Rock'},
      { id: 1, name: 'Spider Wood', type: 'Wood'},
      { id: 2, name: 'Dragon Stone', type: 'Rock'},
    ],
    soil: 'ADA Amazona',
    /* TODO: create restAPI from https://www.flowgrow.de/db/aquaticplants */
    plants: [
      {id: 0, nameScientific: 'Didiplis diandra', nameEng: 'Water Hedge', img: 'https://www.flowgrow.de/db/images/wasserpflanzen/info/didiplis-diandra-4f7a01710d0a3.jpg'},
      {id: 1, nameScientific: 'Glossostigma elatinoides', nameEng: 'Small mud-mat', img: 'https://www.flowgrow.de/db/images/wasserpflanzen/detail/glossostigma-elatinoides-4f7a01b4575e6.jpg'},
      {id: 2, nameScientific: 'Persicaria sp. \'Sao Paulo\'', nameEng: '', img: 'https://www.flowgrow.de/db/images/wasserpflanzen/info/persicaria-sp-sao-paulo-5204ebb4e9a7c.jpg'},
      {id: 3, nameScientific: 'Phyllanthus fluitans', nameEng: 'Red root floater', img: 'https://www.flowgrow.de/db/images/wasserpflanzen/info/phyllanthus-fluitans-5308cb4fb0d8c.jpg'},
    ],
    //  for fish: https://fishbase.se/search.php or https://www.flowgrow.de/db/fische
    stocking: [
      {id: 0, nameScientific: 'Betta Imbelis', nameEng: '', img: 'https://www.flowgrow.de/db/images/fische/info/betta-imbellis-51234a361d98f.jpg', type: 'fish'},
      {id: 1, nameScientific: 'Boraras Brigittae', nameEng: 'Schwanzfleckbärbling', img: 'https://www.flowgrow.de/db/images/fische/info/boraras-brigittae-51234a31767ae.jpg', type: 'fish'},
      {id: 2, nameScientific: 'Caridina cf. cantonensis king kong', nameEng: 'King Kong', img: 'https://www.flowgrow.de/db/images/wirbellose/info/caridina-cf-cantonensis-king-kong-5152b5435acd4.jpg', type: 'vertibrae'},
    ],
    upkeep: {
      waterChange: '06.06.2024',
      waterChangeCycle: '1x a week',
      fertilizers: [
          { id: 0, type: 'NPK', cycle: '1x a week'},
          { id: 1, type: 'EI', cycle: '3x a week'}
      ],
      parameters: {
        testingData: '06.06.2024',
        temperature: 26,
        ph: 5.5,
        ammonia: 0.0,
        no2: 2.0,
        no3: 0.0,
        nh4: 0.0,
        kh: 6,
        gh: 4,
        sio: 1.0,
        cu: 0.0,
        fe: 0.0,
        po4: 0.0,
        co2: 0.0,
        mg: 0.0,
      }
    }
  })

/* TODO: change to switch cases */
  const liter = true;

  onMounted(() => {
    const savedScape = JSON.parse(localStorage.getItem('aquascape'))

    if(savedScape) {
      aquascape.value = savedScape;
    }
  })

  const volume = computed( () => {
      let scape = aquascape.value.dimensions;
      let volumeDim = scape.width * scape.height * scape.depth;

      if(liter) {
        return (volumeDim/1000);
      }

    return (volumeDim);
  })
</script>

<template>
  <scape-gallery  />
  <base-info :aquascape="aquascape" :volume="volume"/>
  <layout :aquascape="aquascape"/>
  <plants :aquascape="aquascape"/>
  <stocking :aquascape="aquascape"/>
  <upkeep :aquascape="aquascape" />
</template>
