<template>
    <body id="test">
        <MyCarrouselVue  />
        <MyHistoric />
      
    </body>

</template>

<script>

import MyHistoric from '@/components/MyHistoric.vue';
import MyCarrouselVue from '../components/MyCarrousel.vue';
    export default {
        name : "HomeView",
        components: {
            MyHistoric,
            MyCarrouselVue
        }
    }
</script>

