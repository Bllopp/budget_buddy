<template>
    <body id="test">
        <MyHeader title="Budget Buddy" />
        <MyCarrouselVue  />
        <MyHistoric />
      
    </body>

</template>

<script>
import MyHeader from '@/components/MyHeader.vue';
import MyHistoric from '@/components/MyHistoric.vue';
import MyCarrouselVue from '../components/MyCarrousel.vue';
    export default {
        name : "HomeView",
        components: {
            MyHistoric,
            MyCarrouselVue,
            MyHeader
        }
    }
</script>

