<script setup lang="ts">
import { nextTick, ref, watch } from 'vue';
import type IItems from '../interfaces/item.interface.js';
import machineControl from '../hooks/machineControl.js';

//Hooks
const { preview, code, searchProduct } = machineControl()

const props = defineProps<{
    items: IItems[]
}>()

defineEmits<{
    buySuccess: [value: string]
}>()

//Conditions
const previewIs0 = () => (preview.value.length > 0 && typeof props.items.find(item => item.number === code.value.toUpperCase()) !== 'undefined')
const codeIsIncorrect = () => code.value.length > 0 && code.value.length <= 3

//Watchers
watch(code, (newValue, oldValue) => {
    preview.value = ''
    if (newValue.length > 3) {
        nextTick(() => {
            code.value = oldValue
        })
    };
})

//Handler
function preparePreview(payload: IItems[]) {
    preview.value = searchProduct(payload)
}
</script>

<template>
    <div class="bill-distribution">
        <textarea class="bill-distribution-input" placeholder="Insert Product Code" rows="1" v-model="code"></textarea>
        <button class="bill-distribution-search" type="button" :disabled="!codeIsIncorrect()"
            @click="preparePreview(items)">Search</button>
        <div class="bill-distribution-preview">{{ preview }}</div>
        <button class="bill-distribution-buy" type="button" :disabled="!previewIs0()" :key="preview"
            @click="$emit('buySuccess', code.toUpperCase())">Buy</button>
    </div>
</template>