<template>
    <MyHistoric />
    <button @click="tab = 'ScanReceipt'">Scan receipt</button>
</template>

<script>
import MyHistoric from '@/components/MyHistoric.vue';
    export default {
        name : "HomeView",
        components: {
            MyHistoric,
        }
    }
</script>