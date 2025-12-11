<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type IItems from '../interfaces/item.interface.js';

const props = defineProps<{
    items: IItems[],
    number: string
}>()

const emits = defineEmits<{
    return: []
}>()

//Rel
const imgDistribution = ref<HTMLDivElement | null>(null);
const url = ref<string>('')

onMounted(() => {
    imgDistribution.value?.classList.add('show-buy')
    url.value = props.items.find(item => item.number === props.number.toUpperCase())?.img ?? ''
})

//Handler
function returnOutput() {
    const payload = props.items.find(item => item.number === props.number.toUpperCase())?.name ?? ''
    alert(`${payload.toUpperCase()} OBTAINED!`)
    emits('return')
}
</script>
<template>
    <div class="output-distribution" @click="returnOutput()">
        <template v-if="number.length > 0">
            <div>
                Thank you for your purchase! Click here to retrieve your product.
            </div>
            <img ref="imgDistribution" :src="url" alt="imagen de compra" />
        </template>
    </div>
</template>