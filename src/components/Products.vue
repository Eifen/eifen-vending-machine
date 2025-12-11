<script setup lang="ts">
import type IItems from '../interfaces/item.interface.js';


defineProps<{
    items: IItems[]
}>()

</script>

<template>
    <template v-for="(item, pos) in items" :key="pos">
        <div class="items">
            <div class="items-image">
                <img :src="item.img" :alt="item.name"></img>
            </div>
            <div class="items-command">({{ item.number }}) {{ item.price }}</div>
        </div>
    </template>
</template>