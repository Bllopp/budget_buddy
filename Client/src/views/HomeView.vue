<template>
    <Header />
    <MyHistoric />
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