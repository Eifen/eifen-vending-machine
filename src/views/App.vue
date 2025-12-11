<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Products from '../components/Products.vue';
import type IItems from '../interfaces/item.interface.js';
import axiosError from '../hooks/axiosError.js';
import machineConfig from '../hooks/machineConfig.js';
import Billings from '../components/Billings.vue';
import Output from '../components/Output.vue';

//Local VAR
const items = ref<IItems[]>([])
const number = ref<string>('');
const buys = ref<number>(0);
const loadingBadge = ref<boolean>(false)
const loadingMessage = ref<string>('Loading products. . .')

onMounted(async () => {
  try {
    items.value = await machineConfig()
    loadingBadge.value = true
    console.log(items.value)
  } catch (error) {
    loadingMessage.value = 'Something went wrong.'
    console.error(axiosError(error))
  }
})

//Handler
function buy(target: string) {
  buys.value++
  number.value = target
}

function reset() {
  buys.value = 0;
  number.value = '';
}
</script>

<template>
  <div v-if="!loadingBadge" class="loading">{{ loadingMessage }}</div>
  <div v-if="loadingBadge" class="machine-container">
    <div class="machine-container-header">
      <span>Beer Machine</span>
    </div>
    <div class="machine-container-products">
      <Products :items="items"></Products>
    </div>
    <div class="machine-container-bill">
      <Billings :items="items" @buy-success="buy($event)" :key="buys"></Billings>
    </div>
    <div class="machine-container-output">
      <div class="machine-container-output-product">
        <Output :items="items" :number="number" :key="buys" @return="reset()"></Output>
      </div>
    </div>
  </div>
</template>
